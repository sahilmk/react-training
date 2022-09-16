import React from 'react'

function Button({ direction, hidden, issue, setIssue, id }) {

    const handleClick = () => {
        const newIssue = issue.map((obj) => {
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

        newIssue.sort((a, b) => a.id - b.id);
        setIssue(newIssue);
    }

    return (
        <button className={direction} hidden={hidden} onClick={() => handleClick()}>
            <img src={`./logo/${direction}ward-arrow.svg`} alt="" />
        </button>
    )
}

export default Button
