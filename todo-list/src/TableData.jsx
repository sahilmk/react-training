import TableRow from './TableRow';
// import TableRow from './TableRow';

function TableData({ issue, setIssue }) {

    return (
        <>
            {
                issue.map((task) => {
                    return (
                        <TableRow key={task.id} task={task} issue={issue} setIssue={setIssue} />
                    )
                })
            }
        </>
    )
}

export default TableData


