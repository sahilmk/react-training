import React, { useState, useEffect } from 'react'
import { Form, Field } from 'react-final-form'
import { stateType, fieldValue } from '../../Models'
import { postMethod, todoDataEndPoint, validate } from '../../Util';
import * as styles from './Header.module.scss';

function Header({ issue, setIssue }: stateType) {
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

        postMethod(todoDataEndPoint, newIssue).then()

        setShowButton(!showButton);
        setTask(!task);
    }

    return (
        <>
            <div className={styles.screen}>
                <div className={styles.title}>
                    <h2>Tasks</h2>
                    {showButton && <button onClick={() => handleNewTask()} className={styles.btn}>New task</button>}
                </div>

                {task && (

                    <Form
                        onSubmit={onSubmit}
                        validate={validate}
                        initialValues={{ tasktype: true }}
                        render={({ handleSubmit }) => (
                            <form onSubmit={handleSubmit}>
                                <div className={styles.inputs}>
                                    <Field name="taskname">
                                        {({ input, meta }) => (
                                            <div className={styles.input}>
                                                <label>Task name</label>
                                                <input {...input} type="text" placeholder="Task Name" />
                                                {meta.error && meta.touched && <span className={styles.error}>{meta.error}</span>}
                                            </div>
                                        )}
                                    </Field>

                                    <div className={styles.input}>
                                        <label>Type of Task</label>
                                        <Field name="tasktype" component="select">
                                            <option value={'true'}>Completed</option>
                                            <option value={'false'}>Not Completed</option>
                                        </Field>
                                    </div>

                                    <div className={styles.btnInput}>
                                        <button className={styles.btn} onClick={() => handleCancel()} >Cancel</button>
                                    </div>
                                    <div className={styles.btnInput}>
                                        <button className={styles.btn} type='submit' onClick={() => handleSubmit}>Create Task</button>
                                    </div>
                                </div>

                            </form>
                        )}
                    />
                )}
            </div>
        </>
    )
}

export default Header