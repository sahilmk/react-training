import React, { useState, useEffect } from 'react';

// cleanup function
// second argument


const UseEffectCleanup = () => {
  let [windowSize, setwindowSize] = useState(window.innerWidth)

  const updateSize = () => {
    setwindowSize(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', updateSize);
    return () => {
      window.removeEventListener('resize');
    }
  }, [])

  return <>
    <h2>Size of Window:</h2>
    <h1>{windowSize}</h1>
  </>;
};

export default UseEffectCleanup;
