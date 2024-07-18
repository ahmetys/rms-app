import { Outlet } from "react-router-dom";

function Layout() {
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
          {/*Header*/}
          <header className="px-2 py-2 md:px-5 md:py-5 mb-5 border cursor-pointer drop-shadow-xl bg-mblue-800 rounded sticky top-0 z-20">
            <div className="flex justify-between lg:justify-end items-center">
              <a className="text-white cursor-pointer lg:hidden hover:bg-mblue-200 hover:text-mblue-950 duration-300 rounded-full p-2" href="#;">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
                </svg>
              </a>
              <div className="flex justify-end space-x-2 items-center">
                <a id="notifications-icon" href="#" className="p-2 duration-300 text-white hover:bg-mblue-200 hover:text-mblue-950 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path
                      fillRule="evenodd"
                      d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a id="user-icon" href="#" className="px-2 py-1 duration-300 text-white hover:bg-mblue-200 hover:text-mblue-950 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 rounded-full h-8">
                    <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            {/*User Actions & Notificiations*/}
            <div className="relative flex justify-center z-50">
              {/*User Actions*/}
              <div id="user-actions-card" className="hidden flex flex-col w-80 absolute md:right-0 border border-mblue-200 mt-4 bg-white rounded drop-shadow-xl">
                {/*User Actions Header*/}
                <div className="flex space-x-3 border-b p-3 items-center">
                  <img src="./images/avatar.png" className="rounded-full h-10" />
                  <div className="flex flex-col">
                    <p className="font-bold">Admin</p>
                    <span className="w-full text-sm">admin@ws-management.io</span>
                  </div>
                </div>
                {/*User Actions Body*/}
                <ul className="border-b">
                  <li className="flex cursor-pointer p-3 space-x-3 hover:bg-mblue-200 hover:duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                      <path
                        fillRule="evenodd"
                        d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <a href="#">My Profile</a>
                  </li>
                  <li className="flex cursor-pointer p-3 space-x-3 hover:bg-mblue-200 hover:duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                      <path
                        fillRule="evenodd"
                        d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <a href="#">Settings</a>
                  </li>
                </ul>
                {/*User Actions Footer*/}
                <div className="flex cursor-pointer p-3 space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-red-600">
                    <path
                      fillRule="evenodd"
                      d="M16.5 3.75a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V15a.75.75 0 0 0-1.5 0v3.75a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5.25a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3V9A.75.75 0 1 0 9 9V5.25a1.5 1.5 0 0 1 1.5-1.5h6ZM5.78 8.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 0 0 1.06-1.06l-1.72-1.72H15a.75.75 0 0 0 0-1.5H4.06l1.72-1.72a.75.75 0 0 0 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <a href="#" className="text-red-600 font-bold">
                    Logout
                  </a>
                </div>
              </div>
              {/*Notifications*/}
              <div id="notifications-card" className="hidden flex w-80 flex-col pb-3 absolute md:right-10 border mt-4 border-mblue-200 bg-white rounded drop-shadow-xl">
                {/*Notifications Header*/}
                <div className="flex justify-between border-b p-3 items-center">
                  <p className="font-bold">Notifications</p>
                  <span className="inline-flex items-center rounded-md bg-mblue-200 px-2 py-1 text-xs font-medium text-mblue-950 ring-1 ring-inset ring-mblue-600">1 New</span>
                </div>
                {/*Notifications Body*/}
                <div className="flex flex-col">
                  {/*Notification 1*/}
                  <div className="border-b p-3 hover:bg-mblue-200 hover:duration-300 group cursor-pointer flex items-center justify-between relative">
                    <div className="absolute p-1 bg-mblue-800 rounded-full right-5 top-3" />
                    <div className="flex flex-col space-y-2">
                      <p className="font-semibold">Bernard Woods</p>
                      <span className="text-sm">You have new message from Bernard Woods</span>
                      <span className="text-xs text-mblue-900">May 18, 8:26 AM</span>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 rounded-full p-2 duration-300 hover:bg-mblue-200">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  {/*Notification 2*/}
                  <div className="border-b p-3 hover:bg-mblue-200 hover:duration-300 group cursor-pointer flex items-center justify-between relative">
                    <div className="absolute p-1 bg-mblue-800 rounded-full right-5 top-3" />
                    <div className="flex flex-col space-y-2">
                      <p className="font-semibold">Bernard Woods</p>
                      <span className="text-sm">You have new message from Bernard Woods</span>
                      <span className="text-xs text-mblue-900">May 18, 8:26 AM</span>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 rounded-full p-2 duration-300 hover:bg-mblue-200">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  {/*Notification 3*/}
                  <div className="border-b p-3 hover:bg-mblue-200 hover:duration-300 group cursor-pointer flex items-center justify-between relative">
                    <div className="absolute p-1 bg-mblue-800 rounded-full right-5 top-3" />
                    <div className="flex flex-col space-y-2">
                      <p className="font-semibold">Bernard Woods</p>
                      <span className="text-sm">You have new message from Bernard Woods</span>
                      <span className="text-xs text-mblue-900">May 18, 8:26 AM</span>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 rounded-full p-2 duration-300 hover:bg-mblue-200">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
                {/*Notifications Footer*/}
                <div className="flex justify-center text-mblue pt-3">
                  <a className="underline" href="#">
                    View All Notifications
                  </a>
                </div>
              </div>
            </div>
          </header>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default Layout;
