import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function TicketDetails() {
  const API_URL = import.meta.env.VITE_API_URL;
  let params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios.get(`${API_URL}/api/tickets/getTicketById/${params.ticketId}`);
  }, []);
  return (
    <section className="border drop-shadow-xl bg-white rounded mb-5">
      {/*Yeni Müsteri Header*/}
      <div className="p-5 bg-gray-50 border-b grid grid-cols-5 justify-between items-center relative">
        <h1 className="col-span-4 text-4xl font-semibold">Fis Detaylari</h1>
        <div className="col-span-1 h-auto flex justify-end space-x-3">
          <div onClick={() => navigate(-1)} className="flex justify-center cursor-pointer items-center w-12 h-12 shrink-0 grow-0 text-white bg-mblue-500 rounded-full hover:bg-mblue-600 duration-300 drop-shadow-xl">
            <i className="fa-solid fa-arrow-left text-white text-2xl" />
          </div>
        </div>
      </div>
      {/*Yeni Müsteri Body*/}
      <div>
        <h2 className="p-5 font-semibold bg-gray-50 border-b">Müsteri Bilgileri</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2"></div>
      </div>
      {/*Yeni Servis  Fisi Footer*/}
      <div className="p-5 bg-gray-50 border-t flex justify-end">
        <button className="cursor-pointer w-full md:w-auto h-12 p-3 text-white bg-mblue-500 hover:bg-mblue-600 duration-300 drop-shadow-xl">Kaydet</button>
      </div>
    </section>
  );
}

export default TicketDetails;
