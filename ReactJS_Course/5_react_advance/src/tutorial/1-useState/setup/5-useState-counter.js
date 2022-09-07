import React, { useState } from 'react';

const UseStateCounter = () => {
  let [count, setCount] = useState(0);

  const IncreaseCounter = () => {
    setTimeout(() => { return setCount((count) => count + 1) }, 2000);
  }

  return <>
    <article style={{ margin: '4px 0' }}>
      <h2>Counter</h2>
      <h1>{count}</h1>
      <button type="submit" className='btn' onClick={() => setCount(count - 1)}>Decrease</button>
      <button type="submit" className='btn' onClick={() => setCount(0)}>Reset</button>
      <button type="submit" className='btn' onClick={() => setCount(count + 1)}>Increase</button>

      <h2>Complex Counter</h2>
      <h1>{count}</h1>
      <button type="submit" className='btn' onClick={() => IncreaseCounter()}>Increase counter after two second</button>
    </article>
  </>;
};

export default UseStateCounter;
