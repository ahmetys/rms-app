import { useState } from "react";

function ServiceInfos() {
  const [serviceData, setServiceData] = useState({ serviceTypes: [], orderedParts: [], accessories: [] });
  const [serviceTypePopup, setServiceTypePopup] = useState(false);
  const handleServiceTypesSelect = (serviceType) => {
    if (!serviceData.serviceTypes.includes(serviceType)) {
      setServiceData({ ...serviceData, serviceTypes: [...serviceData.serviceTypes, serviceType] });
    }
  };
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
  );
}

export default ServiceInfos;
