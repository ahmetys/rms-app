import { useEffect, useState } from "react";
import axios from "axios";
import ServiceTypeRow from "../components/ServiceTypeRow";
function ServiceTypes() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [serviceTypes, setServiceTypes] = useState([]);
  const [newRow, setNewRow] = useState(false);
  useEffect(() => {
    const getAllServiceTypes = async () => {
      const { data } = await axios.get(`${API_URL}/api/services/getAllServiceTypes`, { withCredentials: true });
      setServiceTypes([...data]);
    };
    getAllServiceTypes();
  }, []);
  return (
    <section id="servis-fisleri" className="border drop-shadow-xl bg-white rounded mb-5">
      <div className="p-5 bg-gray-50 border-b grid grid-cols-5 justify-between items-center relative">
        <h1 className="col-span-4 text-4xl font-semibold">Servicearten</h1>
      </div>
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full">
            <div className="overflow-hidden">
              <table className="table-auto min-w-full overflow-auto overscroll-contain">
                <thead className="border-b font-bold">
                  <tr>
                    <td className="py-3 pl-5 pr-2">Serviceart</td>
                    <td className="py-3 pl-2 pr-5 flex justify-end">Optionen</td>
                  </tr>
                </thead>
                <tbody>
                  {serviceTypes.map((serviceTypesItem) => {
                    return <ServiceTypeRow key={serviceTypesItem._id} serviceTypesItem={serviceTypesItem} serviceTypes={serviceTypes} setServiceTypes={setServiceTypes} />;
                  })}
                  {newRow && <ServiceTypeRow serviceTypes={serviceTypes} setServiceTypes={setServiceTypes} type="new" setNewRow={setNewRow} />}
                  <tr>
                    <td className="pl-5 pr-2 py-3 flex space-x-3">
                      <div onClick={() => setNewRow(true)} className="flex justify-center cursor-pointer items-center w-12 h-12 shrink-0 grow-0 text-white bg-mblue-500 rounded-full hover:bg-mblue-600 duration-300 drop-shadow-xl">
                        <i className="fa-solid fa-plus text-white text-2xl" />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 bg-gray-50 border-t flex justify-end" />
    </section>
  );
}

export default ServiceTypes;
