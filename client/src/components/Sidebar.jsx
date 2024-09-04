import { NavLink } from "react-router-dom";

function Sidebar({ showSidebar, setShowSidebar }) {
  return (
    <aside className={`${showSidebar ? "" : "hidden"} fixed w-64 self-start lg:sticky top-0 z-30 bg-mblue-50 lg:bg-transparent overflow-y-scroll no-scrollbar h-dvh lg:min-h-fit border-r lg:border-none drop-shadow-xl xl:block`}>
      <div className="pl-5 pr-3 py-9">
        <img onClick={() => setShowSidebar(false)} src="./src/assets/images/logo.png" />
      </div>
      <ul className="text-sm lg:text-base space-y-1">
        <NavLink onClick={() => setShowSidebar(false)} to={`tickets`} className={`flex items-center space-x-3 py-2 pl-5 pr-3 mb-1 duration-300 rounded-r-full cursor-pointer hover:bg-mblue-200 ${(isActive) => (isActive ? "active" : "")}`}>
          <i className="fa-solid fa-ticket" />
          <span> Tickets </span>
        </NavLink>
        <NavLink onClick={() => setShowSidebar(false)} to={`customers`} className={`flex items-center space-x-3 py-2 pl-5 pr-3 mb-1 duration-300 rounded-r-full cursor-pointer hover:bg-mblue-200 ${(isActive) => (isActive ? "active" : "")}`}>
          <i className="fa-solid fa-people-group" />
          <span> Kunden </span>
        </NavLink>
        <NavLink onClick={() => setShowSidebar(false)} to={`serviceTypes`} className={`flex items-center space-x-3 py-2 pl-5 pr-3 mb-1 duration-300 rounded-r-full cursor-pointer hover:bg-mblue-200 ${(isActive) => (isActive ? "active" : "")}`}>
          <i className="fa-solid fa-list-check" />
          <span> Servicearten </span>
        </NavLink>
        <NavLink onClick={() => setShowSidebar(false)} to={`deviceDefinitions`} className={`flex items-center space-x-3 py-2 pl-5 pr-3 mb-1 duration-300 rounded-r-full cursor-pointer hover:bg-mblue-200 ${(isActive) => (isActive ? "active" : "")}`}>
          <i className="fa-regular fa-keyboard"></i>
          <span> Gerätdefinitionen </span>
        </NavLink>
      </ul>
    </aside>
  );
}

export default Sidebar;
