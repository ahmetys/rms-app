import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import moment from "moment";
import axios from "axios";
function Tickets() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [tickets, setTickets] = useState([]);
  useEffect(() => {
    const getAllTickets = async () => {
      const response = await axios.get(`${API_URL}/api/tickets/getAllTickets`, { withCredentials: true });
      setTickets([...response.data]);
    };
    getAllTickets();
  }, []);
  return (
    <section className="border drop-shadow-xl bg-white rounded mb-5">
      <div className="p-5 bg-gray-50 border-b grid grid-cols-5 justify-between items-center relative">
        <h1 className="col-span-4 text-4xl font-semibold">Tickets</h1>
        <div className="col-span-1 h-auto flex justify-end space-x-3">
          <NavLink to={`new`}>
            <div className="flex justify-center cursor-pointer items-center w-12 h-12 shrink-0 grow-0 text-white bg-mblue-500 rounded-full hover:bg-mblue-600 duration-300 drop-shadow-xl">
              <i className="fa-solid fa-plus text-white text-2xl" />
            </div>
          </NavLink>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full">
            <div className="overflow-hidden  pb-24">
              <table className="table-auto min-w-full overflow-auto overscroll-contain ">
                <thead className="border-b font-bold">
                  <tr>
                    <td className="py-3 pl-5 pr-2">Kunde</td>
                    <td className="py-3 px-2">Gerät</td>
                    <td className="py-3 px-2">Fehler</td>
                    <td className="py-3 px-2">Anmeldedatum</td>
                    <td className="py-3 px-2">Status</td>
                    <td className="py-3 pl-2 pr-5">Optionen</td>
                  </tr>
                </thead>
                <tbody>
                  {tickets.map((ticket) => {
                    return <TicketRow key={ticket._id} ticket={ticket}></TicketRow>;
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 bg-gray-50 border-t flex justify-end" />
    </section>
  );
}

export default Tickets;

function ServiceType({ serviceType }) {
  return (
    <span className="inline-flex space-x-2 mr-2 cursor-pointer items-center rounded-md hover:drop-shadow-md duration-300 bg-mblue-300 px-2 py-1 text-xs font-medium text-mblue-950 ring-1 ring-inset ring-mblue-600">
      <span>{serviceType} </span>
    </span>
  );
}

function TicketRow({ ticket }) {
  const API_URL = import.meta.env.VITE_API_URL;

  const [showOptions, setShowOptions] = useState(false);
  const [statusBg, setStatusBg] = useState("gray");
  const deleteTicket = () => {};
  const updateTicketStatus = async (status) => {
    const response = await axios.post(`${API_URL}/api/tickets/updateTicket`, { ticketId: ticket._id, status: status }, { withCredentials: true });
    if (response.data.succeeded) {
      setShowOptions(false);
      ticket.serviceInfos.serviceStatus = status;
      if (status === "Onarildi") {
        setStatusBg("green");
      } else if (status === "Onarilamadi") {
        setStatusBg("red");
      }
    }
  };

  return (
    <tr className=" duration-300 cursor-pointer">
      <td className="pl-5 pr-2 py-3">{ticket.customerInfos.customerName}</td>
      <td className="px-2 py-3">{ticket.deviceInfos?.deviceModel}</td>
      <td className="px-2 py-3  space-y-2">
        {ticket.serviceInfos.serviceTypes.map((item, index) => {
          return <ServiceType key={index} serviceType={item.serviceType}></ServiceType>;
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
          <div className="relative cursor-pointer z-0 h-10 w-10 flex justify-center items-center rounded-full p-2 duration-300 hover:bg-mblue-600 hover:text-white">
            <i onClick={() => setShowOptions(!showOptions)} className="fa-regular fa-pen-to-square text-xl" />
          </div>
          <div onClick={() => deleteTicket(ticket._id)} className="cursor-pointer  h-10 w-10 flex justify-center items-center rounded-full p-2 duration-300 hover:bg-mblue-600 hover:text-white">
            <i className="fa-regular fa-trash-can  text-xl" />
          </div>
          <div className={`${showOptions ? "" : "hidden"} absolute z-10 bg-white top-10 right-0 min-w-36 border rounded drop-shadow-xl`}>
            <ul>
              <li onClick={() => updateTicketStatus("Onarildi")} className="hover:bg-mblue-200 hover:drop-shadow-xl p-3 duration-300">
                Onarildi
              </li>
              <li onClick={() => updateTicketStatus("Onarilamadi")} className="hover:bg-mblue-200 hover:drop-shadow-xl p-3 duration-300">
                Onaralimadi
              </li>
            </ul>
          </div>
        </div>
      </td>
    </tr>
  );
}
