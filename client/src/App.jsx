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
import Tickets from "./pages/Tickets";
import NewTicket from "./pages/NewTicket";
import DeviceDefinitions from "./pages/DeviceDefinitions";
import { DefinitionsProvider } from "./context/DefinitionsContext";
import TicketDetails from "./pages/TicketDetails";
import Cookies from "js-cookie";
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
                {/* <Route path="/" element={<Dashboard />}></Route> */}
                <Route path="/tickets" element={<Tickets />}></Route>
                <Route path="/tickets/new" element={<NewTicket />}></Route>
                <Route path="/tickets/:ticketId" element={<TicketDetails />}></Route>
                <Route path="/customers" element={<Customers />}></Route>
                <Route path="/customers/:customerId" element={<CustomerDetails />}></Route>
                <Route path="/customers/edit/:customerId" element={<EditCustomer />}></Route>
                <Route path="/customers/new" element={<NewCustomer />}></Route>
                <Route path="/customers/search" element={<SearchCustomer />}></Route>
                <Route path="/servicelist" element={<ServiceList />}></Route>
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

const PrivateRoute = ({ children }) => {
  const [cookie, setCookie, removeCookie] = useCookies(["token"]);

  if (!cookie.token) {
    return <Navigate to="/login" />;
  }
  return <Layout />;
};

export default App;
