import React from 'react';
import ReactDOM from 'react-dom';

import './index.css'
function BookList() {
  return <section className='booklist'>
    <Books />
    <Books />
    <Books />
    <Books />
    <Books />
    <Books />
    <Books />
    <Books />
    <Books />
  </section >;
}

const Books = () => {
  return <article className='book'>
    <Img />
    <Title />
    <Author />
  </article>
}

const Img = () => <img src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71KKZlVjbwL._AC_UY218_.jpg" alt="img" />;

const Title = () => <h3><a href="https://www.amazon.in/Wings-Fire-Autobiography-Abdul-Kalam/dp/8173711461/ref=sr_1_5?adgrpid=60562045364&ext_vrnc=hi&gclid=Cj0KCQjw39uYBhCLARIsAD_SzMQROl1GqucyWsmr8cnU1n59iaj8Z_9LeR4pTboNdCc1wXbiomZSp48aApbgEALw_wcB&hvadid=294150584354&hvdev=c&hvlocphy=1007756&hvnetw=g&hvqmt=e&hvrand=17009326564814836898&hvtargid=kwd-925609979274&hydadcr=2371_1727449&keywords=amazon+best+selling+books+list&qid=1662456025&sr=8-5">WINGS OF FIRE: AUTOBIOGRAPHY OF ABDUL KALAM</a></h3>;

const Author = () => <p><a href="https://www.amazon.in/s/ref=dp_byline_sr_book_1?ie=UTF8&field-author=Arun+Tiwari&search-alias=stripbooks"> Arun Tiwari </a></p>;

ReactDOM.render(<BookList />, document.getElementById('root'));