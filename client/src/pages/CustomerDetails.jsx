import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import moment from "moment";
function CustomerDetails() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [customerDetails, setCustomerDetails] = useState({});
  let params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getCustomerDetails = async (customerId) => {
      const response = await axios.post(`${API_URL}/api/customers/getCustomerDetails`, { customerId: customerId }, { withCredentials: true });
      console.log(response.data);
      setCustomerDetails({ ...response.data.customerDetails });
    };
    getCustomerDetails(params.customerId);
  }, []);
  return (
    <section className="border drop-shadow-xl bg-white rounded mb-5">
      <div className="p-5 bg-gray-50 border-b grid grid-cols-5 justify-between items-center relative">
        <h1 className="col-span-4 text-4xl font-semibold justify-between flex items-center">
          Müsteri Detaylari <span className="text-base">Müsteri ID: {params.customerId}</span>
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
              <span className="w-full h-12 py-3 ">{customerDetails.customerInfos?.customerName}</span>
            </div>
          </div>
          <div className="p-5 col-span-1 flex flex-col">
            <label htmlFor="" className="font-semibold">
              Adres:
            </label>
            <div className="relative flex items-center">
              <span className="w-full h-12 py-3 ">{customerDetails.customerInfos?.customerAddress}</span>
            </div>
          </div>
          <div className="p-5 col-span-1 flex flex-col">
            <label htmlFor="" className="font-semibold">
              Telefon:
            </label>
            <div className="relative flex items-center">
              <span className="w-full h-12 py-3 ">{customerDetails.customerInfos?.customerPhone}</span>
            </div>
          </div>
          <div className="p-5 col-span-1 flex flex-col">
            <label htmlFor="" className="font-semibold">
              Email:
            </label>
            <div className="relative flex items-center">
              <span className="w-full h-12 py-3 ">{customerDetails.customerInfos?.customerEmail}</span>
            </div>
          </div>
          <div className="p-5 col-span-1 flex flex-col">
            <label htmlFor="" className="font-semibold">
              Iletisim Tercihleri:
            </label>
            <div className="flex">
              <div className="relative flex items-center">{customerDetails.customerInfos?.contactPreferenceCall && <span className=" py-3 mr-2">Arama</span>}</div>
              <div className="relative flex items-center">{customerDetails.customerInfos?.contactPreferenceSms && <span className="py-3 mr-2">SMS</span>}</div>
              <div className="relative flex items-center">{customerDetails.customerInfos?.contactPreferenceWhatsApp && <span className="py-3 mr-2">WhatsApp </span>}</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="p-5 font-semibold bg-gray-50 border-y">Müsteri Fisleri</h2>
        <div className="flex flex-col">
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full">
              <div className="overflow-hidden">
                <table className="table-auto min-w-full overflow-auto overscroll-contain">
                  <thead className="border-b font-bold">
                    <tr>
                      <td className="py-3 pl-5 pr-2">Müsteri</td>
                      <td className="py-3 px-2">Cihaz</td>
                      <td className="py-3 px-2">Ariza</td>
                      <td className="py-3 px-2">Kayit Tarihi</td>
                      <td className="py-3 px-2">Durum</td>
                      <td className="py-3 pl-2 pr-5">Islemler</td>
                    </tr>
                  </thead>
                  <tbody>
                    {customerDetails?.customerTickets?.map((ticket) => {
                      return (
                        <tr key={ticket._id} className=" duration-300 cursor-pointer">
                          <td className="pl-5 pr-2 py-3">{ticket.customerInfos.customerName}</td>
                          <td className="px-2 py-3">{ticket.deviceInfos?.deviceModel}</td>
                          <td className="px-2 py-3  space-y-2">
                            {ticket.serviceInfos.serviceTypes.map((item, index) => {
                              return (
                                <span key={index} className="inline-flex space-x-2 mr-2 cursor-pointer items-center rounded-md hover:drop-shadow-md duration-300 bg-mblue-300 px-2 py-1 text-xs font-medium text-mblue-950 ring-1 ring-inset ring-mblue-600">
                                  <span>{item.serviceType} </span>
                                </span>
                              );
                            })}
                          </td>
                          <td className="px-2 py-3">{moment(ticket.createdAt).format("DD.MM.YYYY")}</td>
                          <td className="px-2 py-3">
                            {ticket.serviceInfos.serviceStatus === "Onarildi" && (
                              <span className={`inline-flex space-x-2 cursor-pointer items-center rounded-md hover:drop-shadow-md duration-300 bg-green-200 px-2 py-1 text-xs font-medium text-green-950 ring-1 ring-inset ring-green-600`}>
                                <span>{ticket.serviceInfos.serviceStatus} </span>
                              </span>
                            )}
                            {ticket.serviceInfos.serviceStatus === "Onarilamadi" && (
                              <span className={`inline-flex space-x-2 cursor-pointer items-center rounded-md hover:drop-shadow-md duration-300 bg-red-200 px-2 py-1 text-xs font-medium text-red-950 ring-1 ring-inset ring-red-600`}>
                                <span>{ticket.serviceInfos.serviceStatus} </span>
                              </span>
                            )}
                            {ticket.serviceInfos.serviceStatus === "Serviste" && (
                              <span className={`inline-flex space-x-2 cursor-pointer items-center rounded-md hover:drop-shadow-md duration-300 bg-gray-200 px-2 py-1 text-xs font-medium text-gray-950 ring-1 ring-inset ring-gray-600`}>
                                <span>{ticket.serviceInfos.serviceStatus} </span>
                              </span>
                            )}
                          </td>
                          <td className="pl-2 pr-5 py-3">
                            <div className="flex relative cursor-pointer space-x-4">
                              <Link to={`/tickets/${ticket._id}`}>
                                <div className="cursor-pointer  h-10 w-10 flex justify-center items-center rounded-full p-2 duration-300 hover:bg-mblue-600 hover:text-white">
                                  <i className="fa-regular fa-file-lines text-xl" />
                                </div>
                              </Link>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CustomerDetails;
