import React from 'react'
import axios from 'axios';
import { RowStyle } from './styled/main.styled'
import Button from './Button';
import { dataTypes } from './MainScreen';

interface tableRowProps {
    task: dataTypes,
    issue: dataTypes[],
    setIssue: (iteam: dataTypes[]) => void
}

function TableRow({ task, issue, setIssue }: tableRowProps) {
    const { id, title, completed } = task;

    const handleChanges = () => {
        const newIssue = issue.map((obj: dataTypes) => {

            if (obj.id === id) {
                const updatedObject = { ...obj, completed: !completed };

                axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, updatedObject)
                    .then()

                return updatedObject;
            }
            return obj;
        })

        setIssue(newIssue);
    }

    return (
        < RowStyle>
            <td><input type='checkbox' checked={completed} onChange={() => handleChanges()} /></td>

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
