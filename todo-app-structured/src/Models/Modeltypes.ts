export type dataTypes = {
    userId: number,
    id: number
    title: string,
    completed: boolean
}

export type fieldValue = {
    tasktype: string,
    taskname: string
}

export type headerProps = {
    issue: dataTypes[],
    setIssue: (iteam: dataTypes[]) => void
}