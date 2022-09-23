import React from 'react'
import axios from 'axios';
import Button from '../Button';
import { dataTypes } from '../../Models'
import { putMethod } from '../../Util/APIManager';
import { todoDataEndPoint } from '../../Util'
import '../TableRow/TableRow.module.scss'
import { tableRowProps } from '../../Models';

function TableRow({ task, issue, setIssue }: tableRowProps) {
    const { id, title, completed } = task;

    const handleChanges = () => {
        const newIssue = issue.map((obj: dataTypes) => {

            if (obj.id === id) {
                const updatedObject = { ...obj, completed: !completed };

                putMethod(todoDataEndPoint, String(id));

                return updatedObject;
            }
            return obj;
        })

        setIssue(newIssue);
    }

    return (
        < tr>
            <td><input type='checkbox' checked={completed} onChange={() => handleChanges()} /></td>

            <td>{title}</td>

            <td>2 Aug 2022</td>

            <td>
                {
                    <>
                        <Button hidden={task.id % issue.length === 0} direction={'Down'} issue={issue} setIssue={setIssue} id={id} />
                        <Button hidden={task.id === 1} direction={'Up'} issue={issue} setIssue={setIssue} id={id} />
                    </>
                }
            </td>
        </tr >
    )
}

export default TableRow