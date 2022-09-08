import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const userInput = useRef('');

  const formSubmit = (e) => {
    e.preventDefault();
    console.log(userInput.current.value);
  }

  return <>
    <form className='form' onSubmit={formSubmit}>
      <div>
        <input type="text" name="invalue" id="invalue" ref={userInput} />
        <button type="submit">Submit Value</button>
      </div>
    </form>
    <h1>{userInput.current.value}</h1>
  </>;
};

export default UseRefBasics;
