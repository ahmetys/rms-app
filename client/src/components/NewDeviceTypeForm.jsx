import { toast } from "react-toastify";
import { useDefinitions } from "../context/DefinitionsContext";
import { useState } from "react";
function NewDeviceTypeForm() {
  const [deviceType, setDeviceType] = useState("");

  const { addNewDeviceType } = useDefinitions();
  const handleOnSubmit = (e) => {
    e.preventDefault();
    addNewDeviceType(deviceType);
    setDeviceType("");
    e.target.reset();
    toast.success("Cihaz Türü eklendi");
  };
  const handleOnChange = (e) => {
    setDeviceType(e.target.value);
  };
  return (
    <form onSubmit={handleOnSubmit} className="flex justify-between items-center px-5 py-2 space-x-2">
      <input onChange={handleOnChange} required={true} type="text" className="w-full h-12 p-3  focus:outline-none rounded-none focus:border-mblue-700 border " placeholder="Yeni Cihaz Türü" />
      <button className="cursor-pointer w-28 h-12 p-3 text-white bg-mblue-500 hover:bg-mblue-600 duration-300 drop-shadow-xl">Kaydet</button>
    </form>
  );
}

export default NewDeviceTypeForm;
