import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

function NewCustomer() {
  const [customerData, setCustomerData] = useState({});
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/customers/createCustomer", { ...customerData }, { withCredentials: true });
      e.target.reset();
      setCustomerData({});
      toast.success("Müsteri eklendi");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleChangeInputs = (e) => {
    let newCustomer = {};
    if (e.target.type === "checkbox") {
      newCustomer = { ...customerData, [e.target.name]: e.target.checked };
    } else {
      newCustomer = { ...customerData, [e.target.name]: e.target.value };
    }
    setCustomerData(newCustomer);
    console.log(customerData);
  };
  return (
    <section id="yeni-servis-fisi" className="border drop-shadow-xl bg-white rounded mb-5">
      {/*Yeni Müsteri Header*/}
      <div className="p-5 bg-gray-50 border-b">
        <h1 className="text-4xl font-semibold">Yeni Müsteri Ekle</h1>
      </div>
      {/*Yeni Müsteri Body*/}
      <form onSubmit={handleFormSubmit}>
        <div>
          <h2 className="p-5 font-semibold bg-gray-50 border-b">Müsteri Bilgileri</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            <div className="p-5 col-span-1 flex flex-col">
              <label htmlFor="" className="font-semibold">
                Müsteri Adi:
              </label>
              <div className="relative flex items-center">
                <input required onChange={handleChangeInputs} type="text" name="customerName" className="w-full h-12 p-3 border focus:outline-none rounded-none focus:border-mblue-700" />
              </div>
              <div className="hidden relative">
                <ul className="absolute bg-white border-b border-x cursor-pointer drop-shadow-xl w-full">
                  <li className="hover:bg-mblue-200 duration-300 drop-shadow-xl p-3">Ahmet Yurtsever</li>
                  <li className="hover:bg-mblue-200 duration-300 drop-shadow-xl p-3">Ahmet ...</li>
                  <li className="hover:bg-mblue-200 duration-300 drop-shadow-xl p-3">Ahmet ..</li>
                </ul>
              </div>
            </div>
            <div className="p-5 col-span-1 flex flex-col">
              <label htmlFor="" className="font-semibold">
                Adres:
              </label>
              <div className="relative flex items-center">
                <input onChange={handleChangeInputs} type="text" name="customerAddress" className="w-full h-12 p-3 border focus:outline-none rounded-none focus:border-mblue-700" />
              </div>
            </div>
            <div className="p-5 col-span-1 flex flex-col">
              <label htmlFor="" className="font-semibold">
                Telefon:
              </label>
              <div className="relative flex items-center">
                <input onChange={handleChangeInputs} type="text" name="customerPhone" className="w-full h-12 p-3 border focus:outline-none rounded-none focus:border-mblue-700" />
              </div>
            </div>
            <div className="p-5 col-span-1 flex flex-col">
              <label htmlFor="" className="font-semibold">
                E-Posta:
              </label>
              <div className="relative flex items-center">
                <input onChange={handleChangeInputs} type="text" name="customerEmail" className="w-full h-12 p-3 border focus:outline-none rounded-none focus:border-mblue-700" />
              </div>
            </div>
            <div className="p-5 col-span-1 flex flex-col">
              <label htmlFor="" className="font-semibold">
                Iletisim Tercihleri
              </label>
              <div className="flex space-x-5">
                <div className="flex items-center space-x-2">
                  <input onChange={handleChangeInputs} type="checkbox" name="contactPreferenceWhatsapp" className="h-12 w-6" />
                  <label htmlFor="">WhatsApp</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input onChange={handleChangeInputs} type="checkbox" name="contactPreferenceSms" className="h-12 w-6" />
                  <label htmlFor="">SMS</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input onChange={handleChangeInputs} type="checkbox" name="contactPreferenceCall" className="h-12 w-6" />
                  <label htmlFor="">Arama</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Yeni Servis  Fisi Footer*/}
        <div className="p-5 bg-gray-50 border-t flex justify-end">
          <button className="cursor-pointer w-full md:w-auto h-12 p-3 text-white bg-mblue-500 hover:bg-mblue-600 duration-300 drop-shadow-xl">Kaydet</button>
        </div>
      </form>
    </section>
  );
}

export default NewCustomer;
