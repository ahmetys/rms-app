import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useUser, useUserDispatch } from "../context/UserContext";
import { Link } from "react-router-dom";
function Login() {
  const user = useUser();
  const dispatch = useUserDispatch();
  const [cookie, setCookie, removeCookie] = useCookies(["jwt"]);
  const [inputType, setInputType] = useState("password");
  const navigate = useNavigate();
  const togglePasswordInput = () => {
    setInputType(inputType === "password" ? "text" : "password");
  };
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    let username = e.target.username.value;
    let password = e.target.password.value;

    if (username.length > 0 && password.length > 0) {
      const formData = {
        username,
        password,
      };
      try {
        const response = await axios.post("http://localhost:3000/login", formData, { withCredentials: true });
        setCookie("token", response.data.token, {
          maxAge: 1000 * 60 * 60 * 24 * 30,
          secure: true,
        });
        dispatch({
          type: "LOGIN",
          payload: response.data.foundUser,
        });
        //Cookies.set("token", response.data.token, { expires: 7, secure: true });
        toast.success("Giris basarili ");
        navigate("/");
      } catch (err) {
        console.log(err);
        toast.error(err.response.data.msg);
      }
    } else {
      toast.error("Please fill all inputs");
    }
  };
  useEffect(() => {
    if (cookie.token) {
      toast.success("You already logged in");
      navigate("/dashboard");
    }
  }, []);
  return (
    <div className="bg-mblue-50 font-montserrat flex justify-center items-center h-dvh p-4">
      <div className="bg-white drop-shadow-xl rounded p-10 w-[450px]">
        <div className="mb-4 p-5 flex items-center justify-center">
          <img src="../src/assets/images/logo.png" className="w-2/3" />
        </div>
        <div className="">
          <h2 className="text-xl font-semibold mb-1">Hosgeldiniz</h2>
          <p className="mb-4">Devam etmek icin lütfen giris yapin.</p>
          <form onSubmit={handleLoginSubmit}>
            <div>
              <input type="text" name="username" className="p-3 h-12 rounded-none mb-4 w-full border focus:outline-none focus:border-mblue-700 border-spacing-6" placeholder="Kullanici adi girin" />
            </div>
            <div className="relative flex justify-end items-center mb-4">
              <input type={inputType} name="password" className="py-3 pl-3 pr-10 w-full  rounded-none focus:outline-none focus:border-mblue-700 border" placeholder="Sifre girin" />
              <button type="button" onClick={togglePasswordInput} className="w-10 h-10  flex items-center justify-center absolute right-1 text-gray-400 hover:bg-mblue-300 hover:text-mblue-800 rounded-full p-2">
                <i className="fa-regular fa-eye text-xl"></i>
              </button>
            </div>
            <div className="flex justify-between mb-4">
              <div className="flex items-center space-x-2">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Beni hatirla</label>
              </div>
              <a href="#" className="text-mblue-800 font-semibold">
                Sifremi Unuttum!
              </a>
            </div>
            <button className="cursor-pointer p-3 mb-4 w-full text-white bg-mblue-500 rounded-none hover:bg-mblue-600 duration-300 drop-shadow-xl">Giris Yap</button>
          </form>
          <div className="flex justify-center space-x-3 mb-4">
            <p>Üye degil misiniz?</p>
            <Link to="/register" className="text-mblue-800 font-semibold">
              Hemen Üye Ol!
            </Link>
          </div>
          <div className="flex items-center space-x-5 justify-center mb-4">
            <hr className="w-2/5" />
            <span>veya</span>
            <hr className="w-2/5" />
          </div>
          <div className="flex justify-center space-x-5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-mblue-600">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5Zm0 2.25h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25Z"
              />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-red-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-green-600">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
              />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-violet-600">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
