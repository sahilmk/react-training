import React from 'react'
import { dataTypes } from './MainScreen';

interface buttonProps {
    direction: 'up' | 'down',
    hidden: boolean,
    issue: dataTypes[],
    setIssue: (iteam: dataTypes[]) => void
    id: number
}

function Button({ direction, hidden, issue, setIssue, id }: buttonProps) {

    const handleClick = () => {
        const newIssue = issue.map((obj: dataTypes) => {
            if (direction === 'down') {
                if (obj.id === id) {
                    return { ...obj, id: (id + 1) };
                }
                if (obj.id === (id + 1)) {
                    return { ...obj, id: id }
                }
                return obj;
            } else {

                if (obj.id === (id - 1)) {
                    return { ...obj, id: id };
                }
                if (obj.id === id) {
                    return { ...obj, id: (id - 1) }
                }
                return obj;
            }
        })

        newIssue.sort((a: dataTypes, b: dataTypes) => a.id - b.id);
        setIssue(newIssue);
    }

    return (
        <button className={direction} hidden={hidden} onClick={() => handleClick()}>
            <img src={`./logo/${direction}ward-arrow.svg`} alt="" />
        </button>
    )
}

export default Button
