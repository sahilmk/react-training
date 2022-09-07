import React, { useState } from 'react';

const UseStateObject = () => {
  const [data, setData] = useState({
    uname: 'person',
    age: 100,
    xender: 'male'
  });

  const changeUser = () => {
    if (data.uname === 'person') {
      setData({ ...data, uname: 'Sahil' });
    } else {
      setData({ ...data, uname: 'person' })
    }
  }

  return <>
    <h3>User Name: {data.uname}</h3>
    <h3>Age: {data.age}</h3>
    <h3>Xender: {data.xender}</h3>
    <button type="submit" className='btn' onClick={() => changeUser()}>Change user name</button>
  </>;
};

export default UseStateObject;
