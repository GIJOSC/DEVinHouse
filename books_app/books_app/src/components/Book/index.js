import React from 'react';


function Book({ item , addToCart}) {
  return (
    <div key={item.id} className="book-item">
      <img width="150" src={item.image} alt={item.title} />
      <span className='book-item-title'>{item.title}</span>
      <span className='book-item-price '>{item.price}</span>

      <button className='book-button' onClick={() => addToCart(item) }>Comprar</button>
      <button className='book-button'>Detalhes</button>
    </div>
  );
}

export default Book;