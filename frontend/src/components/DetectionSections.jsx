import { motion } from "framer-motion";
import "./DetectionSections.css";

export default function DetectionSections() {
  const sections = [
    {
      title: "Fake News Detection",
      desc: "Instantly verify headlines and breaking news using AI-powered source validation and linguistic analysis.",
      btn: "Detect Fake News",
    },
    {
      title: "Fake Product Detection",
      desc: "Scan product images to detect counterfeit packaging, wrong labels, and manipulated serial numbers.",
      btn: "Detect Fake Product",
    },
    {
      title: "Fake Review Detection",
      desc: "Analyze product reviews to identify bot-generated, duplicate, or manipulated ratings.",
      btn: "Detect Fake Reviews",
    },
  ];

  // Duplicate array to make seamless loop
  const loopSections = [...sections, ...sections];

  return (
    <section className="detect-wrapper">
      <div className="loop-mask">
        <motion.div
          className="loop-track"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 15,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {loopSections.map((s, i) => (
            <div key={i} className="detect-card">
              <h2>{s.title}</h2>
              <p>{s.desc}</p>
              <button>{s.btn}</button>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}