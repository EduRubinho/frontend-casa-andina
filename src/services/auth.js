const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

// Registro
export const registerUser = async (correo, contrasena) => {
  const res = await fetch(`${API_URL}/api/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ correo, contrasena }),
  });

  if (!res.ok) {
    throw new Error("Error en registro");
  }
  return res.json();
};

// Login
export const loginUser = async (correo, contrasena) => {
  const res = await fetch(`${API_URL}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ correo, contrasena }),
  });

  if (!res.ok) {
    throw new Error("Error en login");
  }
  return res.json();
};
