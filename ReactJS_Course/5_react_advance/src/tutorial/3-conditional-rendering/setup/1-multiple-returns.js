import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [user, setUser] = useState('Fetching...')

  useEffect(() => {
    console.log('hi');
    fetch(url)
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        }
        throw Error(() => {
          setLoading(false);
          setError(true);
        })
      })
      .then((data) => {
        setUser(data.login);
        setError(false);
        setLoading(false);
      }).catch((err) => {
        setLoading(false);
        setError(true);
      })
  }, [])

  if (isLoading) {
    return <h1>
      Loading...
    </h1>
  }
  if (isError) {
    return <h1>
      Error...
    </h1>
  }

  return <h1>
    {user}
  </h1>
};

export default MultipleReturns;
