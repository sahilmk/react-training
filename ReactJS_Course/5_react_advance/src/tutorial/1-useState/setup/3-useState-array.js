import React from 'react';
import { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  let [user, setUser] = useState(data)

  const RemoveUser = (id) => {
    let newUser = user.filter((people) => people.id !== id);
    setUser(newUser);
  }

  return <>
    {
      user.map((item) => {
        return <div className="item" key={item.id}>
          <h3>{item.name}</h3>
          <button type="submit" className='btn' onClick={() => RemoveUser(item.id)}>Remove</button>
        </div>
      })
    }
    <button type="submit" className='btn' onClick={() => setUser([])}>Remove All the User</button>
  </>;
};

export default UseStateArray;
