import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
function ServiceTypeRow({ serviceListItem, type, serviceList, setServiceList, setNewRow }) {
  const [serviceType, setServiceType] = useState({});
  const [editMode, setEditMode] = useState(false);
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editMode) {
        const response = await axios.put(`http://localhost:3000/api/services/updateServiceType/${serviceListItem._id}`, { ...serviceType });
        setEditMode(false);
        toast.success("Servis türü güncellendi");
      } else {
        const response = await axios.post("http://localhost:3000/api/services/newServiceType", { ...serviceType }, { withCredentials: true });
        e.target.reset();
        setServiceType({});
        setServiceList([...serviceList, { ...response.data.serviceType }]);
        toast.success("Servis türü eklendi");
        setNewRow(false);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  const handleChangeInput = (e) => {
    setServiceType({ serviceType: e.target.value });
  };

  const deleteServiceType = async (e) => {
    console.log(serviceListItem);
    const response = await axios.delete(`http://localhost:3000/api/services/deleteServiceType/${serviceListItem._id}`);
    toast.success("Servis Türü silindi");
    setServiceList((prev) => prev.filter((item) => item._id !== serviceListItem._id));
  };
  if (type === "new") {
    return (
      <tr className="hover:drop-shadow-xl duration-300 cursor-pointer">
        <td className="pl-5 pr-2 py-3">
          <form className="flex space-x-3" onSubmit={handleFormSubmit}>
            <input required onChange={handleChangeInput} type="text" className="w-96 h-12 p-3 border focus:outline-none rounded-none focus:border-mblue-700" />
            <button className="cursor-pointer w-full md:w-auto h-12 p-3 text-white bg-mblue-500 hover:bg-mblue-600 duration-300 drop-shadow-xl">Kaydet</button>
          </form>
        </td>
        <td className="pl-2 pr-5 py-3 "></td>
      </tr>
    );
  }
  return (
    <>
      <tr key={serviceListItem._id} className="hover:drop-shadow-xl duration-300 cursor-pointer ">
        <td className="pl-5 pr-2 py-3">
          <form className="flex space-x-3" onSubmit={handleFormSubmit}>
            <input required onChange={handleChangeInput} type="text" defaultValue={serviceListItem.serviceType} disabled={!editMode} className="w-96 h-12 p-3 border focus:outline-none rounded-none focus:border-mblue-700" />
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
