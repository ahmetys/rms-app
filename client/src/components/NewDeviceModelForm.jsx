import { toast } from "react-toastify";
import { useDefinitions } from "../context/DefinitionsContext";
import { useState } from "react";
function NewDeviceModelForm({ selectedDeviceTypeId, selectedDeviceBrandId }) {
  const [deviceModel, setDeviceModel] = useState("");
  const { addNewDeviceModel } = useDefinitions();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (selectedDeviceBrandId !== undefined) {
      addNewDeviceModel({ deviceTypeId: selectedDeviceTypeId, deviceBrandId: selectedDeviceBrandId, deviceModel: deviceModel });
      setDeviceModel({ ...deviceModel, deviceModel: "" });
      e.target.elements.deviceModel.value = "";
      toast.success("Gerätemodell hinzugefügt");
    } else {
      toast.warning("Gerätemarke auswählen");
    }
  };
  const handleInputChange = (e) => {
    setDeviceModel(e.target.value);
  };
  return (
    <form onSubmit={handleFormSubmit} className=" px-5 py-2">
      <div className="flex justify-between items-center space-x-2">
        <input onChange={handleInputChange} required={true} type="text" value={deviceModel.deviceModel} name="deviceModel" className="w-full h-12 p-3  focus:outline-none rounded-none focus:border-mblue-700 border " placeholder="Neues Gerätemodell" />
        <button className="cursor-pointer w-28 h-12 p-3 text-white bg-mblue-500 hover:bg-mblue-600 duration-300 drop-shadow-xl">Speichern</button>
      </div>
    </form>
  );
}

export default NewDeviceModelForm;
