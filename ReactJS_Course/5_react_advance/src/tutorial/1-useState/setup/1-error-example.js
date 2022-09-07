import React from 'react';

const ErrorExample = () => {
  let varName = 'Random string';

  function changeString() {
    varName = 'Changed String';
    // console.log(varName);
  }

  return (
    <React.Fragment>
      <h1>{varName}</h1>
      <button type="submit" className='btn' onClick={changeString}>Change the Name</button>
    </React.Fragment>
  );
};

export default ErrorExample;
