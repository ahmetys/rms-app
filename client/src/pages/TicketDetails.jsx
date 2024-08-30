import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";
function TicketDetails() {
  const [ticketDetails, setTicketDetails] = useState({});
  const API_URL = import.meta.env.VITE_API_URL;
  let params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const getTicketDetails = async () => {
      const response = await axios.get(`${API_URL}/api/tickets/getTicketById/${params.ticketId}`, { withCredentials: true });
      console.log(response.data);
      setTicketDetails({ ...response.data.ticket });
    };
    getTicketDetails();
  }, []);
  return (
    <section className="border drop-shadow-xl bg-white rounded mb-5">
      <div className="p-5 bg-gray-50 border-b grid grid-cols-5 justify-between items-center relative">
        <h1 className="col-span-4 text-4xl font-semibold justify-between flex items-center">
          Fis Detaylari <span className="text-base">Ticket ID: {params.ticketId}</span>
        </h1>
        <div className="col-span-1 h-auto flex justify-end space-x-3">
          <div onClick={() => navigate(-1)} className="flex justify-center cursor-pointer items-center w-12 h-12 shrink-0 grow-0 text-white bg-mblue-500 rounded-full hover:bg-mblue-600 duration-300 drop-shadow-xl">
            <i className="fa-solid fa-arrow-left text-white text-2xl" />
          </div>
        </div>
      </div>
      <div>
        <h2 className="p-5 font-semibold bg-gray-50 border-b">Müsteri Bilgileri</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          <div className="p-5 col-span-1 flex flex-col">
            <label htmlFor="" className="font-semibold">
              Müsteri Adi:
            </label>
            <div className="relative flex items-center">
              <span className="w-full h-12 py-3 ">{ticketDetails.customerInfos?.customerName}</span>
            </div>
          </div>
          <div className="p-5 col-span-1 flex flex-col">
            <label htmlFor="" className="font-semibold">
              Adres:
            </label>
            <div className="relative flex items-center">
              <span className="w-full h-12 py-3 ">{ticketDetails.customerInfos?.customerAddress}</span>
            </div>
          </div>
          <div className="p-5 col-span-1 flex flex-col">
            <label htmlFor="" className="font-semibold">
              Telefon:
            </label>
            <div className="relative flex items-center">
              <span className="w-full h-12 py-3 ">{ticketDetails.customerInfos?.customerPhone}</span>
            </div>
          </div>
          <div className="p-5 col-span-1 flex flex-col">
            <label htmlFor="" className="font-semibold">
              Email:
            </label>
            <div className="relative flex items-center">
              <span className="w-full h-12 py-3 ">{ticketDetails.customerInfos?.customerEmail}</span>
            </div>
          </div>
          <div className="p-5 col-span-1 flex flex-col">
            <label htmlFor="" className="font-semibold">
              Iletisim Tercihleri:
            </label>
            <div className="flex">
              <div className="relative flex items-center">{ticketDetails.customerInfos?.contactPreferenceCall && <span className=" py-3 mr-2">Arama</span>}</div>
              <div className="relative flex items-center">{ticketDetails.customerInfos?.contactPreferenceSms && <span className="py-3 mr-2">SMS</span>}</div>
              <div className="relative flex items-center">{ticketDetails.customerInfos?.contactPreferenceWhatsApp && <span className="py-3 mr-2">WhatsApp </span>}</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="p-5 font-semibold bg-gray-50 border-y">Cihaz Bilgileri</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          <div className="p-5 col-span-1 flex flex-col">
            <label htmlFor="" className="font-semibold">
              Cihaz:
            </label>
            <div className="relative flex items-center">
              <span className="w-full h-12 py-3 ">{ticketDetails.deviceInfos?.deviceType}</span>
            </div>
          </div>
          <div className="p-5 col-span-1 flex flex-col">
            <label htmlFor="" className="font-semibold">
              Marka:
            </label>
            <div className="relative flex items-center">
              <span className="w-full h-12 py-3 ">{ticketDetails.deviceInfos?.deviceBrand}</span>
            </div>
          </div>
          <div className="p-5 col-span-1 flex flex-col">
            <label htmlFor="" className="font-semibold">
              Model:
            </label>
            <div className="relative flex items-center">
              <span className="w-full h-12 py-3 ">{ticketDetails.deviceInfos?.deviceModel}</span>
            </div>
          </div>
          <div className="p-5 col-span-1 flex flex-col">
            <label htmlFor="" className="font-semibold">
              Seri No:
            </label>
            <div className="relative flex items-center">
              <span className="w-full h-12 py-3 ">{ticketDetails.deviceInfos?.deviceSerial}</span>
            </div>
          </div>
          <div className="p-5 col-span-1 flex flex-col">
            <label htmlFor="" className="font-semibold">
              IMEI No:
            </label>
            <div className="relative flex items-center">
              <span className="w-full h-12 py-3 ">{ticketDetails.deviceInfos?.deviceImei}</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="p-5 font-semibold bg-gray-50 border-y">Servis Bilgileri</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          <div className="p-5 col-span-1 flex flex-col">
            <div className="flex justify-between border-b mb-2">
              <div className="basis-4/5">
                <span className="font-semibold">Islem</span>
              </div>
              <div className="basis-1/5">
                <span className="font-semibold">Tutar</span>
              </div>
            </div>
            {ticketDetails.serviceInfos?.serviceTypes.map((item, index) => {
              return (
                <div key={index} className="flex justify-between items-center mb-2">
                  <div className="basis-4/5">
                    <span className="">{item.serviceType}</span>
                  </div>
                  <div className="basis-1/5 flex">
                    <span className="inline-block  font-semibold text-lg px-2 py-1 items-center">{item.estimatedCost} €</span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="p-5 col-span-1 flex flex-col">
            <div className="mb-2 col-span-1 flex justify-between space-x-10">
              <div className="flex flex-col w-full">
                <label htmlFor="" className="font-semibold">
                  Teslimat Tarihi:
                </label>
                <span className="w-full h-12 py-3 ">{moment(ticketDetails.serviceInfos?.estimatedDeliveryDate).format("DD.MM.YYYY")}</span>
              </div>
              <div className="flex w-full flex-col">
                <label htmlFor="" className="font-semibold">
                  Teslimat Saati:
                </label>
                <span className="w-full h-12 py-3 ">{ticketDetails.serviceInfos?.estimatedDeliveryTime}</span>
              </div>
            </div>
          </div>
          <div className="p-5 col-span-1 flex flex-col">
            <label htmlFor="" className="font-semibold">
              Not:
            </label>
            <p className="w-full h-12 py-3 ">{ticketDetails.serviceInfos?.serviceNotes}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TicketDetails;
