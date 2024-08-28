import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

function Layout() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <div className="bg-mblue-50 font-montserrat flex flex-auto">
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <main className="px-2 py-2 md:px-5 md:py-5 max-w-[1440px] container">
          <Header setShowSidebar={setShowSidebar} />
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default Layout;
