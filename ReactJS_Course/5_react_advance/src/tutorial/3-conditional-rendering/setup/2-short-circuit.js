import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('sahil');
  const [error, setError] = useState(false);
  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';

  return <>
    <h2>Var1: {firstValue}</h2>
    <h2>Var2: {secondValue}</h2>
    <h2>Var3: {'' && text}</h2>
    <button type="submit" onClick={() => setError(!error)} className='btn'>Get an error</button>
    {error && <h1>Error</h1>}
    {error ? <h3>Error...</h3> : <p>There is no error</p>}
  </>;
};

export default ShortCircuit;
