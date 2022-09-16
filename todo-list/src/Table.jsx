import React from 'react'
import TableData from './TableData'
import { TableStyle } from './styled/main.styled'

function Table({ issue, setIssue }) {
    return (
        <>
            <TableStyle border={"1"}>
                <thead>
                    <tr>
                        <th></th>
                        <th>Issue</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <TableData issue={issue} setIssue={setIssue} />
                </tbody>
            </TableStyle>
        </>
    )
}

export default Table
