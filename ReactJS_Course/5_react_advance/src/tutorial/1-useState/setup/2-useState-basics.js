import React, { useState } from 'react';

const UseStateBasics = () => {
  let [strValue, setStrValue] = useState('Hello');

  const changeHeading = () => {
    if (strValue === 'Hello') {
      setStrValue('How are you')
    } else {
      setStrValue('Hello');
    }
  }

  return (
    <React.Fragment>
      <h1>{strValue}</h1>
      <button type="submit" className='btn' onClick={changeHeading}>Change the Heading</button>
    </React.Fragment>
  );
};

export default UseStateBasics;
