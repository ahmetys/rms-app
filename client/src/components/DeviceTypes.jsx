import { useDefinitions } from "../context/DefinitionsContext";
import DeviceTypeRow from "./DeviceTypeRow";
import NewDeviceTypeForm from "./NewDeviceTypeForm";

function DeviceTypes({ setSelectedDeviceTypeId }) {
  const { deviceTypes } = useDefinitions();

  return (
    <div className="col-span-12 md:col-span-4 border drop-shadow-xl bg-white rounded">
      <div className="p-5 bg-gray-50 border-b grid grid-cols-5 justify-between items-center relative">
        <h1 className="col-span-4 text-xl font-semibold">Cihaz Türleri</h1>
      </div>
      <div>
        <NewDeviceTypeForm />
        <div className="max-h-[400px] overflow-y-scroll">
          {deviceTypes.map((deviceTypeObject) => {
            return <DeviceTypeRow key={deviceTypeObject._id} deviceTypeObject={deviceTypeObject} setSelectedDeviceTypeId={setSelectedDeviceTypeId} />;
          })}
        </div>
      </div>
      {/* <div className="p-5 bg-gray-50 border-t flex justify-end"></div> */}
    </div>
  );
}

export default DeviceTypes;
