import React, { useState } from 'react';
import { data } from '../../../data'
// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  }

  return <h2>prop drilling <List people={people} removePerson={removePerson} /></h2>;
};

const List = ({ people, removePerson }) => {
  return <>
    {
      people.map((person) => {
        return <Show key={person.id} {...person} removePerson={removePerson} />
      })
    }
  </>
}

const Show = ({ id, name, removePerson }) => {
  return (
    <div className="item">
      <h4>{name}</h4>
      <button type="submit" onClick={() => removePerson(id)}>Remove</button>
    </div >
  )
}

export default PropDrilling;
