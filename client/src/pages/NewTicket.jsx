import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomerInfos from "../components/CustomerInfos";
import DeviceInfos from "../components/DeviceInfos";
import ServiceInfos from "../components/ServiceInfos";

function NewTicket() {
  const [newTicket, setNewTicket] = useState({});

  const navigate = useNavigate();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(newTicket);
  };

  return (
    <section className="border drop-shadow-xl bg-white rounded mb-5">
      {/*Yeni Müsteri Header*/}
      <div className="p-5 bg-gray-50 border-b grid grid-cols-5 justify-between items-center relative">
        <h1 className="col-span-4 text-4xl font-semibold">Yeni Fis Ekle</h1>
        <div className="col-span-1 h-auto flex justify-end space-x-3">
          <div onClick={() => navigate(-1)} className="flex justify-center cursor-pointer items-center w-12 h-12 shrink-0 grow-0 text-white bg-mblue-500 rounded-full hover:bg-mblue-600 duration-300 drop-shadow-xl">
            <i className="fa-solid fa-arrow-left text-white text-2xl" />
          </div>
        </div>
      </div>
      {/*Yeni Müsteri Body*/}
      <form onSubmit={handleFormSubmit}>
        <CustomerInfos newTicket={newTicket} setNewTicket={setNewTicket} />
        <DeviceInfos newTicket={newTicket} setNewTicket={setNewTicket} />
        <ServiceInfos />
        {/*Yeni Servis  Fisi Footer*/}
        <div className="p-5 bg-gray-50 border-t flex justify-end">
          <button className="cursor-pointer w-full md:w-auto h-12 p-3 text-white bg-mblue-500 hover:bg-mblue-600 duration-300 drop-shadow-xl">Kaydet</button>
        </div>
      </form>
    </section>
  );
}

export default NewTicket;
