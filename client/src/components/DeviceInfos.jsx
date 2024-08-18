import { useEffect, useState } from "react";
import { useDefinitions } from "../context/DefinitionsContext";

function DeviceInfos({ newTicket, setNewTicket }) {
  const { deviceDefinitions } = useDefinitions();
  const [deviceInfos, setDeviceInfos] = useState({});
  const [deviceTypes, setDeviceTypes] = useState([]);
  const [deviceBrands, setDeviceBrands] = useState([]);
  const [deviceModels, setDeviceModels] = useState([]);

  const handleChange = (e) => {
    if (e.target.name === "deviceType") {
      deviceDefinitions.map((item) => {
        if (item.deviceType === e.target.value) {
          setDeviceBrands(item.deviceBrands.map((item) => item.deviceBrand));
        }
      });
      setDeviceModels([]);
    } else if (e.target.name === "deviceBrand") {
      deviceDefinitions.map((item) => {
        if (item.deviceType === deviceInfos.deviceType) {
          item.deviceBrands.map((db) => {
            if (db.deviceBrand === e.target.value) {
              setDeviceModels(db.deviceModels.map((item) => item.deviceModel));
            }
          });
        }
      });
    }
    setDeviceInfos({ ...deviceInfos, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    setNewTicket({ ...newTicket, deviceInfos: { ...deviceInfos } });
  }, [deviceInfos]);
  useEffect(() => {
    setDeviceTypes(deviceDefinitions.map((item) => item.deviceType));
  }, []);
  return (
    <div>
      <h2 className="p-5 font-semibold bg-gray-50 border-y">Cihaz Bilgileri</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <div className="p-5 col-span-1 flex flex-col">
          <label htmlFor="" className="font-semibold">
            Cihaz:
          </label>
          <select onChange={handleChange} name="deviceType" className="w-full h-12 p-3 border focus:outline-none rounded-none focus:border-mblue-700">
            <option>Secim yapin</option>
            {deviceTypes.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        <div className="p-5 col-span-1 flex flex-col">
          <label htmlFor="" className="font-semibold">
            Marka:
          </label>
          <select onChange={handleChange} name="deviceBrand" className="w-full h-12 p-3 border focus:outline-none rounded-none focus:border-mblue-700">
            <option>Secim yapin</option>
            {deviceBrands.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        <div className="p-5 col-span-1 flex flex-col">
          <label htmlFor="" className="font-semibold">
            Model:
          </label>
          <select onChange={handleChange} name="deviceModel" className="w-full h-12 p-3 border focus:outline-none rounded-none focus:border-mblue-700">
            <option>Secim yapin</option>
            {deviceModels.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
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
