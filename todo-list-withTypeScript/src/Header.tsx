import React, { useRef, useState, useEffect } from 'react'
import './scss/title.scss'
import axios from 'axios';
import { Form, Field } from 'react-final-form'
import { dataTypes } from './MainScreen'

interface fieldValue {
    tasktype: string,
    taskname: string
}

interface headerProps {
    issue: dataTypes[],
    setIssue: (iteam: dataTypes[]) => void
}

function Header({ issue, setIssue }: headerProps) {
    const [showButton, setShowButton] = useState(true);
    const [task, setTask] = useState(false);

    const handleNewTask = () => {
        setShowButton(!showButton);
        setTask(!task);
    }

    const handleCancel = () => {
        setShowButton(!showButton);
        setTask(!task);
    }

    const onSubmit = (values: fieldValue) => {
        const newTask = {
            "userId": 1,
            "id": issue.length + 1,
            "title": values.taskname,
            "completed": values.tasktype === 'false' ? false : true
        }

        const newIssue = [...issue, newTask];
        setIssue([...issue, newTask]);
        axios.post(`https://jsonplaceholder.typicode.com/todos`, newIssue)
            .then();

        setShowButton(!showButton);
        setTask(!task);
    }

    const validate = (values: { taskname: string, tasktype: string }) => {
        const errors: { taskname?: string } = {}

        if (!values.taskname) {
            errors.taskname = 'Task is Required';
        }

        return errors;
    }

    return (
        <>
            <div className='title'>
                <h2>Tasks</h2>
                {showButton && <button onClick={() => handleNewTask()} className='btn'>New task</button>}
            </div>

            {task && (

                <Form
                    onSubmit={onSubmit}
                    validate={validate}
                    initialValues={{ tasktype: true }}
                    render={({ handleSubmit }) => (
                        <form onSubmit={handleSubmit}>
                            <div className='inputs'>
                                <Field name="taskname">
                                    {({ input, meta }) => (
                                        <div className='input'>
                                            <label>Task name</label>
                                            <input {...input} type="text" placeholder="Task Name" />
                                            {meta.error && meta.touched && <span className='error'>{meta.error}</span>}
                                        </div>
                                    )}
                                </Field>

                                <div className="input">
                                    <label>Type of Task</label>
                                    <Field name="tasktype" component="select">
                                        <option value={'true'}>Completed</option>
                                        <option value={'false'}>Not Completed</option>
                                    </Field>
                                </div>

                                <div className='btnInput'>
                                    <button className="btn" onClick={() => handleCancel()} >Cancel</button>
                                </div>
                                <div className='btnInput'>
                                    <button className="btn" type='submit' onClick={() => handleSubmit}>Create Task</button>
                                </div>
                            </div>

                        </form>
                    )}
                />
            )}

        </>
    )
}

export default Header
