import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
// import axios from "axios";

function Layout() {
  // axios.defaults.withCredentials = true;

  return (
    <>
      <div className="bg-mblue-50 font-montserrat flex flex-auto">
        <Sidebar />
        <main className="px-2 py-2 md:px-5 md:py-5 max-w-[1440px] container">
          <Header />
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default Layout;
