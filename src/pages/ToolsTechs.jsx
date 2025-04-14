import React,{useState,useEffect} from "react";
import { Link, Element } from "react-scroll";
import { motion } from "framer-motion";
import "../styles/ToolsTechs.css";
import aws from "../assets/icons/aws.png";
import mongodb from "../assets/icons/mongodb.png";
import redis from "../assets/icons/redis.png";
import python from "../assets/icons/python.png";
import ngrok from "../assets/icons/ngrok-2.png";
import node from "../assets/icons/nodejs.png";
import reactNative from "../assets/icons/react.png";

const icons = {
  reactNative: reactNative,
  node: node,
  ngrok: ngrok,
  mongodb: mongodb,
  redis: redis,
  python: python,
  aws: aws,
};

const documentationData = [
  {
    id: "react-native",
    title: "React Native",
    icon: icons.reactNative,
    description: (
      <>
        <p>
          <strong>React Native</strong> was our choice for developing the
          Android app portion of our Digital Attendance software. We leveraged
          its component-based architecture to build efficient, reusable UI
          components for a seamless mobile experience.
        </p>
        <p>
          A key package was <em>react-native-community/geolocation</em> which
          provided robust and accurate location proximity services, ensuring
          real-time location awareness required for attendance tracking.
        </p>
      </>
    ),
  },
  {
    id: "node-js",
    title: "Node JS",
    icon: icons.node,
    description: (
      <>
        <p>
          <strong>Node.js</strong> powered our backend environment, delivering
          high performance and scalability needed for real-time operations.
        </p>
        <p>
          The main framework, <em>Express.js</em>, was used to build a robust
          server and RESTful API that efficiently manages all application
          requests. Express provided the necessary structure and middleware to
          process every core functionality, from authentication to data routing.
        </p>
      </>
    ),
  },
  {
    id: "ngrok",
    title: "Ngrok",
    icon: icons.ngrok,
    description: (
      <>
        <p>
          <strong>Ngrok</strong> was a vital tool during development for
          exposing local servers to the internet securely. It allowed us to test
          webhooks and access our development server remotely without the hassle
          of deploying each time.
        </p>
        <p>
          This convenience sped up debugging and testing, ensuring our Digital
          Attendance software was reliable across various environments.
        </p>
      </>
    ),
  },
  {
    id: "mongodb",
    title: "MongoDB",
    icon: icons.mongodb,
    description: (
      <>
        <p>
          <strong>MongoDB</strong> was used as our primary database solution.
          Its document-oriented model provided us with the flexibility required
          to manage dynamic datasets such as user profiles, attendance logs, and
          session data.
        </p>
      </>
    ),
  },
  {
    id: "redis",
    title: "Redis",
    icon: icons.redis,
    description: (
      <>
        <p>
          <strong>Redis</strong> was integrated for storing temporary data like
          faculty locations and enrollment requests. Its in-memory data
          structure store drastically improved response times and enabled
          real-time data processing, making it perfect for transient data that
          demands high-speed access.
        </p>
      </>
    ),
  },
  {
    id: "python",
    title: "Python",
    icon: icons.python,
    description: (
      <>
        <p>
          <strong>Python</strong> played a crucial role in building our advanced
          models. We utilized it to develop both the liveness detection model
          and the face recognition model that ensure secure and effective user
          verification.
        </p>
      </>
    ),
  },
  {
    id: "aws",
    title: "AWS",
    icon: icons.aws,
    description: (
      <>
        <p>
          <strong>AWS</strong> was chosen to host our liveness detection and
          face recognition models. AWS provided the scalability, reliability,
          and security required to serve these compute-intensive models at
          scale, supporting the growing demand of our Digital Attendance
          software.
        </p>
      </>
    ),
  },
];
const ToolsTechs = () => {
  const [isTOCVisible, setIsTOCVisible] = useState(false);

  const toggleTOC = () => {
    setIsTOCVisible(!isTOCVisible);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="doc-page-container">
      <div className="toc-container">
        <button className="toc-toggle" onClick={toggleTOC}>
          {isTOCVisible ? "Hide TOC" : "Show TOC"}
        </button>
        <div className={`toc ${isTOCVisible ? "visible" : ""}`}>
          <h2>Tools &amp; Techs</h2>
          <ul>
            {documentationData.map((section) => (
              <li key={section.id}>
                <Link
                  activeClass="active"
                  to={section.id}
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                >
                  {section.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="doc-content">
        {documentationData.map((section) => (
          <Element key={section.id} name={section.id} className="element">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="section"
            >
              <div className="section-header">
                {section.icon && (
                  <img
                    src={section.icon}
                    alt={`${section.title} Icon`}
                    className="tech-icon"
                  />
                )}
                <h2>{section.title}</h2>
              </div>
              <div className="section-body">{section.description}</div>
            </motion.div>
          </Element>
        ))}
      </div>
    </div>
  );
};

export default ToolsTechs;