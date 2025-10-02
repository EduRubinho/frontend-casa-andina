import { API_URL } from "./api";

export const fetchUsers = async () => {
  const res = await fetch(`${API_URL}/api/users`);
  if (!res.ok) throw new Error('Error al obtener usuarios');
  return res.json();
};
