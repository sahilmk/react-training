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

export type stateType = {
    issue: dataTypes[],
    setIssue: (iteam: dataTypes[]) => void
}

export type tableRowProps = {
    task: dataTypes,
    issue: dataTypes[],
    setIssue: (iteam: dataTypes[]) => void
}

export type buttonProps = {
    direction: 'Up' | 'Down',
    hidden: boolean,
    issue: dataTypes[],
    setIssue: (iteam: dataTypes[]) => void
    id: number
}