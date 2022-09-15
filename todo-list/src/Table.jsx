import React from 'react'
import TableData from './TableData'

function Table() {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Issue</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <TableData />
                </tbody>
            </table>
        </>
    )
}

export default Table
