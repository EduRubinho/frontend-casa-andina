import { useParams, useLocation } from "react-router";

function UserDetail() {
  const { id } = useParams();
  const location = useLocation();

  return (
    <div>
      <h3>👤 Usuario con ID: {id}</h3>
      <p>Ruta actual: {location.pathname}</p>
    </div>
  );
}

export default UserDetail;
