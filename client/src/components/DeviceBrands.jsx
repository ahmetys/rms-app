import { useEffect, useState } from "react";
import { useDefinitions } from "../context/DefinitionsContext";
import DeviceBrandRow from "./DeviceBrandRow";
import NewDeviceBrandForm from "./NewDeviceBrandForm";

function DeviceBrands({ selectedDeviceTypeId, selectedDeviceBrandId, setSelectedDeviceBrandId }) {
  const { deviceDefinitions } = useDefinitions();
  const [deviceBrands, setDeviceBrands] = useState([]);
  useEffect(() => {
    if (selectedDeviceTypeId !== undefined) {
      deviceDefinitions.map((deviceType) => {
        if (deviceType._id === selectedDeviceTypeId) {
          setDeviceBrands([...deviceType.deviceBrands]);
        }
      });
    }
  }, [selectedDeviceTypeId, deviceDefinitions]);
  return (
    <div className="col-span-12 md:col-span-4 border drop-shadow-xl bg-white rounded  ">
      <div className="p-5 bg-gray-50 border-b grid grid-cols-5 justify-between items-center">
        <h1 className="col-span-4 text-xl font-semibold">Gerätemarken</h1>
      </div>
      <div>
        <NewDeviceBrandForm selectedDeviceTypeId={selectedDeviceTypeId} />
        <div className=" max-h-[400px] overflow-y-scroll pb-24 no-scrollbar">
          {deviceBrands.map((deviceBrandObject) => {
            return <DeviceBrandRow key={deviceBrandObject._id} deviceBrandObject={deviceBrandObject} selectedDeviceTypeId={selectedDeviceTypeId} selectedDeviceBrandId={selectedDeviceBrandId} setSelectedDeviceBrandId={setSelectedDeviceBrandId} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default DeviceBrands;
