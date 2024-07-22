import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
function Register() {
  const [cookie, setCookie, removeCookie] = useCookies(["jwt"]);

  //toast("Wow so easy !");
  const [inputType, setInputType] = useState("password");
  const navigate = useNavigate();
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    let username = e.target.username.value;
    let email = e.target.email.value;
    let password = e.target.password.value;
    let confirmPassword = e.target.confirmPassword.value;
    let privacyPolicy = e.target.privacyPolicy.checked;

    if (username.length > 0 && email.length > 0 && password.length > 0 && confirmPassword.length > 0) {
      if (password === confirmPassword) {
        if (privacyPolicy) {
          const formData = {
            username,
            email,
            password,
          };
          try {
            const response = await axios.post("http://localhost:3000/register", formData);
            console.log(response);
            toast.success("Registration successfull");
            navigate("/login");
          } catch (err) {
            console.log(err.response.data);
            toast.error(err.response.data.error.message);
          }
        } else {
          toast.error("Lütfen Kullanim Kosullarini kabul edin");
        }
      } else {
        toast.error("Sifreler eslesmiyor!");
      }
    } else {
      toast.error("Lütfen tüm alanlari doldurun!");
    }
  };

  const togglePasswordInput = () => {
    setInputType(inputType === "password" ? "text" : "password");
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
          <h2 className="text-xl font-semibold mb-3">Yeni Kullanici Kaydi</h2>
          <form onSubmit={handleRegisterSubmit}>
            <div>
              <input autoComplete="new-password" type="text" name="username" className="p-3 h-12 rounded-none mb-4 w-full border focus:outline-none focus:border-mblue-700 border-spacing-6" placeholder="Kullanici adi girin" />
            </div>
            <div>
              <input type="email" name="email" className="p-3 h-12 rounded-none mb-4 w-full border focus:outline-none focus:border-mblue-700 border-spacing-6" placeholder="E-Posta adresinizi girin" />
            </div>
            <div className="relative flex justify-end items-center mb-4">
              <input type={inputType} name="password" className="py-3 pl-3 pr-10 w-full  rounded-none focus:outline-none focus:border-mblue-700 border" placeholder="Sifrenizi girin" />
              <button type="button" onClick={togglePasswordInput} className="absolute right-1 flex items-center justify-center text-gray-400 hover:bg-mblue-300 hover:text-mblue-800 rounded-full w-10 h-10 p-2">
                <i className="fa-regular fa-eye text-xl"></i>
              </button>
            </div>
            <div className="relative flex justify-end items-center mb-4">
              <input type={inputType} name="confirmPassword" className="py-3 pl-3 pr-10 w-full  rounded-none focus:outline-none focus:border-mblue-700 border" placeholder="Sifrenizi tekrar girin" />
              <button type="button" onClick={togglePasswordInput} className="absolute right-1 flex items-center justify-center text-gray-400 hover:bg-mblue-300 hover:text-mblue-800 rounded-full w-10 h-10 p-2">
                <i className="fa-regular fa-eye text-xl"></i>
              </button>
            </div>
            <div className="flex items-center space-x-3 mb-3">
              <input id="privacyPolicy" type="checkbox" name="privacyPolicy" className="h-12 w-6" />
              <label htmlFor="privacyPolicy">Kullanim kosullarini onayliyorum.</label>
            </div>
            <button className="cursor-pointer p-3 mb-6 w-full text-white bg-mblue-500 rounded-none hover:bg-mblue-600 duration-300 drop-shadow-xl">Kayit ol</button>
            <div className="flex justify-center space-x-3 mt-2">
              <p>Zaten Üye misiniz?</p>
              <a href="#" className="text-mblue-800 font-semibold">
                Giris Yap!
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
