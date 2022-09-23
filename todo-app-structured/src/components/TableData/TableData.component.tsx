import TableRow from '../TableRow';
import { dataTypes } from '../../Models';
import { stateType } from '../../Models';

function TableData({ issue, setIssue }: stateType) {

    return (
        <>
            {
                issue.map((task: dataTypes) => {
                    return (
                        <TableRow key={task.id} task={task} issue={issue} setIssue={setIssue} />
                    )
                })
            }
        </>
    )
}

export default TableData

