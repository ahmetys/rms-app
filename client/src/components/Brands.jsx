import { useState } from "react";
import { useDefinitions } from "../context/DefinitionsContext";

function Brands() {
  const [deviceTypesPopup, setDeviceTypesPopup] = useState(false);
  const [selectedDeviceType, setSelectedDeviceType] = useState({});
  const { deviceTypes } = useDefinitions();
  const handleOnClick = () => {
    console.log("asd");
    console.log(selectedDeviceType);
    setSelectedDeviceType({ deviceType: "asd" });
  };
  const selectDeviceType = (deviceType) => {
    setSelectedDeviceType({ ...deviceType });
    setDeviceTypesPopup(false);
  };
  return (
    <div className="col-span-12 md:col-span-6 border drop-shadow-xl bg-white rounded">
      <div className="p-5 bg-gray-50 border-b grid grid-cols-5 justify-between items-center relative">
        <h1 className="col-span-4 text-xl font-semibold">Cihaz Markalari</h1>
      </div>
      <div className="p-5 col-span-1 flex flex-col">
        <label htmlFor="" className="font-semibold">
          Cihaz Türleri:
        </label>
        <div className="relative flex items-center">
          <input type="text" value={selectedDeviceType.deviceType} onFocus={() => setDeviceTypesPopup(true)} placeholder="Cihaz türünü secin" name="deviceType" className="w-full h-12 p-3 border focus:outline-none rounded-none focus:border-mblue-700" />
          <i onClick={() => setDeviceTypesPopup(!deviceTypesPopup)} className={`fa-solid fa-chevron-${deviceTypesPopup ? "up" : "down"} absolute right-3 cursor-pointer`} />
        </div>
        <div className="relative">
          <ul className={`${deviceTypesPopup ? "" : "hidden"} absolute z-10 bg-white border-b border-x cursor-pointer drop-shadow-xl w-full`}>
            <li className="p-2">
              <input type="text" className="w-full h-12 p-3 border focus:outline-none rounded-none" placeholder="Ariza girin" />
            </li>
            {deviceTypes.map((deviceType) => {
              return (
                <li onClick={() => selectDeviceType(deviceType)} key={deviceType._id} className="hover:bg-mblue-200 duration-300 drop-shadow-xl p-3">
                  {deviceType.deviceType}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="p-5 bg-gray-50 border-t flex justify-end"></div>
    </div>
  );
}

export default Brands;
