import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import "../styles/API_LIVENESS.css";
import "../styles/API_IDENTIFY.css";

const API_IDENTIFY = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [email, setEmail] = useState("");
  const [imageBlob, setImageBlob] = useState(null);
  const [resultText, setResultText] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let stream;

    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((s) => {
        stream = s;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((err) => console.error("Webcam access error:", err));

    return () => {
      if (stream) stream.getTracks().forEach((track) => track.stop());
    };
  }, []);

  const captureSelfie = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    const context = canvas.getContext("2d");

    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    canvas.toBlob((blob) => {
      setImageBlob(blob);
      setResultText("📸 Selfie captured!");
    }, "image/jpeg");
  };

  const handleSubmit = async () => {
    if (!email || !imageBlob) return;

    setLoading(true);
    setResultText("⏳ Verifying...");

    const reader = new FileReader();
    reader.readAsDataURL(imageBlob);
    reader.onloadend = async () => {
      const base64Data = reader.result.split(",")[1];
      const payload = {
        image: base64Data,
        email: email,
        registration: false,
      };

      try {
        const response = await axios.post(
          "https://zjaxli24s5wu5anukwvvodgtoy0vckbn.lambda-url.ap-south-1.on.aws",
          payload,
          {
            headers: {
              "Content-Type": "application/json",
            },
            validateStatus: function (status) {
              return status < 500;
            }
          }
        );

        console.log("Response:", response);
        
        if (response.status === 200) {
          setResultText("✅ You are already using the app!");
        } else {
          setResultText(`🚫 ${response.data.error}`);
        }
      } catch (error) {
        setResultText("❗ Network or server error occurred.");
      } finally {
        setLoading(false);
      }
    };
  };

  return (
    <div className="outer-container">
      <section className="capture-container">
        <h2 className="header">Identify Yourself</h2>

        <div className="camera-container">
          <video ref={videoRef} autoPlay muted playsInline></video>
        </div>

        <button id="capture" onClick={captureSelfie}>
          Capture Selfie
        </button>

        <input
          type="email"
          placeholder="Enter institute email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="email-input"
        />

        <button
          id="capture"
          style={{ marginTop: "20px", background: "#4caf50", color: "#fff" }}
          onClick={handleSubmit}
          disabled={!email || !imageBlob || loading}
        >
          {loading ? "Verifying..." : "Submit"}
        </button>

        <p id="result">{resultText}</p>
      </section>

      <canvas ref={canvasRef} width="360" height="480" style={{ display: "none" }}></canvas>
    </div>
  );
};

export default API_IDENTIFY;
