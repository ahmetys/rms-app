import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PageNotFound from "./pages/PageNotFound";
import Tickets from "./pages/Tickets";
import NewTicket from "./pages/NewTicket";
import NewCustomer from "./pages/NewCustomer";
import TicketDetails from "./pages/TicketDetails";
import Customers from "./pages/Customers";
import CustomerDetails from "./pages/CustomerDetails";
import EditCustomer from "./pages/EditCustomer";
import SearchCustomer from "./pages/SearchCustomer";
import ServiceTypes from "./pages/ServiceTypes";
import DeviceDefinitions from "./pages/DeviceDefinitions";
import { UserProvider } from "./context/UserContext";
import { DefinitionsProvider } from "./context/DefinitionsContext";
import { useCookies } from "react-cookie";
function App() {
  return (
    <>
      <UserProvider>
        <DefinitionsProvider>
          <ToastContainer position="top-center" />
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/register" element={<Register />}></Route>
              <Route path="/" element={<PrivateRoute />}>
                <Route path="/tickets" element={<Tickets />}></Route>
                <Route path="/tickets/new" element={<NewTicket />}></Route>
                <Route path="/tickets/:ticketId" element={<TicketDetails />}></Route>
                <Route path="/customers" element={<Customers />}></Route>
                <Route path="/customers/:customerId" element={<CustomerDetails />}></Route>
                <Route path="/customers/edit/:customerId" element={<EditCustomer />}></Route>
                <Route path="/customers/new" element={<NewCustomer />}></Route>
                <Route path="/customers/search" element={<SearchCustomer />}></Route>
                <Route path="/serviceTypes" element={<ServiceTypes />}></Route>
                <Route path="/deviceDefinitions" element={<DeviceDefinitions />}></Route>
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </BrowserRouter>
        </DefinitionsProvider>
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
