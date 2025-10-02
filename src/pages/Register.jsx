import { useState } from "react";
import { registerUser } from "../services/auth";

function Register() {
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await registerUser(correo, contrasena);
      setMsg(data.msg);
    } catch (error) {
      setMsg(error.message);
    }
  };

  return (
    <div>
      <h2>📝 Registro</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          required
        />
        <br />
        <input
          type="password"
          placeholder="Contraseña"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
          required
        />
        <br />
        <button type="submit">Registrarse</button>
      </form>
      {msg && <p>{msg}</p>}
    </div>
  );
}

export default Register;
