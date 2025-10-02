import { Outlet, NavLink } from "react-router";

function DashboardLayout() {
  return (
    <div>
      <h2>📊 Dashboard Layout</h2>
      <nav>
        <NavLink to="/dashboard">Inicio</NavLink> |{" "}
        <NavLink to="/dashboard/user/1">User 1</NavLink> |{" "}
        <NavLink to="/dashboard/user/2">User 2</NavLink>
      </nav>
      <hr />
      <Outlet /> {/* Aquí se renderizan las rutas hijas */}
    </div>
  );
}

export default DashboardLayout;
