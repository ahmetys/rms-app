import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="hidden fixed w-64 self-start lg:sticky top-0 z-30 bg-mblue-50 lg:bg-transparent overflow-y-scroll no-scrollbar h-dvh lg:min-h-fit border-r lg:border-none drop-shadow-xl xl:block">
      {/*Logo*/}
      <div className="pl-5 pr-3 py-9">
        <img src="./images/logo.png" />
      </div>
      {/*Menu*/}
      <ul className="text-sm lg:text-base space-y-1">
        <NavLink to={`newcustomer`} className={`flex items-center space-x-3 py-2 pl-5 pr-3 mb-1 duration-300 rounded-r-full cursor-pointer hover:bg-mblue-200 ${(isActive) => (isActive ? "active" : "")}`}>
          <i className="fa-solid fa-shop" />
          <span> Yeni Müsteri Ekle </span>
        </NavLink>
        <NavLink to={`customers`} className={`flex items-center space-x-3 py-2 pl-5 pr-3 mb-1 duration-300 rounded-r-full cursor-pointer hover:bg-mblue-200 ${(isActive) => (isActive ? "active" : "")}`}>
          <i className="fa-solid fa-shop" />
          <span> Müsteriler </span>
        </NavLink>
        <NavLink to={`servicetypes`} className={`flex items-center space-x-3 py-2 pl-5 pr-3 mb-1 duration-300 rounded-r-full cursor-pointer hover:bg-mblue-200 ${(isActive) => (isActive ? "active" : "")}`}>
          <i className="fa-solid fa-shop" />
          <span> Servis Türleri </span>
        </NavLink>

        {/* <li>
          <div className="flex items-center space-x-3 py-2 pl-5 pr-3 mb-1 duration-300 rounded-r-full cursor-pointer hover:bg-mblue-700 bg-mblue-600 text-white">
            <i className="fa-solid fa-shop" />
            <span> Servis Islemleri </span>
          </div>
        </li>
        <li>
          <div className="flex items-center space-x-3 py-2 pl-5 pr-3 mb-1 duration-300 rounded-r-full cursor-pointer hover:bg-mblue-200">
            <i className="fa-solid fa-shop" />
            <span> Servis Islemleri </span>
          </div>
        </li>
        <li>
          <div className="flex items-center space-x-3 py-2 pl-5 pr-3 mb-1  hover:bg-mblue-200 duration-300 rounded-r-full  cursor-pointer">
            <i className="fa-solid fa-shop" />
            <span> Servis Islemleri </span>
          </div>
        </li>
        <li>
          <div className="flex items-center space-x-3 py-2 pl-5 pr-3 mb-1  hover:bg-mblue-200 duration-300 rounded-r-full  cursor-pointer">
            <i className="fa-solid fa-shop" />
            <span> Servis Islemleri </span>
          </div>
        </li>
        <li>
          <div className="flex items-center space-x-3 py-2 pl-5 pr-3 mb-1  hover:bg-mblue-200 duration-300 rounded-r-full  cursor-pointer">
            <i className="fa-solid fa-shop" />
            <span> Servis Islemleri </span>
          </div>
        </li>
        <li>
          <div className="flex items-center space-x-3 py-2 pl-5 pr-3 mb-1  hover:bg-mblue-200 duration-300 rounded-r-full  cursor-pointer">
            <i className="fa-solid fa-shop" />
            <span> Servis Islemleri </span>
          </div>
        </li>
        <li>
          <div className="flex items-center space-x-3 py-2 pl-5 pr-3 mb-1  hover:bg-mblue-200 duration-300 rounded-r-full  cursor-pointer">
            <i className="fa-solid fa-shop" />
            <span> Servis Islemleri </span>
          </div>
        </li>
        <li>
          <div className="flex items-center space-x-3 py-2 pl-5 pr-3 mb-1  hover:bg-mblue-200 duration-300 rounded-r-full  cursor-pointer">
            <i className="fa-solid fa-shop" />
            <span> Servis Islemleri </span>
          </div>
        </li> */}

        <li>0</li>
        <li>0</li>
        <li>0</li>
        <li>0</li>
        <li>0</li>
        <li>0</li>
        <li>0</li>
        <li>0</li>
        <li>0</li>
        <li>0</li>
        <li>0</li>
        <li>0</li>
        <li>0</li>
        <li>0</li>
        <li>0</li>
        <li>0</li>
        <li>0</li>
        <li>0</li>
        <li>0</li>
        <li>0</li>
        <li>0</li>
        <li>0</li>
        <li>0</li>
        <li>0</li>
        <li>0</li>
        <li>0</li>
        <li>0</li>
        <li>0</li>
        <li>0</li>
        <li>0</li>
        <li>0</li>
        <li>0</li>
        <li>0</li>
        <li>0</li>
        <li>0</li>
        <li>0</li>
        <li>0</li>
        <li>0</li>
        <li>0</li>
        <li>0</li>
        <li>0</li>
        <li>0</li>
        <li>0</li>
        <li>0</li>
        <li>0</li>
        <li>0</li>
        <li>0</li>
        <li>0</li>
        <li>0</li>
        <li>0</li>
        <li>0</li>
        <li>0</li>
        <li>0</li>
        <li>0</li>
        <li>0</li>
        <li>0</li>
        <li>0</li>
        <li>0</li>
        <li>0</li>
        <li>0</li>
        <li>0</li>
        <li>0</li>
        <li>0</li>
        <li>0</li>
        <li>0</li>
        <li>0</li>
        <li>0</li>
        <li>0</li>
        <li>0</li>
        {/* <li>Stok Yönetimi</li>
  <li>Fatura</li>
  <li>Personel Islemleri</li>
  <li>Kasa Islemleri</li>
  <li>Cari Hesaplar</li>
  <li>Gelir Gider</li>
  <li>Tanimlamalar</li>
  <li>Veresiye Defteri</li>
  <li>Hatirlatmalar</li>
  <li>Aktarim Islemleri</li>
  <li>Market Yönetimi</li>
  <li>Raporlar</li>
  <li>Ayarlar</li> */}
      </ul>
    </aside>
  );
}

export default Sidebar;
