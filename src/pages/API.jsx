import React, { useEffect, useRef, useState } from "react";
import "../styles/API.css";
const API = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [history, setHistory] = useState(
    JSON.parse(localStorage.getItem("captureHistory")) || []
  );
  const [resultText, setResultText] = useState("");

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((err) => console.error("Error accessing webcam:", err));
  }, []);

  const captureImage = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    const context = canvas.getContext("2d");

    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    canvas.toBlob((blob) => {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = () => {
        const dataUrl = reader.result;
        const base64Data = dataUrl.split(",")[1];

        fetch("https://zl77aqpwm5yvlrocwtw4c5nc7y0xxkco.lambda-url.ap-south-1.on.aws", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ image: base64Data }),
        })
          .then((response) => response.json())
          .then((data) => {
            const result = `Liveness: ${data.label}, Confidence: ${data.confidence.toFixed(2)}`;
            setResultText(result);
            addToHistory(blob, data);
          })
          .catch((error) => console.error("Error:", error));
      };
    }, "image/jpeg");
  };

  const addToHistory = (blob, data) => {
    if (history.length >= 10) history.shift();

    const reader = new FileReader();
    reader.onload = (e) => {
      const newHistory = [
        ...history,
        {
          imgSrc: e.target.result,
          result: `Liveness: ${data.label}, Confidence: ${data.confidence.toFixed(2)}`,
          label: data.label,
        },
      ];
      setHistory(newHistory);
      localStorage.setItem("captureHistory", JSON.stringify(newHistory));
    };
    reader.readAsDataURL(blob);
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem("captureHistory");
  };

  return (
    <div className="outer-container">
      <section className="capture-container">
        <h2 className="header">Check Your Liveness</h2>
        <div className="camera-container">
          <video ref={videoRef} autoPlay></video>
        </div>
        <button id="capture" onClick={captureImage}>
          Capture & Verify
        </button>
        <p id="result">{resultText}</p>
      </section>

      <section className="history-container">
        <h2 className="header">Results</h2>
        <div className="history-list">
          {history.map((item, index) => (
            <div
              key={index}
              className={`history-item ${item.label == 1 ? "green-border" : "red-border"}`}
            >
              <img src={item.imgSrc} alt="Captured" />
              <p>{item.result}</p>
            </div>
          ))}
        </div>
        <button id="clearHistory" onClick={clearHistory}>
          Clear History
        </button>
      </section>

      <canvas ref={canvasRef} width="360" height="480" style={{ display: "none" }}></canvas>
    </div>
  );
};

export default API;
