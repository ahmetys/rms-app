import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
function ServiceTypeRow({ serviceTypesItem, type, serviceTypes, setServiceTypes, setNewRow }) {
  const API_URL = import.meta.env.VITE_API_URL;
  useEffect(() => {
    setServiceType({ ...serviceTypesItem });
  }, []);
  const [serviceType, setServiceType] = useState({});
  const [editMode, setEditMode] = useState(false);
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editMode) {
        const { data } = await axios.put(`${API_URL}/api/services/updateServiceType/${serviceTypesItem._id}`, { ...serviceType }, { withCredentials: true });
        if (data.succeeded) {
          setEditMode(false);
          toast.success("Serviceart aktualisiert");
        }
      } else {
        const { data } = await axios.post(`${API_URL}/api/services/newServiceType`, { ...serviceType }, { withCredentials: true });
        if (data.succeeded) {
          e.target.reset();
          setServiceType({});
          setServiceTypes([...serviceTypes, { ...data.serviceType }]);
          toast.success("Serviceart hinzugefügt");
          setNewRow(false);
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  const handleInputChange = (e) => {
    setServiceType({ serviceType: e.target.value });
  };

  const deleteServiceType = async (e) => {
    const { data } = await axios.delete(`${API_URL}/api/services/deleteServiceType/${serviceTypesItem._id}`, { withCredentials: true });
    if (data.succeeded) {
      toast.success("Servis Türü silindi");
      setServiceTypes((prev) => prev.filter((item) => item._id !== serviceTypesItem._id));
    }
  };
  if (type === "new") {
    return (
      <tr className="hover:drop-shadow-xl duration-300 cursor-pointer">
        <td className="pl-5 pr-2 py-3">
          <form className="flex space-x-3" onSubmit={handleFormSubmit}>
            <input required onChange={handleInputChange} type="text" className="w-96 h-12 p-3 border focus:outline-none rounded-none focus:border-mblue-700" />
            <button className="cursor-pointer w-full md:w-auto h-12 p-3 text-white bg-mblue-500 hover:bg-mblue-600 duration-300 drop-shadow-xl">Kaydet</button>
          </form>
        </td>
        <td className="pl-2 pr-5 py-3 "></td>
      </tr>
    );
  }
  return (
    <>
      <tr key={serviceTypesItem._id} className="hover:drop-shadow-xl duration-300 cursor-pointer ">
        <td className="pl-5 pr-2 py-3">
          <form className="flex space-x-3" onSubmit={handleFormSubmit}>
            <input required onChange={handleInputChange} type="text" defaultValue={serviceTypesItem.serviceType} disabled={!editMode} className="w-96 h-12 p-3 border focus:outline-none rounded-none focus:border-mblue-700" />
            {editMode && <button className="cursor-pointer w-full md:w-auto h-12 p-3 text-white bg-mblue-500 hover:bg-mblue-600 duration-300 drop-shadow-xl">{editMode ? "Güncelle" : "Kaydet"}</button>}
          </form>
        </td>
        <td className="pl-2 pr-5 py-3 flex justify-end">
          <div className="flex cursor-pointer space-x-">
            <div className="cursor-pointer  h-10 w-10 flex justify-center items-center rounded-full p-2 duration-300 hover:bg-mblue-600 hover:text-white">
              <i onClick={() => setEditMode(!editMode)} className="fa-regular fa-pen-to-square  text-xl" />
            </div>
            <div className="cursor-pointer  h-10 w-10 flex justify-center items-center rounded-full p-2 duration-300 hover:bg-mblue-600 hover:text-white">
              <i onClick={deleteServiceType} className="fa-regular fa-trash-can text-xl" />
            </div>
          </div>
        </td>
      </tr>
    </>
  );
}

export default ServiceTypeRow;
