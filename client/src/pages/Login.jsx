import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useUserDispatch } from "../context/UserContext";
import { Link } from "react-router-dom";
function Login() {
  const API_URL = import.meta.env.VITE_API_URL;
  const dispatch = useUserDispatch();
  const [cookie, setCookie, removeCookie] = useCookies(["token"]);
  const [inputType, setInputType] = useState("password");
  const navigate = useNavigate();
  const handlePasswordInputToggle = () => {
    setInputType(inputType === "password" ? "text" : "password");
  };
  const handleLoginFormSubmit = async (e) => {
    e.preventDefault();
    let username = e.target.username.value;
    let password = e.target.password.value;

    if (username.length > 0 && password.length > 0) {
      const formData = {
        username,
        password,
      };
      try {
        const { data } = await axios.post(`${API_URL}/login`, formData, { withCredentials: true });
        if (data) {
          dispatch({
            type: "LOGIN",
            payload: data,
          });
          setTimeout(() => {
            navigate("/tickets");
          }, 1000);
          window.localStorage.setItem("user", JSON.stringify(data));
          toast.success("Sie sind erfolgreich angemeldet");
        }
      } catch (error) {
        toast.error(error.response.data.message);
      }
    } else {
      toast.error("Bitte füllen Sie alle Felder aus");
    }
  };
  useEffect(() => {
    if (cookie.token) {
      toast.success("Sie sind bereits angemeldet");
      navigate("/tickets");
    }
  }, []);
  return (
    <div className="bg-mblue-50 font-montserrat flex justify-center items-center h-dvh p-4">
      <div className="bg-white drop-shadow-xl rounded p-10 w-[450px]">
        <div className="mb-4 p-5 flex items-center justify-center">
          <img src="../src/assets/images/logo.png" className="w-2/3" />
        </div>
        <div className="">
          <h2 className="text-xl font-semibold mb-1">Wilkommen</h2>
          <p className="mb-4">Bitte melden Sie sich an, um fortzufahren.</p>
          <form onSubmit={handleLoginFormSubmit}>
            <div>
              <input type="text" required={true} name="username" className="p-3 h-12 rounded-none mb-4 w-full border focus:outline-none focus:border-mblue-700 border-spacing-6" placeholder="Benutzername" />
            </div>
            <div className="relative flex justify-end items-center mb-4">
              <input type={inputType} required={true} name="password" className="py-3 pl-3 pr-10 w-full  rounded-none focus:outline-none focus:border-mblue-700 border" placeholder="Passwort " />
              <button type="button" onClick={handlePasswordInputToggle} className="w-10 h-10  flex items-center justify-center absolute right-1 text-gray-400 duration-300  hover:bg-mblue-300 hover:text-mblue-800 rounded-full p-2">
                <i className="fa-regular fa-eye text-xl"></i>
              </button>
            </div>
            <div className="flex justify-between mb-4">
              <div className="flex items-center space-x-2">
                <input className="h-6 w-6" type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">An mich erinnern</label>
              </div>
              <Link to="/resetpassword" className="text-mblue-800 font-semibold">
                Passwort vergessen?
              </Link>
            </div>
            <button className="cursor-pointer p-3 mb-4 w-full text-white bg-mblue-500 rounded-none hover:bg-mblue-600 duration-300 drop-shadow-xl">Einloggen</button>
          </form>
          <div className="flex justify-center space-x-3 mb-4">
            <p>Sie haben noch kein Konto?</p>
            <Link to="/register" className="text-mblue-800 font-semibold">
              Registrierung
            </Link>
          </div>
          <div className="flex items-center space-x-5 justify-center mb-4">
            <hr className="w-2/5" />
            <span>oder</span>
            <hr className="w-2/5" />
          </div>
          <div className="flex justify-center space-x-5">
            <button type="button" className="w-10 h-10  flex items-center justify-center hover:text-mblue-950  hover:bg-mblue-300 duration-300 rounded-full p-2">
              <i className="fa-brands fa-github text-2xl"></i>
            </button>
            <button type="button" className="w-10 h-10  flex items-center justify-center hover:text-mblue-950  hover:bg-mblue-300 duration-300 rounded-full p-2">
              <i className="fa-brands fa-google text-2xl"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
