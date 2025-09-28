import React from 'react';
import './HotelCard.css';

const HotelCard = ({ location, name, rating, reviews, price }) => {
    const imagen= "../../../public/image.png"
  return (
    <div className="hotel-card">
        <img src={imagen} alt={name} className="hotel-image" />
      <h3 className="hotel-location">{location}</h3>
      <p className="hotel-name">{name}</p>
      <p className="hotel-rating">⭐ {rating} ({reviews} reseñas)</p>
      <p className="hotel-price">Desde <strong>S/ {price}</strong></p>
      <p className="hotel-bank">Descuento con <span>Interbank</span></p>
    </div>
  );
};

export default HotelCard;
