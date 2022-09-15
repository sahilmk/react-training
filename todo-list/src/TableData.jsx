import React, { useEffect, useState } from 'react'
import axios from 'axios';
import TableRow from './TableRow';
// import TableRow from './TableRow';

function TableData() {
    const url = 'https://jsonplaceholder.typicode.com/todos';
    const [issue, setIssue] = useState([]);

    useEffect(() => {
        axios.get(url).
            then((response) => {
                setIssue(response.data)
            })
    }, [url])

    const handleChanges = (response) => {

    }

    return (
        <>
            {
                issue.map((task) => {
                    return (
                        <TableRow key={task.id} task={task} handleChanges={handleChanges} />
                    )
                })
            }
        </>
    )
}

export default TableData


