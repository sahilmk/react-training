import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [person, setPerson] = useState([]);

  const getData = (e) => {
    e.preventDefault();

    if (fName && lName) {
      const buffer = { id: new Date().getTime().toString(), firstName: fName, lastName: lName };
      setPerson((person) => {
        return [...person, buffer];
      });
      setFName('');
      setLName('');
    }
  }

  return <>
    <form className="form" onSubmit={getData}>
      <div className="from-control" style={{ marginBottom: '20px' }}>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" name="firstName" id="firstName" value={fName} onChange={(e) => { setFName(e.target.value) }} />
      </div>
      <div className="from-control">
        <label htmlFor="lastName">Last Name:</label>
        <input type="text" name="lastName" id="lastName" value={lName} onChange={(e) => { setLName(e.target.value) }} />
      </div>
      <button type="submit">Submit Form</button>
    </form>
    {
      person.map((user) => {
        return (
          <div className="item" key={user.id}>
            <h3>{user.firstName}</h3>
            <p>{user.lastName}</p>
          </div>
        )
      })
    }

  </>;
};

export default ControlledInputs;
