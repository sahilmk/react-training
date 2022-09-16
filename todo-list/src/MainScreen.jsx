import React from 'react'
import Table from './Table'
import Header from './Header'
import { Screen } from './styled/main.styled'
import { useEffect, useState } from 'react'
import axios from 'axios';

function MainScreen() {
    const url = 'https://jsonplaceholder.typicode.com/todos';
    const [issue, setIssue] = useState([]);

    useEffect(() => {
        axios.get(url).
            then((response) => {
                setIssue(response.data)
            })
    }, [url])


    return (
        <Screen>
            <Header issue={issue} setIssue={setIssue} />
            <Table issue={issue} setIssue={setIssue} />
        </Screen>
    )
}

export default MainScreen
