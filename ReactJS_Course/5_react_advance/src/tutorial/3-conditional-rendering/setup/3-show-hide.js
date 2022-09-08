import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show, setShow] = useState(false);

  return <>
    <button type="submit" className='btn' onClick={() => setShow(!show)}>Show/Hide</button>
    {show && <Showwidth />}
  </>;
};

const Showwidth = () => {
  const [size, setSize] = useState(window.innerWidth);
  const updatesize = () => {
    setSize(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', updatesize);
    return () => {
      window.removeEventListener('resize', updatesize);
    }
  }, []);

  return <>
    <h1>Window Width:</h1>
    <h2>{size}PX</h2>
  </>
}

export default ShowHide;
