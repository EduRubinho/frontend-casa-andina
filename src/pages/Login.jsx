import { useNavigate } from "react-router";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simular login y redirigir
    navigate("/dashboard");
  };

  return (
    <div>
      <h2>🔑 Login</h2>
      <button onClick={handleLogin}>Iniciar sesión</button>
    </div>
  );
}

export default Login;
