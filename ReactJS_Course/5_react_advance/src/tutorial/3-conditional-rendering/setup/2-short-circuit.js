import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('sahil');
  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';

  return <>
    <h2>Var1: {firstValue}</h2>
    <h2>Var2: {secondValue}</h2>
    <h2>Var3: {'' && text}</h2>
  </>;
};

export default ShortCircuit;
