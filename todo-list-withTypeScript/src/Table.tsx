import React from 'react'
import TableData from './TableData'
import { TableStyle } from './styled/main.styled'
import { dataTypes } from './MainScreen'

interface tableProps {
    issue: dataTypes[],
    setIssue: (iteam: dataTypes[]) => void
}

function Table({ issue, setIssue }: tableProps) {
    return (
        <>
            <TableStyle>
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
