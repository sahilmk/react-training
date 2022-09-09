import React, { useState, useContext } from 'react';
import { data } from '../../../data';
// more components
// fix - context api, redux (for more complex cases)

const SomeContext = React.createContext();

const ContextAPI = () => {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };

  return (
    <SomeContext.Provider value={{ removePerson }}>
      <h3>prop drilling</h3>
      <List people={people} />
    </SomeContext.Provider>
  );
};

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
          />
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  const prop = useContext(SomeContext);
  return (
    < div className='item' >
      <h4>{name}</h4>
      <button onClick={() => prop.removePerson(id)}>Remove</button>
    </div >
  );
};

export default ContextAPI;
