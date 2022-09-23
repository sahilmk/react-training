import React from 'react'
import TableData from '../TableData'
import { dataTypes } from '../../Models'
import '../Table/Table.module.scss'
import { stateType } from '../../Models'

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