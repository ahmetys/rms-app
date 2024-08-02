import { useEffect, useState } from "react";
import { useDefinitions } from "../context/DefinitionsContext";
import DeviceBrandRow from "./DeviceBrandRow";
import NewDeviceBrandForm from "./NewDeviceBrandForm";

function DeviceBrands({ selectedDeviceTypeId, selectedDeviceBrandId, setSelectedDeviceBrandId }) {
  const { deviceBrands, getDeviceBrandsByDeviceType } = useDefinitions();
  useEffect(() => {
    if (selectedDeviceTypeId !== undefined) {
      getDeviceBrandsByDeviceType(selectedDeviceTypeId);
    }
  }, [selectedDeviceTypeId]);
  return (
    <div className="col-span-12 md:col-span-4 border drop-shadow-xl bg-white rounded  ">
      <div className="p-5 bg-gray-50 border-b grid grid-cols-5 justify-between items-center">
        <h1 className="col-span-4 text-xl font-semibold">Cihaz Markalari</h1>
      </div>
      <div>
        <NewDeviceBrandForm selectedDeviceTypeId={selectedDeviceTypeId} />
        <div className=" max-h-[400px] overflow-y-scroll">
          {deviceBrands.map((deviceBrandObject) => {
            return <DeviceBrandRow key={deviceBrandObject._id} deviceBrandObject={deviceBrandObject} selectedDeviceBrandId={selectedDeviceBrandId} setSelectedDeviceBrandId={setSelectedDeviceBrandId} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default DeviceBrands;
