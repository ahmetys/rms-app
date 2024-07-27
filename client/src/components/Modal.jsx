function Modal() {
  return (
    <section>
      <div className="fixed inset-0 z-30 bg-gray-500 bg-opacity-75 overflow-y-auto">
        <div className="flex min-h-full justify-center px-2 py-2 md:px-5 md:py-5 items-center">
          <div className="overflow-hidden rounded bg-white border drop-shadow-xl">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-5 border-b bg-mblue-50 space-x-5">
              <h1 className="text-2xl font-semibold">Onay Kutusu</h1>
              <div className="cursor-pointer hover:opacity-100 h-10 w-10 flex justify-center items-center rounded-full p-2 duration-300 hover:bg-mblue-200">
                <i className="fa-solid fa-xmark"></i>
              </div>
            </div>
            {/* Modal Body */}
            <div className="p-5">
              <p>Emin misiniz?</p>
            </div>
            {/* Modal Footer */}
            <div className="flex space-x-5 justify-center p-5 border-t  bg-mblue-50">
              <button type="reset" className="cursor-pointer p-3 text-white bg-red-500 rounded hover:bg-red-600 duration-300 drop-shadow-xl">
                Vazgec
              </button>
              <button type="submit" className="cursor-pointer p-3 text-white bg-mblue-500 rounded hover:bg-mblue-600 duration-300 drop-shadow-xl">
                Onayla
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Modal;
