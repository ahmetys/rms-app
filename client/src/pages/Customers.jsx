import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
function Customers() {
  const API_URL = import.meta.env.VITE_API_URL;

  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    const getCustomers = async () => {
      const response = await axios.get(`${API_URL}/api/customers/getAllCustomers`, { withCredentials: true });
      console.log(response.data);
      setCustomers([...response.data]);
    };
    getCustomers();
  }, []);
  const deleteCustomer = async (customerId) => {
    const response = await axios.delete(`${API_URL}/api/customers/deleteCustomer/${customerId}`);
    console.log(response.data);
    toast.success("Müsteri silindi");
    setCustomers((prev) => prev.filter((c) => c._id !== customerId));
  };
  return (
    <>
      <section className="border drop-shadow-xl bg-white rounded mb-5">
        {/*Müsteriler Header*/}
        <div className="p-5 bg-gray-50 border-b grid grid-cols-5 justify-between items-center relative">
          <h1 className="col-span-4 text-4xl font-semibold">Müsteriler</h1>
          <div className="col-span-1 h-auto flex justify-end space-x-3">
            <NavLink to={`search`}>
              <div className="flex justify-center cursor-pointer items-center w-12 h-12 shrink-0 grow-0 text-white bg-mblue-500 rounded-full hover:bg-mblue-600 duration-300 drop-shadow-xl">
                <i className="fa-solid fa-search text-white text-2xl" />
              </div>
            </NavLink>
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
              <div className="overflow-hidden">
                <table className="table-auto min-w-full overflow-auto overscroll-contain">
                  <thead className="border-b font-bold">
                    <tr>
                      <td className="py-3 pl-5 pr-2">Müsteri Adi</td>
                      <td className="py-3 px-2">Telefon</td>
                      <td className="py-3 px-2">E-Posta</td>
                      <td className="py-3 px-2">Adres</td>
                      <td className="py-3 pl-2 pr-5">Islemler</td>
                    </tr>
                  </thead>
                  <tbody>
                    {customers.map((customer) => {
                      return (
                        <tr key={customer._id} className="hover:bg-mblue-200 hover:drop-shadow-xl duration-300 cursor-pointer">
                          <td className="pl-5 pr-2 py-3">{customer.customerName}</td>
                          <td className="px-2 py-3">{customer.customerPhone}</td>
                          <td className="px-2 py-3">{customer.customerEmail}</td>
                          <td className="px-2 py-3">{customer.customerAddress}</td>
                          <td className="pl-2 pr-5 py-3">
                            <div className="flex cursor-pointer space-x-1">
                              <Link to={`/customers/${customer._id}`}>
                                <div className="cursor-pointer  h-10 w-10 flex justify-center items-center rounded-full p-2 duration-300 hover:bg-mblue-600 hover:text-white">
                                  <i className="fa-regular fa-file-lines text-xl" />
                                </div>
                              </Link>
                              <Link to={`/customers/edit/${customer._id}`}>
                                <div className="cursor-pointer  h-10 w-10 flex justify-center items-center rounded-full p-2 duration-300 hover:bg-mblue-600 hover:text-white">
                                  <i className="fa-regular fa-pen-to-square text-xl" />
                                </div>
                              </Link>
                              <div onClick={() => deleteCustomer(customer._id)} className="cursor-pointer  h-10 w-10 flex justify-center items-center rounded-full p-2 duration-300 hover:bg-mblue-600 hover:text-white">
                                <i className="fa-regular fa-trash-can  text-xl" />
                              </div>
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
        {/* Müsteriler Footer*/}
        <div className="p-5 bg-gray-50 border-t flex justify-end" />
      </section>
    </>
  );
}

export default Customers;
