function ServiceTypes() {
  return (
    <section id="yeni-servis-fisi" className="border drop-shadow-xl bg-white rounded mb-5">
      {/*Yeni Servis Fisi Header*/}
      <div className="p-5 bg-gray-50 border-b">
        <h1 className="text-4xl font-semibold">Servis Türleri </h1>
      </div>
      {/*Yeni Servis Fisi Body*/}
      <div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="p-5 col-span-1 flex flex-col">
              <div className="flex justify-start items-center space-x-5 mb-2">
                <div className="basis-4/5">
                  <input type="text" className="h-10 w-full px-2 py-1 border focus:outline-none rounded-none focus:border-mblue-700" placeholder="Servis Türünü girin" />
                </div>
                <div className="basis-1/5 flex">
                  <input type="text" className="h-10 w-20 px-2 py-1 border focus:outline-none rounded-none focus:border-mblue-700" placeholder="Fiyat" />
                  <span className="inline-block border-y border-r bg-mblue-50 font-semibold text-lg px-2 py-1 items-center">€</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Yeni Servis  Fisi Footer*/}
      <div className="p-5 bg-gray-50 border-t flex justify-end">
        <button className="cursor-pointer w-full md:w-auto h-12 p-3 text-white bg-mblue-500 hover:bg-mblue-600 duration-300 drop-shadow-xl">Kaydet</button>
      </div>
    </section>
  );
}

export default ServiceTypes;
