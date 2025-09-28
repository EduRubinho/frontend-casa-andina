import React from 'react';
import HotelCard from './HotelCard';
import './HotelGrid.css';

const hotels = [
  { location: 'Cusco', name: 'Centro by Casa Andina Cusco Saphy', rating: 4.4, reviews: 1186, price: 251 },
  { location: 'Ayacucho', name: 'Casa Andina Standard Ayacucho', rating: 4.6, reviews: 378, price: 235 },
  { location: 'Paracas', name: 'Casa Andina Select Paracas', rating: 4.4, reviews: 878, price: 411 },
  { location: 'Zorritos, Tumbes', name: 'Casa Andina Select Zorritos Tumbes', rating: 4.3, reviews: 1186, price: 400 },
  { location: 'Chincha', name: 'Casa Andina Standard Chincha', rating: 4.3, reviews: 1186, price: 201 },
  { location: 'Surco, Lima', name: 'Casa Andina Premium Golf Los Incas', rating: 4.6, reviews: 1186, price: 325 },
  { location: 'San Isidro, Lima', name: 'Casa Andina Premium San Isidro', rating: 4.6, reviews: 1186, price: 325 },
  { location: 'Colca', name: 'Casa Andina Standard Colca', rating: 4.3, reviews: 1186, price: 251 },
  { location: 'Moyobamba', name: 'Altarvista', rating: 4.6, reviews: 1186, price: 280 },
];

const HotelGrid = () => {
  return (
    <div className="hotel-grid">
      <h2>Aprovecha nuestros descuentos</h2>
      <div className="grid-container">
        {hotels.map((hotel, index) => (
          <HotelCard key={index} {...hotel} />
        ))}
      </div>
    </div>
  );
};

export default HotelGrid;
