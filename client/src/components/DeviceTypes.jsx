import { useEffect, useState } from "react";
import { useDefinitions } from "../context/DefinitionsContext";
import DeviceTypeRow from "./DeviceTypeRow";
import NewDeviceTypeForm from "./NewDeviceTypeForm";

function DeviceTypes({ selectedDeviceTypeId, setSelectedDeviceTypeId }) {
  const { deviceDefinitions } = useDefinitions();
  const [deviceTypes, setDeviceTypes] = useState([]);
  useEffect(() => {
    setDeviceTypes([...deviceDefinitions]);
  }, [deviceDefinitions]);
  return (
    <div className="col-span-12 md:col-span-4 border drop-shadow-xl bg-white rounded">
      <div className="p-5 bg-gray-50 border-b grid grid-cols-5 justify-between items-center relative">
        <h1 className="col-span-4 text-xl font-semibold">Cihaz Türleri</h1>
      </div>
      <div>
        <NewDeviceTypeForm />
        <div className="max-h-[400px] overflow-y-scroll pb-24 no-scrollbar">
          {deviceTypes.map((deviceTypeObject) => {
            return <DeviceTypeRow key={deviceTypeObject._id} deviceTypeObject={deviceTypeObject} selectedDeviceTypeId={selectedDeviceTypeId} setSelectedDeviceTypeId={setSelectedDeviceTypeId} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default DeviceTypes;
