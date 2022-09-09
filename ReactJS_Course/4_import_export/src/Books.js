import React from 'react'

const authorAddress = 'https://www.amazon.in/s/ref=dp_byline_sr_book_1?ie=UTF8&field-author=Arun+Tiwari&search-alias=stripbooks';
const address = 'https://www.google.com';

function displayName(name) {
    alert(`Name of Book: ${name}`)
}

const Books = (props) => {
    return (
        <article className='book'>
            <img src={props.address} alt="img" />
            <h3><a href={address}>{props.bookName}</a></h3>
            <p><a href={authorAddress} onMouseOver={() => console.log(props.bookAuthor)}>{props.bookAuthor}</a></p>
            <button type="submit" onClick={() => displayName(props.bookName)}>Get Book Name</button>
        </article>
    )
}

export default Books
