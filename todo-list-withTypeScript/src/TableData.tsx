import TableRow from './TableRow';
import { DataTypes } from './MainScreen';

interface TableDataProps {
    issue: DataTypes[],
    setIssue: (iteam: DataTypes[]) => void
}

function TableData({ issue, setIssue }: TableDataProps) {

    return (
        <>
            {
                issue.map((task: DataTypes) => {
                    return (
                        <TableRow key={task.id} task={task} issue={issue} setIssue={setIssue} />
                    )
                })
            }
        </>
    )
}

export default TableData


