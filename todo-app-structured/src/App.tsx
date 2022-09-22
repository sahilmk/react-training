import { useContext, useEffect, useState } from 'react';
import { todoPromise } from './APIs';
import { Table } from './components';
import Header from './components/Header';
import { dataTypes } from './Models';

function App() {
  const [issue, setIssue] = useState<dataTypes[]>([]);

  useEffect(() => {
    todoPromise.then((data) => setIssue(data))
  }, [todoPromise])

  return (
    <>
      <Header issue={issue} setIssue={setIssue} />
      <Table issue={issue} setIssue={setIssue} />
    </>
  )
}

export default App