import React, { useState, useEffect } from 'react';

const TrueFocus = ({ 
  sentence = "True Focus", 
  manualMode = false, 
  blurAmount = 5, 
  borderColor = "red", 
  animationDuration = 2,
  pauseBetweenAnimations = 1 
}) => {
  const words = sentence.split(' ');
  const [focusedIndex, setFocusedIndex] = useState(0);

  useEffect(() => {
    if (manualMode || words.length === 0) return;

    const totalDuration = (animationDuration + pauseBetweenAnimations) * 1000;
    const interval = setInterval(() => {
      setFocusedIndex(prev => (prev + 1) % words.length);
    }, totalDuration);

    return () => clearInterval(interval);
  }, [words.length, manualMode, animationDuration, pauseBetweenAnimations]);

  return (
    <div className="true-focus-container">
      <div className="true-focus-text">
        {words.map((word, index) => (
          <span
            key={index}
            className={`true-focus-word ${focusedIndex === index ? 'focused' : 'blurred'}`}
            style={{
              '--blur-amount': `${blurAmount}px`,
              '--border-color': borderColor,
              '--animation-duration': `${animationDuration}s`,
              '--pause-duration': `${pauseBetweenAnimations}s`
            }}
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TrueFocus;
