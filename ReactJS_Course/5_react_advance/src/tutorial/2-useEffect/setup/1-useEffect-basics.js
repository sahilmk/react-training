import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter


const UseEffectBasics = () => {
  let [count, setCount] = useState(0);

  const increaseCounter = () => {
    setCount(count + 1);
  }

  useEffect(() => {
    console.log('hello');
    if (count >= 0) {
      document.title = `React App(${count})`
    }
  }, [count])

  return <>
    <h3>Counter</h3>
    <h1>{count}</h1>
    <button type="submit" className='btn' onClick={increaseCounter}>Increase</button>
  </>;
};

export default UseEffectBasics;
