import { useEffect, useState } from "react";
import { useDefinitions } from "../context/DefinitionsContext";

function DeviceInfos({ newTicket, setNewTicket }) {
  const { deviceDefinitions } = useDefinitions();
  const [deviceInfos, setDeviceInfos] = useState({});
  const [deviceTypes, setDeviceTypes] = useState([]);
  const [deviceBrands, setDeviceBrands] = useState([]);
  const [deviceModels, setDeviceModels] = useState([]);

  const handleInputChange = (e) => {
    if (e.target.name === "deviceType") {
      deviceDefinitions.map((dt) => {
        if (dt.deviceType === e.target.value) {
          setDeviceBrands(dt.deviceBrands.map((db) => db.deviceBrand));
        }
      });
      setDeviceModels([]);
    } else if (e.target.name === "deviceBrand") {
      deviceDefinitions.map((dt) => {
        if (dt.deviceType === deviceInfos.deviceType) {
          dt.deviceBrands.map((db) => {
            if (db.deviceBrand === e.target.value) {
              setDeviceModels(db.deviceModels.map((dm) => dm.deviceModel));
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
      <h2 className="p-5 font-semibold bg-gray-50 border-y">Gerätedaten</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <div className="p-5 col-span-1 flex flex-col">
          <label htmlFor="" className="font-semibold">
            Gerät:
          </label>
          <select onChange={handleInputChange} name="deviceType" className="w-full h-12 p-3 border focus:outline-none rounded-none focus:border-mblue-700">
            <option>Auswählen</option>
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
            Marke:
          </label>
          <select onChange={handleInputChange} name="deviceBrand" className="w-full h-12 p-3 border focus:outline-none rounded-none focus:border-mblue-700">
            <option>Auswählen</option>
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
            Modell:
          </label>
          <select onChange={handleInputChange} name="deviceModel" className="w-full h-12 p-3 border focus:outline-none rounded-none focus:border-mblue-700">
            <option>Auswählen</option>
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
            Seriennummer:
          </label>
          <input onChange={handleInputChange} name="deviceSerial" type="text" className="h-12 p-3 border focus:outline-none rounded-none focus:border-mblue-700" />
        </div>
        <div className="p-5 col-span-1 flex flex-col">
          <label htmlFor="" className="font-semibold">
            IMEI Nummer:
          </label>
          <input onChange={handleInputChange} name="deviceImei" type="text" className="h-12 p-3 border focus:outline-none rounded-none focus:border-mblue-700" />
        </div>
      </div>
    </div>
  );
}

export default DeviceInfos;
