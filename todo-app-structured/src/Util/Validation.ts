export const validate = (values: { taskname: string, tasktype: string }) => {
    const errors: { taskname?: string } = {}

    if (!values.taskname) {
        errors.taskname = 'Task is Required';
    }

    return errors;
}