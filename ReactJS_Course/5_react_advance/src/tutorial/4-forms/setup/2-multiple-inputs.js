import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
  const [person, setPerson] = useState({ firstName: '', email: '', age: '' });
  const [people, setPeople] = useState([]);

  const updatePerson = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  }

  const addPerson = (e) => {
    e.preventDefault();
    const buffer = { ...person, id: new Date().getTime().toString() };
    setPeople([...people, buffer]);
    setPerson({ firstName: '', email: '', age: '' });
  }

  return (
    <>
      <article>
        <form className='form' onSubmit={addPerson}>
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={person.firstName}
              onChange={updatePerson}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='email'
              name='email'
              value={person.email}
              onChange={updatePerson}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='age'>Age : </label>
            <input
              type='text'
              id='age'
              name='age'
              value={person.age}
              onChange={updatePerson}
            />
          </div>
          <button type='submit'>add person</button>
        </form>
        {people.map((user) => {
          return (
            <div className='item' key={user.id}>
              <h4>{user.firstName}</h4>
              <p>{user.email}</p>
              <p>{user.age}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
