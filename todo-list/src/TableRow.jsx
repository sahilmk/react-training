import React from 'react'
import axios from 'axios';
import { RowStyle } from './styled/main.styled'
import Button from './Button';

function TableRow({ task, issue, setIssue }) {
    const { id, title, completed } = task;

    const handleChanges = (response) => {
        const newIssue = issue.map((obj) => {

            if (obj.id === response.id) {
                const updatedObject = { ...obj, completed: !response.completed };

                axios.put(`https://jsonplaceholder.typicode.com/todos/${response.id}`, updatedObject)
                    .then(res => console.log(res))

                return updatedObject;
            }
            return obj;
        })

        setIssue(newIssue);
    }

    return (
        < RowStyle>
            <td><input type='checkbox' checked={completed} onChange={() => handleChanges(task)} /></td>

            <td>{title}</td>

            <td>2 Aug 2022</td>

            <td>
                {
                    <>
                        <Button hidden={task.id % issue.length === 0} direction={'down'} issue={issue} setIssue={setIssue} id={id} />
                        <Button hidden={task.id === 1} direction={'up'} issue={issue} setIssue={setIssue} id={id} />
                    </>
                }
            </td>
        </RowStyle >
    )
}

export default TableRow
