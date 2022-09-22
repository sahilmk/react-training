import React from 'react'
import TableData from '../TableData'
import { dataTypes } from '../../Models'
import '../Table/Table.module.scss'

interface tableProps {
    issue: dataTypes[],
    setIssue: (iteam: dataTypes[]) => void
}

function Table({ issue, setIssue }: tableProps) {
    return (
        <>
            <table>
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
            </table>
        </>
    )
}

export default Table