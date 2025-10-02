import { useEffect, useState } from "react";
import { fetchUsers, fetchHola } from "../services/api";

export default function Home() {
  const [usuarios, setUsuarios] = useState([]);
  const [mensaje, setMensaje] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadData = async () => {
      try {
        const users = await fetchUsers();
        setUsuarios(users);
        const msg = await fetchHola();
        setMensaje(msg.msg);
      } catch (err) {
        setError("No se pudo cargar la información");
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h1>{mensaje}</h1>
      <h2>Usuarios:</h2>
      <ul>
        {usuarios.map(u => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}
