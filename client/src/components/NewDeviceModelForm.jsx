import { toast } from "react-toastify";
import { useDefinitions } from "../context/DefinitionsContext";
import { useState } from "react";
function NewDeviceModelForm({ selectedDeviceBrandId }) {
  const [deviceModel, setDeviceModel] = useState("");
  const { addNewDeviceModel } = useDefinitions();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (selectedDeviceBrandId !== undefined) {
      addNewDeviceModel({ deviceBrandId: selectedDeviceBrandId, deviceModel: deviceModel });
      setDeviceModel({ ...deviceModel, deviceModel: "" });
      e.target.elements.deviceModel.value = "";
      toast.success("Cihaz Markasi eklendi");
    } else {
      toast.warning("Bir cihaz markasi secin");
    }
  };
  const handleOnChange = (e) => {
    setDeviceModel(e.target.value);
  };
  return (
    <form onSubmit={handleOnSubmit} className=" px-5 py-2">
      <div className="flex justify-between items-center space-x-2">
        <input onChange={handleOnChange} required={true} type="text" value={deviceModel.deviceModel} name="deviceModel" className="w-full h-12 p-3  focus:outline-none rounded-none focus:border-mblue-700 border " placeholder="Yeni Cihaz modeli" />
        <button className="cursor-pointer w-28 h-12 p-3 text-white bg-mblue-500 hover:bg-mblue-600 duration-300 drop-shadow-xl">Kaydet</button>
      </div>
    </form>
  );
}

export default NewDeviceModelForm;
