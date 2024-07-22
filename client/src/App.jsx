import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { ToastContainer, toast } from "react-toastify";
import NewCustomer from "./pages/NewCustomer";
import PageNotFound from "./pages/PageNotFound";
import { useCookies } from "react-cookie";
import Customers from "./pages/Customers";
import SearchCustomer from "./pages/SearchCustomer";
import ServiceTypes from "./pages/ServiceTypes";
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
              <Route index path="/newcustomer" element={<NewCustomer />}></Route>
              <Route index path="/searchcustomer" element={<SearchCustomer />}></Route>
              <Route index path="/servicetypes" element={<ServiceTypes />}></Route>
            </Route>
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

const PrivateRoute = () => {
  // const [token, setToken] = useState(Cookies.get("jwt"));
  // console.log(token);
  const [cookie, setCookie, removeCookie] = useCookies(["token"]);
  if (!cookie.token) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default App;
