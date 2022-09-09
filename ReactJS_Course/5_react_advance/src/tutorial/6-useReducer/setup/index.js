import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
import { reducer } from './reducer';
// reducer function

const defaultState = {
  people: [],
  isModal: false,
  modalMessage: ''
}

const Index = () => {
  const [name, setName] = useState('');
  const [state, dispatch] = useReducer(reducer, defaultState);

  const addPerson = (e) => {
    e.preventDefault();
    if (name) {
      const newUser = { id: new Date().getTime().toString(), name }
      dispatch({ type: 'VALUE', payload: newUser });
      setName('');
    } else {
      dispatch({ type: 'NO_VALUE' });
    }
  }

  const removeMessage = () => {
    dispatch({ type: 'REMOVE_MESSEGE' });
  }

  return <>
    {state.isModal && <Modal message={state.modalMessage} removeMessage={removeMessage} />}
    <form className="form">
      <div>
        <input type="text" name="userName" id="userName" value={name} onChange={(e) => {
          setName(e.target.value);
        }} />
      </div>
      <button type="submit" onClick={addPerson}>Add name</button>
    </form>
    {
      state.people.map((user) => {
        return <h3 key={user.id} className='item'>
          {user.name}
          <button type="submit" className='btn' onClick={() => { dispatch({ type: 'REMOVE_ITEM', payload: user.id }) }}>Remove</button>
        </h3>
      })
    }
  </>;
};

export default Index;
