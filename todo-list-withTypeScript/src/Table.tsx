import React from 'react'
import { FC } from 'react'
import TableData from './TableData'
import { TableStyle } from './styled/main.styled'
import { DataTypes } from './MainScreen'

interface TableProps {
    issue: DataTypes[],
    setIssue: (iteam: DataTypes[]) => void
}

function Table({ issue, setIssue }: TableProps) {
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
