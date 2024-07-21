import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { ToastContainer, toast } from "react-toastify";
import Cookies from "js-cookie";
import Customers from "./pages/Customers";

function App() {
  return (
    <>
      <ToastContainer position="top-center" />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<Layout />}>
              <Route index path="/dashboard" element={<Dashboard />}></Route>
              <Route index path="/customers" element={<Customers />}></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

const PrivateRoute = () => {
  const [token, setToken] = useState(Cookies.get("token"));
  if (!token) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default App;
