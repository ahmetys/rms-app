import { useEffect, useState } from "react";
import axios from "axios";
function ServiceInfos({ newTicket, setNewTicket }) {
  const API_URL = import.meta.env.VITE_API_URL;
  const [serviceInfos, setServiceInfos] = useState({ serviceTypes: [] });
  const [serviceTypePopup, setServiceTypePopup] = useState(false);
  const [serviceList, setServiceList] = useState([]);
  const [total, setTotal] = useState(0);
  const handleServiceTypesSelect = (serviceType) => {
    const checkServiceType = serviceInfos.serviceTypes.filter((item) => item.serviceType === serviceType);
    console.log(checkServiceType);

    if (checkServiceType.length === 0) {
      setServiceInfos({ ...serviceInfos, serviceTypes: [...serviceInfos.serviceTypes, { serviceType: serviceType, estimatedCost: 0 }] });
      setServiceTypePopup(false);
    }
  };
  const handleChange = (e, serviceType) => {
    if (e.target.name === "estimatedDeliveryDate" || e.target.name === "estimatedDeliveryTime" || e.target.name === "serviceNotes") {
      setServiceInfos({ ...serviceInfos, [e.target.name]: e.target.value });
    } else {
      let total = 0;
      const newServiceTypes = serviceInfos.serviceTypes.map((item) => {
        if (item.serviceType === serviceType) {
          item.estimatedCost = Number(e.target.value);
          total += Number(item.estimatedCost);
          setTotal(total);
          console.log(total);

          return item;
        } else {
          total += Number(item.estimatedCost);
          setTotal(total);
          return item;
        }
      });
      setServiceInfos({ ...serviceInfos, serviceTypes: newServiceTypes });
    }
  };
  useEffect(() => {
    setNewTicket({ ...newTicket, serviceInfos: { ...serviceInfos } });
  }, [serviceInfos]);
  useEffect(() => {
    const getServiceList = async () => {
      const response = await axios.get(`${API_URL}/api/services/getServiceList`, { withCredentials: true });
      console.log(response.data);
      setServiceList([...response.data]);
    };
    getServiceList();
  }, []);
  return (
    <div>
      <h2 className="p-5 font-semibold bg-gray-50 border-y">Servis Bilgileri</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <div className="p-5 col-span-1 flex flex-col">
          <label htmlFor="" className="font-semibold">
            Islem:
          </label>
          <div className="relative flex items-center">
            <div className="w-full min-h-12 py-2 pr-5 pl-3 border space-y-1 space-x-1">
              {serviceInfos.serviceTypes.map((serviceType, index) => {
                return (
                  <span key={index} className="inline-flex space-x-2 cursor-pointer items-center rounded-md hover:drop-shadow-md duration-300 bg-mblue-200 px-2 py-1 text-sm font-medium text-mblue-950 ring-1 ring-inset ring-mblue-600">
                    <span>{serviceType.serviceType} </span>
                    <i className="fa-solid fa-xmark" />
                  </span>
                );
              })}
            </div>
            <i onClick={() => setServiceTypePopup(!serviceTypePopup)} className="fa-solid fa-chevron-down absolute right-3 cursor-pointer" />
          </div>
          <div className="relative">
            <ul className={`${serviceTypePopup ? "" : "hidden"} absolute z-10 bg-white border-b border-x cursor-pointer drop-shadow-xl w-full`}>
              {serviceList.map((item, index) => {
                return (
                  <li key={index} onClick={() => handleServiceTypesSelect(item.serviceType)} className="hover:bg-mblue-200 duration-300 drop-shadow-xl p-3">
                    {item.serviceType}
                  </li>
                );
              })}
              {/* <li className="p-2">
                <input type="text" className="w-full h-12 p-3 border focus:outline-none rounded-none" placeholder="Ariza girin" />
              </li>               */}
            </ul>
          </div>
        </div>
        {/* <div className="p-5 col-span-1 flex flex-col">
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
        </div> */}
        {/* <div className="p-5 col-span-1 flex flex-col">
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
        </div> */}
        {/* <div className="p-5 col-span-1 flex justify-between space-x-10">
          <div className="flex flex-col w-full">
            <label htmlFor="" className="font-semibold">
              Teslimat Tarihi:
            </label>
            <div className="relative flex items-center">
              <input type="date" className="w-full h-12 p-3 border focus:outline-none rounded-none focus:border-mblue-700" />
            </div>
          </div>
          <div className="flex w-full flex-col">
            <label htmlFor="" className="font-semibold">
              Teslimat Saati:
            </label>
            <div className="relative flex items-center">
              <input type="time" className="w-full h-12 p-3 border focus:outline-none rounded-none focus:border-mblue-700" />
            </div>
          </div>
        </div> */}
        <div className="p-5 col-span-1 flex flex-col">
          <div className="flex justify-between border-b mb-2">
            <div className="basis-4/5">
              <span className="font-semibold">Islem</span>
            </div>
            <div className="basis-1/5">
              <span className="font-semibold">Tutar</span>
            </div>
          </div>
          {serviceInfos.serviceTypes.map((item, index) => {
            return (
              <div key={index} className="flex justify-between items-center mb-2">
                <div className="basis-4/5">
                  <span className="">{item.serviceType}</span>
                </div>
                <div className="basis-1/5 flex">
                  <input onChange={(e) => handleChange(e, item.serviceType)} type="text" className="w-20 px-2 py-1 border focus:outline-none rounded-none focus:border-mblue-700" defaultValue={item.estimatedCost} />
                  <span className="inline-block border-y border-r bg-mblue-50 font-semibold text-lg px-2 py-1 items-center">€</span>
                </div>
              </div>
            );
          })}

          <div className="flex justify-between border-t pt-2">
            <div className="basis-4/5">
              <span className="font-semibold text-lg text-red-600">Toplam</span>
            </div>
            <div className="basis-1/5 flex">
              <input type="text" className="w-20 px-2 py-1 border focus:outline-none font-semibold text-lg text-red-600 rounded-none focus:border-mblue-700" value={total} disabled="" />
              <span className="inline-block border-y border-r bg-mblue-50 font-semibold text-lg px-2 py-1 items-center">€</span>
            </div>
          </div>
        </div>
        <div className="p-5 col-span-1 flex flex-col">
          <div className="mb-2 col-span-1 flex justify-between space-x-10">
            <div className="flex flex-col w-full">
              <label htmlFor="" className="font-semibold">
                Teslimat Tarihi:
              </label>
              <div className="relative flex items-center">
                <input onChange={handleChange} name="estimatedDeliveryDate" type="date" className="w-full h-12 p-3 border focus:outline-none rounded-none focus:border-mblue-700" />
                {/* <span class="inline-block border-y border-r bg-mblue-50 font-semibold text-xl h-full p-2 items-center">€</span> */}
              </div>
            </div>
            <div className="flex w-full flex-col">
              <label htmlFor="" className="font-semibold">
                Teslimat Saati:
              </label>
              <div className="relative flex items-center">
                <input onChange={handleChange} name="estimatedDeliveryTime" type="time" className="w-full h-12 p-3 border focus:outline-none rounded-none focus:border-mblue-700" />
                {/* <span class="inline-block border-y border-r bg-mblue-50 font-semibold text-xl h-full p-2 items-center">h</span> */}
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="" className="font-semibold">
              Not:
            </label>
            <div className="relative flex items-center">
              <textarea onChange={handleChange} name="serviceNotes" type="text" className="w-full p-3 border focus:outline-none no-scrollbar rounded-none focus:border-mblue-700" defaultValue={""} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceInfos;
