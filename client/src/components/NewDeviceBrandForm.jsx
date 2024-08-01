import { toast } from "react-toastify";
import { useDefinitions } from "../context/DefinitionsContext";
function NewDeviceBrandForm({ deviceBrand, setDeviceBrand }) {
  const { addNewDeviceBrand } = useDefinitions();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(deviceBrand);
    if (deviceBrand.deviceBrand && deviceBrand.deviceTypeId) {
      addNewDeviceBrand(deviceBrand);
      setDeviceBrand({ ...deviceBrand, deviceBrand: "" });
      console.log(e.target.elements);
      e.target.elements.deviceBrand.value = "";
      toast.success("Cihaz Markasi eklendi");
    } else {
      toast.error("Cihaz türünü seciniz");
    }
  };
  const handleOnChange = (e) => {
    setDeviceBrand({ ...deviceBrand, deviceBrand: e.target.value });
  };
  return (
    <form onSubmit={handleOnSubmit} className=" px-5 py-2">
      <div className="flex justify-between items-center space-x-2">
        <input onChange={handleOnChange} required={true} type="text" value={deviceBrand.deviceBrand} name="deviceBrand" className="w-full h-12 p-3  focus:outline-none rounded-none focus:border-mblue-700 border " placeholder="Yeni Cihaz markasi" />
        <button className="cursor-pointer w-28 h-12 p-3 text-white bg-mblue-500 hover:bg-mblue-600 duration-300 drop-shadow-xl">Kaydet</button>
      </div>
    </form>
  );
}

export default NewDeviceBrandForm;
