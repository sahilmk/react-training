import React from 'react'
import { DownwardArrow, UpwardArrow } from '../../Icons'
import { dataTypes, buttonProps } from '../../Models'

function Button({ direction, hidden, issue, setIssue, id }: buttonProps) {

    const handleClick = () => {
        const newIssue = issue.map((obj: dataTypes) => {
            if (direction === 'Down') {
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
            {direction === 'Down' ? <DownwardArrow /> : <UpwardArrow />}
        </button>
    )
}

export default Button