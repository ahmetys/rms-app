import { toast } from "react-toastify";
import { useDefinitions } from "../context/DefinitionsContext";
import { useState } from "react";
function NewDeviceBrandForm({ selectedDeviceTypeId }) {
  const [deviceBrand, setDeviceBrand] = useState("");
  const { addNewDeviceBrand } = useDefinitions();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (selectedDeviceTypeId !== undefined) {
      addNewDeviceBrand({ deviceTypeId: selectedDeviceTypeId, deviceBrand: deviceBrand });
      setDeviceBrand({ ...deviceBrand, deviceBrand: "" });
      e.target.elements.deviceBrand.value = "";
      toast.success("Gerätemarke hinzugefügt");
    } else {
      toast.warning("Gerätetyp auswählen");
    }
  };
  const handleInputChange = (e) => {
    setDeviceBrand(e.target.value);
  };
  return (
    <form onSubmit={handleFormSubmit} className=" px-5 py-2">
      <div className="flex justify-between items-center space-x-2">
        <input onChange={handleInputChange} required={true} type="text" value={deviceBrand.deviceBrand} name="deviceBrand" className="w-full h-12 p-3  focus:outline-none rounded-none focus:border-mblue-700 border " placeholder="Gerätemarke" />
        <button className="cursor-pointer w-28 h-12 p-3 text-white bg-mblue-500 hover:bg-mblue-600 duration-300 drop-shadow-xl">Speichern</button>
      </div>
    </form>
  );
}

export default NewDeviceBrandForm;
