import { useEffect, useState } from "react";
import { useDefinitions } from "../context/DefinitionsContext";
import DeviceModelRow from "./DeviceModelRow";
import NewDeviceModelForm from "./NewDeviceModelForm";

function DeviceModels({ selectedDeviceBrandId }) {
  const { deviceModels, getDeviceModelsByDeviceBrand } = useDefinitions();

  useEffect(() => {
    console.log("state changed");
    if (selectedDeviceBrandId !== undefined) {
      console.log(selectedDeviceBrandId);

      getDeviceModelsByDeviceBrand(selectedDeviceBrandId);
    }
  }, [selectedDeviceBrandId]);
  return (
    <div className="col-span-12 md:col-span-4 border drop-shadow-xl bg-white rounded  ">
      <div className="p-5 bg-gray-50 border-b grid grid-cols-5 justify-between items-center">
        <h1 className="col-span-4 text-xl font-semibold">Cihaz Modelleri</h1>
      </div>
      <div>
        {/* <DeviceBrandSelect deviceModel={deviceModel} setDeviceModel={setDeviceModel} /> */}
        <NewDeviceModelForm selectedDeviceBrandId={selectedDeviceBrandId} />
        <div className=" max-h-[400px] overflow-y-scroll pb-24 no-scrollbar">
          {deviceModels.map((deviceModelObject) => {
            return <DeviceModelRow key={deviceModelObject._id} deviceModelObject={deviceModelObject} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default DeviceModels;
