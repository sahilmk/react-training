import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

const authorAddress = 'https://www.amazon.in/s/ref=dp_byline_sr_book_1?ie=UTF8&field-author=Arun+Tiwari&search-alias=stripbooks';
const address = 'https://www.google.com';

const books = [
  {
    id: 1,
    img: 'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71KKZlVjbwL._AC_UY218_.jpg',
    name: 'WINGS OF FIRE: AUTOBIOGRAPHY OF ABDUL KALAM',
    author: 'Arun Tiwari'
  },
  {
    id: 2,
    img: 'https://images-eu.ssl-images-amazon.com/images/I/71UwSHSZRnS._AC_UL300_SR300,200_.jpg',
    name: 'The Power of Your Subconscious Mind',
    author: 'Joseph Murphy'
  }
]

function BookList() {
  return <section className='booklist'>
    {
      books.map(book => {
        return <Books key={book.id} address={book.img} bookName={book.name} bookAuthor={book.author} />

      })
    }
  </section >;
}

function displayName(name) {
  alert(`Name of Book: ${name}`)
}

const Books = (props) => {
  return <article className='book'>
    <img src={props.address} alt="img" />
    <h3><a href={address}>{props.bookName}</a></h3>
    <p><a href={authorAddress} onMouseOver={() => console.log(props.bookAuthor)}>{props.bookAuthor}</a></p>
    <button type="submit" onClick={() => displayName(props.bookName)}>Get Book Name</button>
  </article>
}

ReactDOM.render(<BookList />, document.getElementById('root'));