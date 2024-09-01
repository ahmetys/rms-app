import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function newCustomerData() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [customerData, setCustomerData] = useState({});
  const navigate = useNavigate();
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${API_URL}/api/customers/createCustomer`, { ...customerData }, { withCredentials: true });
      if (data.succeeded) {
        e.target.reset();
        setCustomerData({});
        toast.success("Neuer Kunde hinzugefügt");
        navigate("/customers");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleInputChange = (e) => {
    let newCustomerData = {};
    if (e.target.type === "checkbox") {
      newCustomerData = { ...customerData, [e.target.name]: e.target.checked };
    } else {
      newCustomerData = { ...customerData, [e.target.name]: e.target.value };
    }
    setCustomerData(newCustomerData);
  };
  return (
    <section className="border drop-shadow-xl bg-white rounded mb-5">
      <div className="p-5 bg-gray-50 border-b grid grid-cols-5 justify-between items-center relative">
        <h1 className="col-span-4 text-4xl font-semibold">Neuen Kunden hinzufügen</h1>
        <div className="col-span-1 h-auto flex justify-end space-x-3">
          <div onClick={() => navigate(-1)} className="flex justify-center cursor-pointer items-center w-12 h-12 shrink-0 grow-0 text-white bg-mblue-500 rounded-full hover:bg-mblue-600 duration-300 drop-shadow-xl">
            <i className="fa-solid fa-arrow-left text-white text-2xl" />
          </div>
        </div>
      </div>
      <form onSubmit={handleFormSubmit}>
        <div>
          <h2 className="p-5 font-semibold bg-gray-50 border-b">Kundendaten</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            <div className="p-5 col-span-1 flex flex-col">
              <label htmlFor="" className="font-semibold">
                Kundenname:
              </label>
              <div className="relative flex items-center">
                <input required onChange={handleInputChange} type="text" name="customerName" className="w-full h-12 p-3 border focus:outline-none rounded-none focus:border-mblue-700" />
              </div>
            </div>
            <div className="p-5 col-span-1 flex flex-col">
              <label htmlFor="" className="font-semibold">
                Addresse:
              </label>
              <div className="relative flex items-center">
                <input onChange={handleInputChange} type="text" name="customerAddress" className="w-full h-12 p-3 border focus:outline-none rounded-none focus:border-mblue-700" />
              </div>
            </div>
            <div className="p-5 col-span-1 flex flex-col">
              <label htmlFor="" className="font-semibold">
                Telefonnummer:
              </label>
              <div className="relative flex items-center">
                <input onChange={handleInputChange} type="text" name="customerPhone" className="w-full h-12 p-3 border focus:outline-none rounded-none focus:border-mblue-700" />
              </div>
            </div>
            <div className="p-5 col-span-1 flex flex-col">
              <label htmlFor="" className="font-semibold">
                E-Mail:
              </label>
              <div className="relative flex items-center">
                <input onChange={handleInputChange} type="text" name="customerEmail" className="w-full h-12 p-3 border focus:outline-none rounded-none focus:border-mblue-700" />
              </div>
            </div>
            <div className="p-5 col-span-1 flex flex-col">
              <label htmlFor="" className="font-semibold">
                Kontakt:
              </label>
              <div className="flex space-x-5">
                <div className="flex items-center space-x-2">
                  <input onChange={handleInputChange} type="checkbox" id="contactPreferenceWhatsapp" name="contactPreferenceWhatsapp" className="h-12 w-6" />
                  <label htmlFor="contactPreferenceWhatsapp">WhatsApp</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input onChange={handleInputChange} type="checkbox" id="contactPreferenceSms" name="contactPreferenceSms" className="h-12 w-6" />
                  <label htmlFor="contactPreferenceSms">SMS</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input onChange={handleInputChange} type="checkbox" id="contactPreferenceCall" name="contactPreferenceCall" className="h-12 w-6" />
                  <label htmlFor="contactPreferenceCall">Arama</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-5 bg-gray-50 border-t flex justify-end">
          <button className="cursor-pointer w-full md:w-auto h-12 p-3 text-white bg-mblue-500 hover:bg-mblue-600 duration-300 drop-shadow-xl">Speichern</button>
        </div>
      </form>
    </section>
  );
}

export default newCustomerData;
