import React from 'react';
import ReactDOM from 'react-dom';

function Intro() {
  return React.createElement('div', {}, "Hello there,", " I am from react.")
}

ReactDOM.render(<Intro />, document.getElementById('root'));