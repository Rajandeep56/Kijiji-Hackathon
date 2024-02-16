import { useState } from 'react';
import RatingModal from '../Modals/RatingModal';
import './ListItem.scss';

const ListItem = ({ product, handleClick }) => {
  return (
    <>
      <div className="item">
        <img src={product.image} className="item__image" />
        <div className="item__content-container">
          <h3 className="item__title">{product.title}</h3>
          <p className="item__content">{product.content}</p>
        </div>
        <span className="item__price">${product.price.toFixed(2)}</span>
        <button
          className="item__button"
          onClick={() => handleClick()}
        >
          BUY
        </button>
      </div>
    </>
  );
};

export default ListItem;
