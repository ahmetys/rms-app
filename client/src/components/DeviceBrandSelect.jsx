import { useState } from "react";
import { useDefinitions } from "../context/DefinitionsContext";

function DeviceBrandSelect({ deviceModel, setDeviceModel }) {
  const [deviceBrandsPopup, setDeviceBrandsPopup] = useState(false);
  const { deviceBrands, getDeviceModelsByDeviceBrand } = useDefinitions();
  const selectDeviceBrand = (deviceBrand) => {
    setDeviceModel({ ...deviceModel, deviceBrandId: deviceBrand._id, deviceBrand: deviceBrand.deviceBrand });
    setDeviceBrandsPopup(false);
    getDeviceModelsByDeviceBrand(deviceBrand._id);
  };
  return (
    <div className="px-5 py-2 col-span-1 flex flex-col ">
      <div className="relative flex items-center">
        <input type="text" value={deviceModel.deviceBrand} required={true} onFocus={() => setDeviceBrandsPopup(true)} placeholder="Cihaz markasini secin" name="deviceType" className="w-full h-12 p-3 border focus:outline-none rounded-none focus:border-mblue-700" />
        <i onClick={() => setDeviceBrandsPopup(!deviceBrandsPopup)} className={`fa-solid fa-chevron-${deviceBrandsPopup ? "up" : "down"} absolute right-3 cursor-pointer`} />
      </div>
      <div className="relative">
        <ul className={`${deviceBrandsPopup ? "" : "hidden"} absolute z-50 bg-white border-b border-x cursor-pointer drop-shadow-xl w-full`}>
          {deviceBrands.map((deviceBrand) => {
            return (
              <li onClick={() => selectDeviceBrand(deviceBrand)} key={deviceBrand._id} className="hover:bg-mblue-200 duration-300 drop-shadow-xl p-3">
                {deviceBrand.deviceBrand}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default DeviceBrandSelect;
