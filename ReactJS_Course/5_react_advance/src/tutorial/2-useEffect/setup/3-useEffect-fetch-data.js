import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [user, setUser] = useState([]);

  const getUser = async () => {
    const data = await fetch(url);
    const gitUser = await data.json();
    setUser(gitUser);
  }

  useEffect(() => {
    getUser()
  }, [])

  return <>
    <h1>GitHub User</h1>
    <ul className="users">
      {
        user.map((person) => {
          return <li key={person.id}>
            <img src={person.avatar_url} alt="person" />
            <div>
              <h4>{person.login}</h4>
              <a href={person.html_url}>profile</a>
            </div>
          </li>
        })
      }
    </ul>
  </>;
};

export default UseEffectFetchData;
