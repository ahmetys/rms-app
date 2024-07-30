import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const initialDeviceTypes = ["Cep Telefonu", "Bilgisayar", "Tablet", "Oyun Konsolu"];
const initialDeviceBrands = ["Apple", "Samsung", "Huawei", "Xiaomi"];
const initialDeviceModels = ["iPhone 15 Pro Max", "iPhone 15 Pro", "iPhone 15 Plus"];
function NewTicket() {
  const API_URL = import.meta.env.VITE_API_URL;

  const [customerData, setCustomerData] = useState({});
  const [customerSuggestions, setCustomerSuggestions] = useState([]);
  const [customerSuggestionsPopup, setCustomerSuggestionsPopup] = useState(false);
  const [deviceData, setDeviceData] = useState({});
  const [deviceTypePopup, setDeviceTypePopup] = useState(false);
  const [deviceBrandPopup, setDeviceBrandPopup] = useState(false);
  const [deviceModelPopup, setDeviceModelPopup] = useState(false);
  const [serviceData, setServiceData] = useState({ serviceTypes: [], orderedParts: [], accessories: [] });
  const [serviceTypePopup, setServiceTypePopup] = useState(false);
  const navigate = useNavigate();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(customerData);
    console.log(deviceData);
  };
  const handleChangeInputs = (e) => {
    let newCustomer = {};
    if (e.target.type === "checkbox") {
      newCustomer = { ...customerData, [e.target.name]: e.target.checked };
    } else {
      newCustomer = { ...customerData, [e.target.name]: e.target.value };
    }
    setCustomerData(newCustomer);
    if (e.target.name === "customerName") {
      searchCustomer(e);
    }
    console.log(customerData);
  };
  const searchCustomer = async (e) => {
    //setSearchTerm(e.target.value);
    const searchTerm = e.target.value;
    if (searchTerm.length >= 3) {
      const response = await axios.post(`${API_URL}/api/customers/getCustomerByName`, { searchTerm }, { withCredentials: true });
      console.log(response.data);
      setCustomerSuggestions(response.data.customers);
      setCustomerSuggestionsPopup(true);
    } else {
      setCustomerSuggestionsPopup(false);
    }
  };
  const handleDeviceTypeSelect = (deviceType) => {
    setDeviceData({ ...deviceData, deviceType: deviceType });
    setDeviceTypePopup(false);
  };
  const handleDeviceBrandSelect = (deviceBrand) => {
    setDeviceData({ ...deviceData, deviceBrand: deviceBrand });
    setDeviceBrandPopup(false);
  };
  const handleDeviceModelSelect = (deviceModel) => {
    setDeviceData({ ...deviceData, deviceModel: deviceModel });
    setDeviceModelPopup(false);
  };

  const handleDeviceDataChangeInputs = (e) => {
    setDeviceData({ ...deviceData, [e.target.name]: e.target.value });
  };

  const handleServiceTypesSelect = (serviceType) => {
    if (!serviceData.serviceTypes.includes(serviceType)) {
      setServiceData({ ...serviceData, serviceTypes: [...serviceData.serviceTypes, serviceType] });
    }
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
        <div>
          <h2 className="p-5 font-semibold bg-gray-50 border-b">Müsteri Bilgileri</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            <div className="p-5 col-span-1 flex flex-col">
              <label htmlFor="" className="font-semibold">
                Müsteri Adi:
              </label>
              <div className="relative flex items-center">
                <input required onChange={handleChangeInputs} value={customerData?.customerName} type="text" name="customerName" className="w-full h-12 p-3 border focus:outline-none rounded-none focus:border-mblue-700" />
              </div>
              <div className={`relative z-50 ${customerSuggestionsPopup ? "" : "hidden"}`}>
                <ul className="absolute bg-white border-b border-x cursor-pointer drop-shadow-xl w-full">
                  {customerSuggestions.map((customer) => {
                    return (
                      <li
                        key={customer._id}
                        onClick={() => {
                          setCustomerSuggestionsPopup(false);
                          setCustomerData({ ...customer });
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
                <input onChange={handleChangeInputs} value={customerData?.customerAddress} type="text" name="customerAddress" className="w-full h-12 p-3 border focus:outline-none rounded-none focus:border-mblue-700" />
              </div>
            </div>
            <div className="p-5 col-span-1 flex flex-col">
              <label htmlFor="" className="font-semibold">
                Telefon:
              </label>
              <div className="relative flex items-center">
                <input onChange={handleChangeInputs} value={customerData?.customerPhone} type="text" name="customerPhone" className="w-full h-12 p-3 border focus:outline-none rounded-none focus:border-mblue-700" />
              </div>
            </div>
            <div className="p-5 col-span-1 flex flex-col">
              <label htmlFor="" className="font-semibold">
                E-Posta:
              </label>
              <div className="relative flex items-center">
                <input onChange={handleChangeInputs} value={customerData?.customerEmail} type="text" name="customerEmail" className="w-full h-12 p-3 border focus:outline-none rounded-none focus:border-mblue-700" />
              </div>
            </div>
            <div className="p-5 col-span-1 flex flex-col">
              <label htmlFor="" className="font-semibold">
                Iletisim Tercihleri
              </label>
              <div className="flex space-x-5">
                <div className="flex items-center space-x-2">
                  <input key={`contactPreferenceWhatsapp${Math.random()}`} onChange={handleChangeInputs} checked={customerData?.contactPreferenceWhatsapp} type="checkbox" name="contactPreferenceWhatsapp" className="h-12 w-6" />
                  <label htmlFor="">WhatsApp</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input key={`contactPreferenceSms${Math.random()}`} onChange={handleChangeInputs} checked={customerData?.contactPreferenceSms} type="checkbox" name="contactPreferenceSms" className="h-12 w-6" />
                  <label htmlFor="">SMS</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input key={`contactPreferenceCall${Math.random()}`} onChange={handleChangeInputs} checked={customerData?.contactPreferenceCall} type="checkbox" name="contactPreferenceCall" className="h-12 w-6" />
                  <label htmlFor="">Arama</label>
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
                  <input type="text" name="deviceType" value={deviceData.deviceType} className="w-full h-12 p-3 border focus:outline-none rounded-none focus:border-mblue-700" />
                  <i onClick={() => setDeviceTypePopup(!deviceTypePopup)} className={`fa-solid fa-chevron-${deviceTypePopup ? "up" : "down"} absolute right-3 cursor-pointer`} />
                </div>
                <div className="relative">
                  <ul className={`${deviceTypePopup ? "" : "hidden"} absolute bg-white border-b border-x cursor-pointer drop-shadow-xl w-full`}>
                    {initialDeviceTypes.map((deviceType, index) => {
                      return (
                        <li key={index} onClick={() => handleDeviceTypeSelect(deviceType)} className="hover:bg-mblue-200 duration-300 drop-shadow-xl p-3">
                          {deviceType}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="p-5 col-span-1 flex flex-col">
                <label htmlFor="" className="font-semibold">
                  Marka:
                </label>
                <div className="relative flex items-center">
                  <input type="text" name="deviceBrand" value={deviceData.deviceBrand} className="w-full h-12 p-3 border focus:outline-none rounded-none focus:border-mblue-700" />
                  <i onClick={() => setDeviceBrandPopup(!deviceBrandPopup)} className={`fa-solid fa-chevron-${deviceBrandPopup ? "up" : "down"} absolute right-3 cursor-pointer`} />
                </div>
                <div className="relative">
                  <ul className={`${deviceBrandPopup ? "" : "hidden"} absolute bg-white border-b border-x cursor-pointer drop-shadow-xl w-full`}>
                    {initialDeviceBrands.map((deviceBrand, index) => {
                      return (
                        <li key={index} onClick={() => handleDeviceBrandSelect(deviceBrand)} className="hover:bg-mblue-200 duration-300 drop-shadow-xl p-3">
                          {deviceBrand}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="p-5 col-span-1 flex flex-col">
                <label htmlFor="" className="font-semibold">
                  Model:
                </label>
                <div className="relative flex items-center">
                  <input type="text" name="deviceModel" value={deviceData.deviceModel} className="w-full h-12 p-3 border focus:outline-none rounded-none focus:border-mblue-700" />
                  <i onClick={() => setDeviceModelPopup(!deviceModelPopup)} className={`fa-solid fa-chevron-${deviceModelPopup ? "up" : "down"} absolute right-3 cursor-pointer`} />
                </div>
                <div className="relative">
                  <ul className={`${deviceModelPopup ? "" : "hidden"} absolute bg-white border-b border-x cursor-pointer drop-shadow-xl w-full`}>
                    {initialDeviceModels.map((deviceModel, index) => {
                      return (
                        <li key={index} onClick={() => handleDeviceModelSelect(deviceModel)} className="hover:bg-mblue-200 duration-300 drop-shadow-xl p-3">
                          {deviceModel}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="p-5 col-span-1 flex flex-col">
                <label htmlFor="" className="font-semibold">
                  Seri No:
                </label>
                <input onChange={handleDeviceDataChangeInputs} name="deviceSerial" type="text" className="h-12 p-3 border focus:outline-none rounded-none focus:border-mblue-700" />
              </div>
              <div className="p-5 col-span-1 flex flex-col">
                <label htmlFor="" className="font-semibold">
                  IMEI No:
                </label>
                <input onChange={handleDeviceDataChangeInputs} name="deviceImei" type="text" className="h-12 p-3 border focus:outline-none rounded-none focus:border-mblue-700" />
              </div>
            </div>
          </div>

          <div>
            <h2 className="p-5 font-semibold bg-gray-50 border-y">Servis Bilgileri</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              <div className="p-5 col-span-1 flex flex-col">
                <label htmlFor="" className="font-semibold">
                  Islem:
                </label>
                <div className="relative flex items-center">
                  <div className="w-full min-h-12 py-2 pr-5 pl-3 border space-y-1 space-x-1">
                    {serviceData.serviceTypes.map((serviceType, index) => {
                      return (
                        <span key={index} className="inline-flex space-x-2 cursor-pointer items-center rounded-md hover:drop-shadow-md duration-300 bg-mblue-200 px-2 py-1 text-sm font-medium text-mblue-950 ring-1 ring-inset ring-mblue-600">
                          <span>{serviceType} </span>
                          <i className="fa-solid fa-xmark" />
                        </span>
                      );
                    })}
                  </div>
                  <i onClick={() => setServiceTypePopup(!serviceTypePopup)} className="fa-solid fa-chevron-down absolute right-3 cursor-pointer" />
                </div>
                <div className="relative">
                  <ul className={`${serviceTypePopup ? "" : "hidden"} absolute z-10 bg-white border-b border-x cursor-pointer drop-shadow-xl w-full`}>
                    <li className="p-2">
                      <input type="text" className="w-full h-12 p-3 border focus:outline-none rounded-none" placeholder="Ariza girin" />
                    </li>
                    <li onClick={() => handleServiceTypesSelect("Ekran Degisimi")} className="hover:bg-mblue-200 duration-300 drop-shadow-xl p-3">
                      Ekran Degisimi
                    </li>
                    <li onClick={() => handleServiceTypesSelect("Pil Degisimi")} className="hover:bg-mblue-200 duration-300 drop-shadow-xl p-3">
                      Pil Degisimi
                    </li>
                    <li onClick={() => handleServiceTypesSelect("Kapak Degisimi")} className="hover:bg-mblue-200 duration-300 drop-shadow-xl p-3">
                      Ariza Tarama
                    </li>
                  </ul>
                </div>
              </div>
              <div className="p-5 col-span-1 flex flex-col">
                <label htmlFor="" className="font-semibold">
                  Siparis Edilecek Parca:
                </label>
                <div className="relative flex items-center">
                  <div className="w-full min-h-12 py-2 pr-5 pl-3 border space-y-1">
                    <span className="inline-flex space-x-2 cursor-pointer items-center rounded-md hover:drop-shadow-md duration-300 bg-mblue-200 px-2 py-1 text-sm font-medium text-mblue-950 ring-1 ring-inset ring-mblue-600">
                      <span>Ekran </span>
                      <i className="fa-solid fa-xmark" />
                    </span>
                  </div>
                  <i className="fa-solid fa-chevron-down absolute right-3 cursor-pointer" />
                </div>
                <div className="relative">
                  <ul className="hidden absolute z-10 bg-white border-b border-x cursor-pointer drop-shadow-xl w-full">
                    <li className="p-2">
                      <input type="text" className="w-full h-12 p-3 border focus:outline-none" placeholder="Aksesuar girin" />
                    </li>
                    <li className="hover:bg-mblue-200 duration-300 drop-shadow-xl p-3">Ekran</li>
                    <li className="hover:bg-mblue-200 duration-300 drop-shadow-xl p-3">Pil</li>
                    <li className="hover:bg-mblue-200 duration-300 drop-shadow-xl p-3">Sarj Soketi</li>
                  </ul>
                </div>
              </div>
              <div className="p-5 col-span-1 flex flex-col">
                <label htmlFor="" className="font-semibold">
                  Aksesuar:
                </label>
                <div className="relative flex items-center">
                  <div className="w-full min-h-12 py-2 pr-5 pl-3 border space-y-1">
                    <span className="inline-flex space-x-2 cursor-pointer items-center rounded-md hover:drop-shadow-md duration-300 bg-mblue-200 px-2 py-1 text-sm font-medium text-mblue-950 ring-1 ring-inset ring-mblue-600">
                      <span>Canta </span>
                      <i className="fa-solid fa-xmark" />
                    </span>
                  </div>
                  <i className="fa-solid fa-chevron-down absolute right-3 cursor-pointer" />
                </div>
                <div className="relative">
                  <ul className="hidden absolute z-10 bg-white border-b border-x cursor-pointer drop-shadow-xl w-full">
                    <li className="p-2">
                      <input type="text" className="w-full h-12 p-3 border focus:outline-none rounded-none" placeholder="Aksesuar girin" />
                    </li>
                    <li className="hover:bg-mblue-200 duration-300 drop-shadow-xl p-3">Canta</li>
                    <li className="hover:bg-mblue-200 duration-300 drop-shadow-xl p-3">Sarj Aleti</li>
                    <li className="hover:bg-mblue-200 duration-300 drop-shadow-xl p-3">Klavye</li>
                  </ul>
                </div>
              </div>
              <div className="p-5 col-span-1 flex flex-col">
                <label htmlFor="" className="font-semibold">
                  Not:
                </label>
                <div className="relative flex items-center">
                  <textarea type="text" className="w-full p-3 border focus:outline-none no-scrollbar rounded-none focus:border-mblue-700" defaultValue={""} />
                </div>
              </div>
              <div className="p-5 col-span-1 flex justify-between space-x-10">
                <div className="flex flex-col w-full">
                  <label htmlFor="" className="font-semibold">
                    Teslimat Tarihi:
                  </label>
                  <div className="relative flex items-center">
                    <input type="date" className="w-full h-12 p-3 border focus:outline-none rounded-none focus:border-mblue-700" />
                    {/* <span class="inline-block border-y border-r bg-mblue-50 font-semibold text-xl h-full p-2 items-center">€</span> */}
                  </div>
                </div>
                <div className="flex w-full flex-col">
                  <label htmlFor="" className="font-semibold">
                    Teslimat Saati:
                  </label>
                  <div className="relative flex items-center">
                    <input type="time" className="w-full h-12 p-3 border focus:outline-none rounded-none focus:border-mblue-700" />
                    {/* <span class="inline-block border-y border-r bg-mblue-50 font-semibold text-xl h-full p-2 items-center">h</span> */}
                  </div>
                  <div className="relative">
                    <ul className="hidden absolute z-10 bg-white border-b border-x cursor-pointer drop-shadow-xl w-full">
                      <li className="p-2">
                        <input type="text" className="w-full h-12 p-3 border focus:outline-none rounded-none" placeholder="Süre girin" />
                      </li>
                      <li className="hover:bg-mblue-200 duration-300 drop-shadow-xl p-3">00:30</li>
                      <li className="hover:bg-mblue-200 duration-300 drop-shadow-xl p-3">01:00</li>
                      <li className="hover:bg-mblue-200 duration-300 drop-shadow-xl p-3">01:30</li>
                      <li className="hover:bg-mblue-200 duration-300 drop-shadow-xl p-3">02:00</li>
                      <li className="hover:bg-mblue-200 duration-300 drop-shadow-xl p-3">02:30</li>
                      <li className="hover:bg-mblue-200 duration-300 drop-shadow-xl p-3">03:00</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="p-5 col-span-1 flex flex-col">
                <div className="flex justify-between border-b mb-2">
                  <div className="basis-4/5">
                    <span className="font-semibold">Islem</span>
                  </div>
                  <div className="basis-1/5">
                    <span className="font-semibold">Tutar</span>
                  </div>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <div className="basis-4/5">
                    <span className="">Ekran Degisimi</span>
                  </div>
                  <div className="basis-1/5 flex">
                    <input type="text" className="w-20 px-2 py-1 border focus:outline-none rounded-none focus:border-mblue-700" defaultValue={80.0} />
                    <span className="inline-block border-y border-r bg-mblue-50 font-semibold text-lg px-2 py-1 items-center">€</span>
                  </div>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <div className="basis-4/5">
                    <span className="">Pil Degisimi</span>
                  </div>
                  <div className="basis-1/5 flex">
                    <input type="text" className="w-20 px-2 py-1 border focus:outline-none rounded-none focus:border-mblue-700" defaultValue={100.0} />
                    <span className="inline-block border-y border-r bg-mblue-50 font-semibold text-lg px-2 py-1 items-center">€</span>
                  </div>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <div className="basis-4/5">
                    <span className="font-semibold text-green-600">Indirim</span>
                  </div>
                  <div className="basis-1/5 flex">
                    <input type="text" className="w-20 px-2 py-1 border focus:outline-none rounded-none focus:border-mblue-700" defaultValue={0.0} />
                    <span className="inline-block border-y border-r bg-mblue-50 font-semibold text-lg px-2 py-1 items-center">€</span>
                  </div>
                </div>
                <div className="flex justify-between border-t pt-2">
                  <div className="basis-4/5">
                    <span className="font-semibold text-lg text-red-600">Toplam</span>
                  </div>
                  <div className="basis-1/5 flex">
                    <input type="text" className="w-20 px-2 py-1 border focus:outline-none font-semibold text-lg text-red-600 rounded-none focus:border-mblue-700" defaultValue={180.0} disabled="" />
                    <span className="inline-block border-y border-r bg-mblue-50 font-semibold text-lg px-2 py-1 items-center">€</span>
                  </div>
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

export default NewTicket;
