import { useState } from "react";
import { useDefinitions } from "../context/DefinitionsContext";

function DeviceTypeSelect({ deviceBrand, setDeviceBrand }) {
  const [deviceTypesPopup, setDeviceTypesPopup] = useState(false);
  const { deviceTypes, getDeviceBrandsByDeviceType } = useDefinitions();
  const selectDeviceType = (deviceType) => {
    setDeviceBrand({ ...deviceBrand, deviceTypeId: deviceType._id, deviceType: deviceType.deviceType });
    setDeviceTypesPopup(false);
    getDeviceBrandsByDeviceType(deviceType._id);
    // setDeviceBrandsBySelectedDeviceType(
    //   deviceBrands.filter((item) => {
    //     return item.deviceTypeId === deviceType._id;
    //   })
    // );
  };
  return (
    <div className="px-5 py-2 col-span-1 flex flex-col">
      <div className="relative flex items-center">
        <input type="text" value={deviceBrand.deviceType} required={true} onFocus={() => setDeviceTypesPopup(true)} placeholder="Cihaz türünü secin" name="deviceType" className="w-full h-12 p-3 border focus:outline-none rounded-none focus:border-mblue-700" />
        <i onClick={() => setDeviceTypesPopup(!deviceTypesPopup)} className={`fa-solid fa-chevron-${deviceTypesPopup ? "up" : "down"} absolute right-3 cursor-pointer`} />
      </div>
      <div className="relative">
        <ul className={`${deviceTypesPopup ? "" : "hidden"} absolute z-50 bg-white border-b border-x cursor-pointer drop-shadow-xl w-full`}>
          {/* <li className="p-2">
                  <input type="text" className="w-full h-12 p-3 border focus:outline-none rounded-none" placeholder="Ariza girin" />
                </li> */}
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
  );
}

export default DeviceTypeSelect;
