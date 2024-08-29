import axios from "axios";
import { useEffect, useState } from "react";

function CustomerInfos({ newTicket, setNewTicket }) {
  const API_URL = import.meta.env.VITE_API_URL;
  const [customerInfos, setCustomerInfos] = useState({});
  const [customerSuggestions, setCustomerSuggestions] = useState([]);
  const [customerSuggestionsPopup, setCustomerSuggestionsPopup] = useState(false);
  const handleInputChange = (e) => {
    if (e.target.type === "checkbox") {
      setCustomerInfos({ ...customerInfos, [e.target.name]: e.target.checked });
    } else {
      setCustomerInfos({ ...customerInfos, [e.target.name]: e.target.value });
    }
    if (e.target.name === "customerName") {
      const searchTerm = e.target.value;
      if (searchTerm.length >= 3) {
        searchCustomer(searchTerm);
        setCustomerSuggestionsPopup(true);
      } else {
        setCustomerSuggestionsPopup(false);
      }
    }
  };
  const searchCustomer = async (searchTerm) => {
    const { data } = await axios.post(`${API_URL}/api/customers/getCustomerByName`, { searchTerm }, { withCredentials: true });
    setCustomerSuggestions(data.customers);
  };
  useEffect(() => {
    setNewTicket({ ...newTicket, customerInfos: { ...customerInfos } });
  }, [customerInfos]);

  return (
    <div>
      <h2 className="p-5 font-semibold bg-gray-50 border-b">Kundendaten</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <div className="p-5 col-span-1 flex flex-col">
          <label htmlFor="" className="font-semibold">
            Müsteri Adi:
          </label>
          <div className="relative flex items-center">
            <input required onChange={handleInputChange} value={customerInfos?.customerName} type="text" name="customerName" className="w-full h-12 p-3 border focus:outline-none rounded-none focus:border-mblue-700" />
          </div>
          <div className={`relative z-50 ${customerSuggestionsPopup ? "" : "hidden"}`}>
            <ul className="absolute bg-white border-b border-x cursor-pointer drop-shadow-xl w-full">
              {customerSuggestions.map((customer) => {
                return (
                  <li
                    key={customer._id}
                    onClick={() => {
                      setCustomerSuggestionsPopup(false);
                      setCustomerInfos({ ...customer });
                    }}
                    className="hover:bg-mblue-200 duration-300 drop-shadow-xl p-3"
                  >
                    {customer.customerName}
                  </li>
                );
              })}
              {customerSuggestions.length === 0 && <li className="hover:bg-mblue-200 duration-300 drop-shadow-xl p-3">Kullanici Bulunamadi</li>}
            </ul>
          </div>
        </div>
        <div className="p-5 col-span-1 flex flex-col">
          <label htmlFor="" className="font-semibold">
            Adres:
          </label>
          <div className="relative flex items-center">
            <input onChange={handleInputChange} value={customerInfos?.customerAddress} type="text" name="customerAddress" className="w-full h-12 p-3 border focus:outline-none rounded-none focus:border-mblue-700" />
          </div>
        </div>
        <div className="p-5 col-span-1 flex flex-col">
          <label htmlFor="" className="font-semibold">
            Telefon:
          </label>
          <div className="relative flex items-center">
            <input onChange={handleInputChange} value={customerInfos?.customerPhone} type="text" name="customerPhone" className="w-full h-12 p-3 border focus:outline-none rounded-none focus:border-mblue-700" />
          </div>
        </div>
        <div className="p-5 col-span-1 flex flex-col">
          <label htmlFor="" className="font-semibold">
            E-Posta:
          </label>
          <div className="relative flex items-center">
            <input onChange={handleInputChange} value={customerInfos?.customerEmail} type="text" name="customerEmail" className="w-full h-12 p-3 border focus:outline-none rounded-none focus:border-mblue-700" />
          </div>
        </div>
        <div className="p-5 col-span-1 flex flex-col">
          <label htmlFor="" className="font-semibold">
            Iletisim Tercihleri
          </label>
          <div className="flex space-x-5">
            <div className="flex items-center space-x-2">
              <input key={`contactPreferenceWhatsapp${Math.random()}`} onChange={handleInputChange} checked={customerInfos?.contactPreferenceWhatsapp} type="checkbox" name="contactPreferenceWhatsapp" className="h-12 w-6" />
              <label htmlFor="">WhatsApp</label>
            </div>
            <div className="flex items-center space-x-2">
              <input key={`contactPreferenceSms${Math.random()}`} onChange={handleInputChange} checked={customerInfos?.contactPreferenceSms} type="checkbox" name="contactPreferenceSms" className="h-12 w-6" />
              <label htmlFor="">SMS</label>
            </div>
            <div className="flex items-center space-x-2">
              <input key={`contactPreferenceCall${Math.random()}`} onChange={handleInputChange} checked={customerInfos?.contactPreferenceCall} type="checkbox" name="contactPreferenceCall" className="h-12 w-6" />
              <label htmlFor="">Arama</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerInfos;
