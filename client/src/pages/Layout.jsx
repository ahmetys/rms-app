import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import axios from "axios";

function Layout() {
  axios.defaults.withCredentials = true;

  return (
    <>
      <div className="bg-mblue-50 font-montserrat flex flex-auto">
        <aside className="hidden fixed w-64 self-start lg:sticky top-0 z-30 bg-mblue-50 lg:bg-transparent overflow-y-scroll no-scrollbar h-dvh lg:min-h-fit border-r lg:border-none drop-shadow-xl xl:block">
          {/*Logo*/}
          <div className="pl-5 pr-3 py-9">
            <img src="./images/logo.png" />
          </div>
          {/*Menu*/}
          <ul className="text-sm lg:text-base space-y-1">
            <li>
              <a href="#" className="py-2 pl-5 pr-3 mb-1 hover:bg-mblue-200 duration-300 rounded-r-full flex justify-between items-center cursor-pointer">
                <div className="flex items-center space-x-3">
                  <i className="fa-solid fa-shop" />
                  <span> Servis Islemleri </span>
                </div>
                <i className="fa-solid fa-chevron-down" />
              </a>
              <ul className="pr-2">
                <li>
                  <a href="#servis-fisleri" className="py-2 pl-8 pr-3 mb-1 bg-mblue-500 text-white duration-300 rounded-r-full flex justify-between items-center cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <i className="fa-regular fa-circle text-xs" />
                      <span> Servis Fisleri </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="py-2 pl-8 pr-3 mb-1 hover:bg-mblue-200 duration-300 rounded-r-full flex justify-between items-center cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <i className="fa-regular fa-circle text-xs" />
                      <span> Yeni Servis Fisi </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="py-2 pl-8 pr-3 mb-1 hover:bg-mblue-200 duration-300 rounded-r-full flex justify-between items-center cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <i className="fa-regular fa-circle text-xs" />
                      <span> Servis Fisi Ara </span>
                    </div>
                  </a>
                </li>
              </ul>
            </li>
            <li className="py-2 pl-5 pr-3 mb-2 hover:bg-mblue-200 duration-300 rounded-r-full flex justify-between items-center cursor-pointer">
              <div className="flex items-center space-x-3">
                <i className="fa-solid fa-people-arrows" />
                <span> Veresiye Defteri </span>
              </div>
              <i className="fa-solid fa-chevron-right" />
            </li>
            <li className="py-2 pl-5 pr-3 mb-2 hover:bg-mblue-200 duration-300 rounded-r-full flex justify-between items-center cursor-pointer">
              <div className="flex items-center space-x-3">
                <i className="fa-solid fa-house-flood-water-circle-arrow-right" />
                <span> Cari Hesaplar </span>
              </div>
              <i className="fa-solid fa-chevron-right" />
            </li>
            <li className="py-2 pl-5 pr-3 mb-2 hover:bg-mblue-200 duration-300 rounded-r-full flex justify-between items-center cursor-pointer">
              <div className="flex items-center space-x-3">
                <i className="fa-solid fa-truck-arrow-right" />
                <span> Personel Islemleri </span>
              </div>
              <i className="fa-solid fa-chevron-right" />
            </li>
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
        <main className="px-2 py-2 md:px-5 md:py-5 max-w-[1440px] container">
          <Header />
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default Layout;
