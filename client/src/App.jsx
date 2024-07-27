import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { ToastContainer } from "react-toastify";
import NewCustomer from "./pages/NewCustomer";
import PageNotFound from "./pages/PageNotFound";
import { useCookies } from "react-cookie";
import Customers from "./pages/Customers";
import SearchCustomer from "./pages/SearchCustomer";
import ServiceList from "./pages/ServiceList";
import { UserProvider } from "./context/UserContext";
import CustomerDetails from "./pages/CustomerDetails";
import EditCustomer from "./pages/EditCustomer";
function App() {
  return (
    <>
      <UserProvider>
        <ToastContainer position="top-center" />
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/" element={<PrivateRoute />}>
              <Route path="/" element={<Dashboard />}></Route>
              <Route path="/customers" element={<Customers />}></Route>
              <Route path="/customers/:customerId" element={<CustomerDetails />}></Route>
              <Route path="/customers/edit/:customerId" element={<EditCustomer />}></Route>
              <Route path="/customers/new" element={<NewCustomer />}></Route>
              <Route path="/customers/search" element={<SearchCustomer />}></Route>
              <Route path="/servicelist" element={<ServiceList />}></Route>
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </>
  );
}

const PrivateRoute = () => {
  const [cookie, setCookie, removeCookie] = useCookies(["token"]);
  if (!cookie.token) {
    return <Navigate to="/login" />;
  }
  return <Layout />;
};

export default App;
