import { useEffect, useState } from "react";
import { useDefinitions } from "../context/DefinitionsContext";

function DeviceInfos({ newTicket, setNewTicket }) {
  const initialDeviceModels = ["iPhone 15 Pro Max", "iPhone 15 Pro", "iPhone 15 Plus"];
  const [deviceInfos, setDeviceInfos] = useState({});

  const [deviceTypePopup, setDeviceTypePopup] = useState(false);
  const [deviceBrandPopup, setDeviceBrandPopup] = useState(false);
  const [deviceModelPopup, setDeviceModelPopup] = useState(false);
  const [deviceTypes, setDeviceTypes] = useState([]);
  const { deviceDefinitions } = useDefinitions();
  //   const handleDeviceTypeSelect = (deviceType) => {
  //     setDeviceInfos({ ...deviceInfos, deviceType: deviceType });
  //     setDeviceTypePopup(false);
  //   };
  //   const handleDeviceBrandSelect = (deviceBrand) => {
  //     setDeviceInfos({ ...deviceInfos, deviceBrand: deviceBrand });
  //     setDeviceBrandPopup(false);
  //   };
  //   const handleDeviceModelSelect = (deviceModel) => {
  //     setDeviceInfos({ ...deviceInfos, deviceModel: deviceModel });
  //     setDeviceModelPopup(false);
  //   };

  //   const handleDeviceDataChangeInputs = (e) => {
  //     setDeviceInfos({ ...deviceInfos, [e.target.name]: e.target.value });
  //   };

  const handleChange = (e) => {
    setDeviceInfos({ ...deviceInfos, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    setNewTicket({ ...newTicket, deviceInfos: { ...deviceInfos } });
    setDeviceTypePopup(false);
    setDeviceBrandPopup(false);
    setDeviceModelPopup(false);
  }, [deviceInfos]);
  useEffect(() => {
    const deviceTypeList = deviceDefinitions.map((item) => item);
    setDeviceTypes[deviceTypeList];
  }, []);
  return (
    <div>
      <h2 className="p-5 font-semibold bg-gray-50 border-y">Cihaz Bilgileri</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <div className="p-5 col-span-1 flex flex-col">
          <label htmlFor="" className="font-semibold">
            Cihaz:
          </label>
          <div className="relative flex items-center">
            <input type="text" name="deviceType" onChange={handleChange} value={deviceInfos.deviceType} className="w-full h-12 p-3 border focus:outline-none rounded-none focus:border-mblue-700" />
            <i onClick={() => setDeviceTypePopup(!deviceTypePopup)} className={`fa-solid fa-chevron-${deviceTypePopup ? "up" : "down"} absolute right-3 cursor-pointer`} />
          </div>
          <div className="relative">
            <ul className={`${deviceTypePopup ? "" : "hidden"} absolute bg-white border-b border-x cursor-pointer drop-shadow-xl w-full`}>
              {deviceTypes.map((item, index) => {
                return (
                  <li key={index} onClick={() => setDeviceInfos({ ...deviceInfos, deviceType: item })} className="hover:bg-mblue-200 duration-300 drop-shadow-xl p-3">
                    {item}
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
            <input type="text" name="deviceBrand" value={deviceInfos.deviceBrand} className="w-full h-12 p-3 border focus:outline-none rounded-none focus:border-mblue-700" />
            <i onClick={() => setDeviceBrandPopup(!deviceBrandPopup)} className={`fa-solid fa-chevron-${deviceBrandPopup ? "up" : "down"} absolute right-3 cursor-pointer`} />
          </div>
          <div className="relative">
            <ul className={`${deviceBrandPopup ? "" : "hidden"} absolute bg-white border-b border-x cursor-pointer drop-shadow-xl w-full`}>
              {deviceInfos.deviceType &&
                deviceDefinitions.map((deviceType, index) => {
                  deviceType.deviceType === deviceInfos.deviceType &&
                    deviceType.deviceBrands.map((deviceBrand) => {
                      return (
                        <li key={index} onClick={() => setDeviceInfos({ ...deviceInfos, deviceBrand: deviceBrand })} className="hover:bg-mblue-200 duration-300 drop-shadow-xl p-3">
                          {deviceBrand}
                        </li>
                      );
                    });
                })}
            </ul>
          </div>
        </div>
        <div className="p-5 col-span-1 flex flex-col">
          <label htmlFor="" className="font-semibold">
            Model:
          </label>
          <div className="relative flex items-center">
            <input type="text" name="deviceModel" value={deviceInfos.deviceModel} className="w-full h-12 p-3 border focus:outline-none rounded-none focus:border-mblue-700" />
            <i onClick={() => setDeviceModelPopup(!deviceModelPopup)} className={`fa-solid fa-chevron-${deviceModelPopup ? "up" : "down"} absolute right-3 cursor-pointer`} />
          </div>
          <div className="relative">
            <ul className={`${deviceModelPopup ? "" : "hidden"} absolute bg-white border-b border-x cursor-pointer drop-shadow-xl w-full`}>
              {initialDeviceModels.map((deviceModel, index) => {
                return (
                  <li key={index} onClick={() => setDeviceInfos({ ...deviceInfos, deviceModel: deviceModel })} className="hover:bg-mblue-200 duration-300 drop-shadow-xl p-3">
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
          <input onChange={handleChange} name="deviceSerial" type="text" className="h-12 p-3 border focus:outline-none rounded-none focus:border-mblue-700" />
        </div>
        <div className="p-5 col-span-1 flex flex-col">
          <label htmlFor="" className="font-semibold">
            IMEI No:
          </label>
          <input onChange={handleChange} name="deviceImei" type="text" className="h-12 p-3 border focus:outline-none rounded-none focus:border-mblue-700" />
        </div>
      </div>
    </div>
  );
}

export default DeviceInfos;
