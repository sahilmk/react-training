import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Books from './Books';
import { books } from './data';

function BookList() {
  return <section className='booklist'>
    {
      books.map(book => {
        return <Books key={book.id} address={book.img} bookName={book.name} bookAuthor={book.author} />

      })
    }
  </section >;
}

ReactDOM.render(<BookList />, document.getElementById('root'));