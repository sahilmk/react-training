import React, { useEffect } from 'react';

const Modal = (props) => {
  useEffect(() => {
    setTimeout(() => {
      props.removeMessage();
    }, 3000)
  })

  return <div className="modal">
    {props.message}
  </div>;
};

export default Modal;
