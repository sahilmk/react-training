import React from 'react'
import TableData from '../TableData'
import { stateType } from '../../Models'
import '../Table/Table.module.scss'

function Table({ issue, setIssue }: stateType) {
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