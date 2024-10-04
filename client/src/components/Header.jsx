import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useUser, useUserDispatch } from "../context/UserContext";

function Header({ setShowSidebar }) {
  const [cookie, setCookie, removeCookie] = useCookies(["token"]);
  const navigate = useNavigate();
  const [userActionsPopup, setUserActionsPopup] = useState("hidden");
  const [notificationsPopup, setNotificationsPopup] = useState("hidden");
  const toggleUserActionsPopup = () => {
    setUserActionsPopup(userActionsPopup === "hidden" ? "flex" : "hidden");
  };
  const toggleNotificationsPopup = () => {
    setNotificationsPopup(notificationsPopup === "hidden" ? "flex" : "hidden");
  };
  const user = useUser();
  const dispatch = useUserDispatch();
  const logout = () => {
    removeCookie("token", { path: "/" });
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };
  return (
    <header className="px-2 py-2 md:px-5 md:py-5 mb-5 border cursor-pointer drop-shadow-xl bg-mblue-800 rounded sticky top-0 z-20">
      <div className="flex justify-between lg:justify-end items-center">
        <button onClick={() => setShowSidebar(true)} type="button" className="lg:hidden text-white  hover:bg-mblue-200 hover:text-mblue-950 duration-300 rounded-full w-10 h-10">
          <i className="fa-solid fa-bars text-xl"></i>
        </button>
        <div className="flex justify-end space-x-2 items-center">
          <button onClick={toggleNotificationsPopup} type="button" className=" text-white  hover:bg-mblue-200 hover:text-mblue-950 duration-300 rounded-full w-10 h-10">
            <i className="fa-solid fa-bell text-xl"></i>
          </button>
          <button onClick={toggleUserActionsPopup} data-cy="user-icon" type="button" className="text-white  hover:bg-mblue-200 hover:text-mblue-950 duration-300 rounded-full w-10 h-10">
            <i className="fa-solid fa-user text-xl"></i>
          </button>
        </div>
      </div>
      <div className="relative flex justify-center z-50">
        <div id="user-actions-card" className={`${userActionsPopup} flex flex-col w-80 absolute md:right-0 border border-mblue-200 mt-4 bg-white rounded drop-shadow-xl`}>
          <div className="flex space-x-3 border-b p-3 items-center">
            <img src="../src/assets/images/avatar.png" className="rounded-full h-10" />
            <div className="flex flex-col">
              <p data-cy="logged-in-user" className="font-bold">
                {user.username}
              </p>
              <span className="w-full text-sm">{user.email}</span>
            </div>
          </div>
          <ul className="border-b">
            <li className="flex items-center cursor-pointer p-3 space-x-3 hover:bg-mblue-200 hover:duration-300">
              <i className="fa-solid fa-id-badge text-2xl w-6"></i>
              <a href="#">Profile</a>
            </li>
            <li className="flex items-center cursor-pointer p-3 space-x-3 hover:bg-mblue-200 hover:duration-300">
              <i className="fa-solid fa-gear text-2xl w-6"></i>
              <a href="#">Einstellungen</a>
            </li>
          </ul>
          <div className="flex items-center cursor-pointer p-3 space-x-3">
            <i className="fa-solid fa-right-from-bracket text-2xl  text-red-600 w-6"></i>
            <a href="" onClick={logout} className="text-red-600 font-semibold">
              Ausloggen
            </a>
          </div>
        </div>
        <div id="notifications-card" className={`${notificationsPopup} flex w-80 flex-col pb-3 absolute md:right-10 border mt-4 border-mblue-200 bg-white rounded drop-shadow-xl`}>
          <div className="flex justify-between border-b p-3 items-center">
            <p className="font-bold">Benachrichtigungen</p>
            <span className="inline-flex items-center rounded-md bg-mblue-200 px-2 py-1 text-xs font-medium text-mblue-950 ring-1 ring-inset ring-mblue-600">1 New</span>
          </div>
          <div className="flex flex-col">
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
          <div className="flex justify-center text-mblue pt-3">
            <a className="underline" href="#">
              View All Notifications
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
