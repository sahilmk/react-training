import React from 'react'

function TableRow({ task, handleChanges }) {
    const { title, completed } = task;
    return (
        < tr>
            <td><input type='checkbox' checked={completed} onChange={() => handleChanges(task)} /></td>

            <td>{title}</td>

            <td>
                <img src="./logo/up-arrow.svg" alt="" />
                <img src="./logo/downward-arrow.svg" alt="" />
            </td>
        </tr>
    )
}

export default TableRow
