import TableRow from './TableRow';
import { dataTypes } from './MainScreen';

interface tableDataProps {
    issue: dataTypes[],
    setIssue: (iteam: dataTypes[]) => void
}

function TableData({ issue, setIssue }: tableDataProps) {

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


