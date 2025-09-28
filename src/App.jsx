import React from 'react';
import Button from './components/ui/Button/Button';
import HotelCard from './components/ui/HotelCard/HotelCard';
import HotelGrid from './components/ui/HotelCard/HotelGrid';
import { useEffect, useState } from "react";

function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    // Llamada a la ruta de usuarios
    fetch('http://localhost:3000/consulta')
      .then(res => res.json())
      .then(data => setUsuarios(data))
      .catch(err => console.error('Error usuarios', err));

    // Llamada a la ruta /hola
    fetch('http://localhost:3000/hola')
      .then(res => res.json())
      .then(data => setMensaje(data.msg))
      .catch(err => console.error('Error hola', err));
  }, []);

  return (
    <div>
      <h1>{mensaje}</h1>
      <h2>Lista de usuarios</h2>
      <ul>
        {usuarios.map(u => (
          <li key={u.id}>{u.nombre}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;