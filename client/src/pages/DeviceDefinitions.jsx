import { useState } from "react";
import DeviceBrands from "../components/DeviceBrands";
import DeviceModels from "../components/DeviceModels";
import DeviceTypes from "../components/DeviceTypes";
function DeviceDefinitions() {
  const [selectedDeviceTypeId, setSelectedDeviceTypeId] = useState();
  const [selectedDeviceBrandId, setSelectedDeviceBrandId] = useState();

  return (
    <section className="grid grid-cols-12 gap-5">
      <DeviceTypes selectedDeviceTypeId={selectedDeviceTypeId} setSelectedDeviceTypeId={setSelectedDeviceTypeId} />
      <DeviceBrands selectedDeviceTypeId={selectedDeviceTypeId} selectedDeviceBrandId={selectedDeviceBrandId} setSelectedDeviceBrandId={setSelectedDeviceBrandId} />
      <DeviceModels selectedDeviceTypeId={selectedDeviceTypeId} selectedDeviceBrandId={selectedDeviceBrandId} />
    </section>
  );
}

export default DeviceDefinitions;
