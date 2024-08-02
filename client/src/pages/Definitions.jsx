import { useState } from "react";
import DeviceBrands from "../components/DeviceBrands";
import DeviceModels from "../components/DeviceModels";
import DeviceTypes from "../components/DeviceTypes";
function Definitions() {
  const [selectedDeviceTypeId, setSelectedDeviceTypeId] = useState();
  const [selectedDeviceBrandId, setSelectedDeviceBrandId] = useState();

  return (
    <section className="grid grid-cols-12 gap-5">
      <DeviceTypes selectedDeviceTypeId={selectedDeviceTypeId} setSelectedDeviceTypeId={setSelectedDeviceTypeId} />
      <DeviceBrands selectedDeviceTypeId={selectedDeviceTypeId} selectedDeviceBrandId={selectedDeviceBrandId} setSelectedDeviceBrandId={setSelectedDeviceBrandId} />
      <DeviceModels selectedDeviceBrandId={selectedDeviceBrandId} />
      <div className="col-span-12 md:col-span-6 p-5 border drop-shadow-xl bg-white rounded">
        <div className="flex items-center justify-between border-b pb-2">
          <h2 className="flex items-center font-semibold">Example Card Header</h2>
          <div className="rounded-full p-2 duration-300 hover:bg-mblue-200 cursor-pointer relative">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
            </svg>
            <div className="absolute bg-white right-0 mt-2 min-w-36 border rounded drop-shadow-xl">
              <ul>
                <li className="hover:bg-mblue-200 hover:drop-shadow-xl p-3 duration-300">Add</li>
                <li className="hover:bg-mblue-200 hover:drop-shadow-xl p-3 duration-300">Edit</li>
                <li className="hover:bg-mblue-200 hover:drop-shadow-xl p-3 duration-300">Delete</li>
                <li className="hover:bg-mblue-200 hover:drop-shadow-xl p-3 duration-300">Close</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="py-2 border-b">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sunt beatae placeat quae nihil repudiandae, sint sed consequatur id hic.</p>
        </div>
        <div className="py-2">
          <button className="cursor-pointer p-3 text-white bg-mblue-500 rounded hover:bg-mblue-600 duration-300 drop-shadow-xl">Button</button>
        </div>
      </div>
      <div className="col-span-12 md:col-span-6 p-5 border drop-shadow-xl bg-white rounded">
        <div className="flex items-center justify-between border-b pb-2">
          <h2 className="flex items-center font-semibold">Example Card Header</h2>
          <div className="rounded-full p-2 duration-300 hover:bg-mblue-200 cursor-pointer relative">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
            </svg>
            <div className="absolute bg-white right-0 mt-2 min-w-36 border rounded drop-shadow-xl">
              <ul>
                <li className="hover:bg-mblue-200 hover:drop-shadow-xl p-3 duration-300">Add</li>
                <li className="hover:bg-mblue-200 hover:drop-shadow-xl p-3 duration-300">Edit</li>
                <li className="hover:bg-mblue-200 hover:drop-shadow-xl p-3 duration-300">Delete</li>
                <li className="hover:bg-mblue-200 hover:drop-shadow-xl p-3 duration-300">Close</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="py-2 border-b">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sunt beatae placeat quae nihil repudiandae, sint sed consequatur id hic.</p>
        </div>
        <div className="py-2">
          <button className="cursor-pointer p-3 text-white bg-mblue-500 rounded hover:bg-mblue-600 duration-300 drop-shadow-xl">Button</button>
        </div>
      </div>
      <div className="col-span-12 md:col-span-6 p-5 border drop-shadow-xl bg-white rounded">
        <div className="flex items-center justify-between border-b pb-2">
          <h2 className="flex items-center font-semibold">Example Card Header</h2>
          <div className="rounded-full p-2 duration-300 hover:bg-mblue-200 cursor-pointer relative">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
            </svg>
            <div className="absolute bg-white right-0 mt-2 min-w-36 border rounded drop-shadow-xl">
              <ul>
                <li className="hover:bg-mblue-200 hover:drop-shadow-xl p-3 duration-300">Add</li>
                <li className="hover:bg-mblue-200 hover:drop-shadow-xl p-3 duration-300">Edit</li>
                <li className="hover:bg-mblue-200 hover:drop-shadow-xl p-3 duration-300">Delete</li>
                <li className="hover:bg-mblue-200 hover:drop-shadow-xl p-3 duration-300">Close</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="py-2 border-b">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sunt beatae placeat quae nihil repudiandae, sint sed consequatur id hic.</p>
        </div>
        <div className="py-2">
          <button className="cursor-pointer p-3 text-white bg-mblue-500 rounded hover:bg-mblue-600 duration-300 drop-shadow-xl">Button</button>
        </div>
      </div>
      <div className="col-span-12 md:col-span-6 p-5 border drop-shadow-xl bg-white rounded">
        <div className="flex items-center justify-between border-b pb-2">
          <h2 className="flex items-center font-semibold">Example Card Header</h2>
          <div className="rounded-full p-2 duration-300 hover:bg-mblue-200 cursor-pointer relative">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
            </svg>
            <div className="absolute bg-white right-0 mt-2 min-w-36 border rounded drop-shadow-xl">
              <ul>
                <li className="hover:bg-mblue-200 hover:drop-shadow-xl p-3 duration-300">Add</li>
                <li className="hover:bg-mblue-200 hover:drop-shadow-xl p-3 duration-300">Edit</li>
                <li className="hover:bg-mblue-200 hover:drop-shadow-xl p-3 duration-300">Delete</li>
                <li className="hover:bg-mblue-200 hover:drop-shadow-xl p-3 duration-300">Close</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="py-2 border-b">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sunt beatae placeat quae nihil repudiandae, sint sed consequatur id hic.</p>
        </div>
        <div className="py-2">
          <button className="cursor-pointer p-3 text-white bg-mblue-500 rounded hover:bg-mblue-600 duration-300 drop-shadow-xl">Button</button>
        </div>
      </div>
      <div className="col-span-12 md:col-span-6 p-5 border drop-shadow-xl bg-white rounded">
        <div className="flex items-center justify-between border-b pb-2">
          <h2 className="flex items-center font-semibold">Example Card Header</h2>
          <div className="rounded-full p-2 duration-300 hover:bg-mblue-200 cursor-pointer relative">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
            </svg>
            <div className="absolute bg-white right-0 mt-2 min-w-36 border rounded drop-shadow-xl">
              <ul>
                <li className="hover:bg-mblue-200 hover:drop-shadow-xl p-3 duration-300">Add</li>
                <li className="hover:bg-mblue-200 hover:drop-shadow-xl p-3 duration-300">Edit</li>
                <li className="hover:bg-mblue-200 hover:drop-shadow-xl p-3 duration-300">Delete</li>
                <li className="hover:bg-mblue-200 hover:drop-shadow-xl p-3 duration-300">Close</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="py-2 border-b">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sunt beatae placeat quae nihil repudiandae, sint sed consequatur id hic.</p>
        </div>
        <div className="py-2">
          <button className="cursor-pointer p-3 text-white bg-mblue-500 rounded hover:bg-mblue-600 duration-300 drop-shadow-xl">Button</button>
        </div>
      </div>
    </section>
  );
}

export default Definitions;
