import React, { useState, useEffect } from 'react';

const TextChanger = () => {
  const texts = [" Web Developer", " Frontend Developer", " React Developer", " Digital Marketer"];
  const [currentText, setCurrentText] = useState('');
  // `charIndex` tracks the length of the displayed text for typing/deleting effect
  const [charIndex, setCharIndex] = useState(0); 
  // `textIndex` tracks which text from the `texts` array is currently being typed
  const [textIndex, setTextIndex] = useState(0); 
  const [isDeleting, setIsDeleting] = useState(false);
  
  // Speed settings (in milliseconds)
  const typingSpeed = 200;
  const deletingSpeed = 200;
  const delayBeforeDeleting = 300; // 3 seconds delay

  useEffect(() => {
    // Current text to work with from the array
    const currentFullText = texts[textIndex];
    let intervalId;
    let speed = isDeleting ? deletingSpeed : typingSpeed;

    const handleTypingEffect = () => {
      if (isDeleting) {
        // --- Deleting Logic ---
        if (charIndex > 0) {
          // Decrement charIndex to simulate deletion
          setCharIndex(prev => prev - 1);
        } else {
          // When deletion is complete, stop deleting and move to the next text
          setIsDeleting(false);
          // Move to the next text in the array, wrapping around
          setTextIndex(prev => (prev + 1) % texts.length);
        }
      } else {
        // --- Typing Logic ---
        if (charIndex < currentFullText.length) {
          // Increment charIndex to simulate typing
          setCharIndex(prev => prev + 1);
        } else {
          // When typing is complete, set a longer delay and start deleting
          speed = delayBeforeDeleting;
          setIsDeleting(true);
        }
      }
      
      // Update the displayed text
      setCurrentText(currentFullText.substring(0, charIndex));
    };

    // Set the interval for the typing/deleting effect
    intervalId = setTimeout(handleTypingEffect, speed);

    // Cleanup function to clear the timeout
    return () => clearTimeout(intervalId);
    
  }, [charIndex, isDeleting, textIndex, texts]);

  return <div className='transition ease duration-300'> {currentText} </div>;
}

export default TextChanger;