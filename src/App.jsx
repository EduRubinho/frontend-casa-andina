import React, { useEffect, useState } from 'react';
import Button from './components/ui/Button/Button';
import HotelCard from './components/ui/HotelCard/HotelCard';
import HotelGrid from './components/ui/HotelCard/HotelGrid';

// ✅ Usa variable de entorno para no hardcodear la URL
// En Vite: VITE_API_URL en .env (ej: http://localhost:3000 o https://tuapi.onrender.com)
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [mensaje, setMensaje] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        // ✅ Llamada a /api/users (o la ruta que uses)
        const usersRes = await fetch(`${API_URL}/api/users`);
        if (!usersRes.ok) throw new Error('Error al obtener usuarios');
        const usersData = await usersRes.json();
        setUsuarios(usersData);

        // ✅ Llamada a /api/hola (opcional)
        const holaRes = await fetch(`${API_URL}/api/hola`);
        if (!holaRes.ok) throw new Error('Error en saludo');
        const holaData = await holaRes.json();
        setMensaje(holaData.msg);
      } catch (err) {
        console.error(err);
        setError('No se pudo cargar la información');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Cargando datos...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div>
      <h1>{mensaje || 'Bienvenido'}</h1>
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
