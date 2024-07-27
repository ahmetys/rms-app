import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import ServiceTypeRow from "../components/ServiceTypeRow";
function ServiceList() {
  const [serviceList, setServiceList] = useState([]);
  const [newRow, setNewRow] = useState(false);

  useEffect(() => {
    const getServiceList = async () => {
      const response = await axios.get("http://localhost:3000/api/services/getServiceList", { withCredentials: true });
      console.log(response.data);
      setServiceList([...response.data]);
    };
    getServiceList();
  }, []);
  return (
    <section id="servis-fisleri" className="border drop-shadow-xl bg-white rounded mb-5">
      {/*Müsteriler Header*/}
      <div className="p-5 bg-gray-50 border-b grid grid-cols-5 justify-between items-center relative">
        <h1 className="col-span-4 text-4xl font-semibold">Servis Listesi</h1>
      </div>
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full">
            <div className="overflow-hidden">
              <table className="table-auto min-w-full overflow-auto overscroll-contain">
                <thead className="border-b font-bold">
                  <tr>
                    <td className="py-3 pl-5 pr-2">Servis Türü</td>
                    <td className="py-3 pl-2 pr-5 flex justify-end">Islemler</td>
                  </tr>
                </thead>
                <tbody>
                  {serviceList.map((serviceListItem) => {
                    return <ServiceTypeRow key={serviceListItem._id} serviceListItem={serviceListItem} serviceList={serviceList} setServiceList={setServiceList} />;
                  })}
                  {newRow && <ServiceTypeRow serviceList={serviceList} setServiceList={setServiceList} type="new" setNewRow={setNewRow} />}
                  <tr>
                    <td className="pl-5 pr-2 py-3 flex space-x-3">
                      <div className="flex justify-center cursor-pointer items-center w-12 h-12 shrink-0 grow-0 text-white bg-mblue-500 rounded-full hover:bg-mblue-600 duration-300 drop-shadow-xl">
                        <i onClick={() => setNewRow(true)} className="fa-solid fa-plus text-white text-2xl" />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* Müsteriler Footer*/}
      <div className="p-5 bg-gray-50 border-t flex justify-end" />
    </section>
  );
}

export default ServiceList;
