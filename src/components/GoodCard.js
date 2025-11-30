import React from 'react';

// Компонент приймає props: image, name, price
function GoodsCard({ image, name, price }) {
  return (
    <div className="goods-card">
      <img src={image} alt={name} className="goods-image" />
      <h3>{name}</h3>
      <p className="price">Ціна: {price} грн</p>
    </div>
  );
}

export default GoodsCard;