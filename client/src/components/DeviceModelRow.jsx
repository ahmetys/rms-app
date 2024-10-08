import { useState } from "react";
import { toast } from "react-toastify";
import { useDefinitions } from "../context/DefinitionsContext";
function DeviceModelRow({ selectedDeviceTypeId, selectedDeviceBrandId, deviceModelObject }) {
  const [deviceModel, setDeviceModel] = useState(deviceModelObject.deviceModel);
  const [showOptions, setShowOptions] = useState(false);
  const [editMode, setEditMod] = useState(false);
  const { updateDeviceModel, deleteDeviceModel } = useDefinitions();

  const handleInputChange = (e) => {
    setDeviceModel(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    updateDeviceModel(deviceModelObject._id, deviceModel);
    setEditMod(false);
    setShowOptions(false);
    toast.success("Gerätemodell aktualisiert");
  };

  return (
    <form onSubmit={handleFormSubmit} className="flex justify-between items-center px-5 py-2 space-x-2 duration-300 hover:bg-mblue-200 cursor-pointer">
      <input onChange={handleInputChange} required={true} type="text" disabled={!editMode} className={`w-full h-12 p-3 focus:outline-none  cursor-pointer rounded-none  focus:border-mblue-700 border ${editMode ? "" : "border-none bg-transparent"}`} defaultValue={deviceModelObject.deviceModel} />
      {editMode && <button className="cursor-pointer w-28 h-12 p-3 text-white bg-mblue-500 hover:bg-mblue-600 duration-300 drop-shadow-xl">Aktualisieren</button>}
      {!editMode && (
        <div className="rounded-full duration-300 hover:bg-mblue-500 cursor-pointer relative">
          <i onClick={() => setShowOptions(!showOptions)} className="fa-solid fa-ellipsis-vertical w-12 h-12 flex items-center justify-center"></i>
          <div className={`${showOptions ? "" : "hidden"} absolute bg-white right-0 min-w-36 z-50 border rounded drop-shadow-xl`}>
            <ul>
              <li onClick={() => setEditMod(true)} className="hover:bg-mblue-200 hover:drop-shadow-xl p-3 duration-300">
                Bearbeiten
              </li>
              <li onClick={() => deleteDeviceModel({ deviceTypeId: selectedDeviceTypeId, deviceBrandId: selectedDeviceBrandId, deviceModelId: deviceModelObject._id })} className="hover:bg-mblue-200 hover:drop-shadow-xl p-3 duration-300">
                Löschen
              </li>
            </ul>
          </div>
        </div>
      )}
    </form>
  );
}

export default DeviceModelRow;
