import { toast } from "react-toastify";
import { useDefinitions } from "../context/DefinitionsContext";
import { useState } from "react";
function NewDeviceTypeForm() {
  const [deviceType, setDeviceType] = useState("");

  const { addNewDeviceType } = useDefinitions();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    addNewDeviceType(deviceType);
    setDeviceType("");
    e.target.reset();
  };
  const handleInputChange = (e) => {
    setDeviceType(e.target.value);
  };
  return (
    <form onSubmit={handleFormSubmit} className="flex justify-between items-center px-5 py-2 space-x-2">
      <input onChange={handleInputChange} required={true} type="text" className="w-full h-12 p-3  focus:outline-none rounded-none focus:border-mblue-700 border" placeholder="Neues Gerätetyp" />
      <button className="cursor-pointer w-28 h-12 p-3 text-white bg-mblue-500 hover:bg-mblue-600 duration-300 drop-shadow-xl">Speichern</button>
    </form>
  );
}

export default NewDeviceTypeForm;
