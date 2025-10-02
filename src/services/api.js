const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export const fetchUsers = async () => {
  const res = await fetch(`${API_URL}/api/users`);
  if (!res.ok) throw new Error('Error al obtener usuarios');
  return res.json();
};

export const fetchHola = async () => {
  const res = await fetch(`${API_URL}/api/hola`);
  if (!res.ok) throw new Error('Error en saludo');
  return res.json();
};
