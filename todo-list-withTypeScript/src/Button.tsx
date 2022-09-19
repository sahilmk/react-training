import React from 'react'
import { DataTypes } from './MainScreen';

interface ButtonProps {
    direction: string,
    hidden: boolean,
    issue: DataTypes[],
    setIssue: (iteam: DataTypes[]) => void
    id: number
}

function Button({ direction, hidden, issue, setIssue, id }: ButtonProps) {

    const handleClick = () => {
        const newIssue = issue.map((obj: DataTypes) => {
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

        newIssue.sort((a: DataTypes, b: DataTypes) => a.id - b.id);
        setIssue(newIssue);
    }

    return (
        <button className={direction} hidden={hidden} onClick={() => handleClick()}>
            <img src={`./logo/${direction}ward-arrow.svg`} alt="" />
        </button>
    )
}

export default Button
