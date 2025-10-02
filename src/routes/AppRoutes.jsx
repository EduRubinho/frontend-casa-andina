import { Link, NavLink, Routes, Route } from "react-router";
import Home from "../pages/Home";
import Login from "../pages/Login";
import DashboardLayout from "../pages/DashboardLayout";
import UserDetail from "../pages/UserDetail";
import SearchPage from "../pages/SearchPage";

function AppRoutes() {
  return (
    <div>
      <header>
        <h1>My App</h1>
        <nav>
          <ul>
            <li><Link to="/">🏠 Home (Link)</Link></li>
            <li><NavLink to="/login">🔑 Login (NavLink)</NavLink></li>
            <li><NavLink to="/dashboard">📊 Dashboard</NavLink></li>
            <li><NavLink to="/search">🔍 Search</NavLink></li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* Layout con Outlet */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<div><h3>Dashboard Home</h3><p>Selecciona un usuario de la navegación</p></div>} />
          <Route path="user/:id" element={<UserDetail />} />
        </Route>

        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </div>
  );
}

export default AppRoutes;
