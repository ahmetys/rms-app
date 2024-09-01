import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomerInfos from "../components/CustomerInfos";
import DeviceInfos from "../components/DeviceInfos";
import ServiceInfos from "../components/ServiceInfos";
import axios from "axios";
import { toast } from "react-toastify";
function NewTicket() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [newTicket, setNewTicket] = useState({});
  const navigate = useNavigate();
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.post(`${API_URL}/api/tickets/newTicket`, { ...newTicket }, { withCredentials: true });
    data.succeeded && navigate("/tickets");
    toast.success("Fis eklendi");
  };

  return (
    <section className="border drop-shadow-xl bg-white rounded mb-5 ">
      <div className="p-5 bg-gray-50 border-b grid grid-cols-5 justify-between items-center relative">
        <h1 className="col-span-4 text-4xl font-semibold">Neues Ticket</h1>
        <div className="col-span-1 h-auto flex justify-end space-x-3">
          <div onClick={() => navigate(-1)} className="flex justify-center cursor-pointer items-center w-12 h-12 shrink-0 grow-0 text-white bg-mblue-500 rounded-full hover:bg-mblue-600 duration-300 drop-shadow-xl">
            <i className="fa-solid fa-arrow-left text-white text-2xl" />
          </div>
        </div>
      </div>
      <form onSubmit={handleFormSubmit}>
        <CustomerInfos newTicket={newTicket} setNewTicket={setNewTicket} />
        <DeviceInfos newTicket={newTicket} setNewTicket={setNewTicket} />
        <ServiceInfos newTicket={newTicket} setNewTicket={setNewTicket} />
        <div className="p-5 bg-gray-50 border-t flex justify-end">
          <button className="cursor-pointer w-full md:w-auto h-12 p-3 text-white bg-mblue-500 hover:bg-mblue-600 duration-300 drop-shadow-xl">Kaydet</button>
        </div>
      </form>
    </section>
  );
}

export default NewTicket;
