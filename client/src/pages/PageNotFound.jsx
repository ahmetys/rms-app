import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="bg-mblue-50 font-montserrat flex-col justify-center items-center h-dvh p-4">
      <div className="flex-col items-center justify-center mt-48 mb-12">
        <p className="text-center mb-12 text-8xl font-bold">404</p>
        <p className="text-center text-2xl mb-12">Seite nicht gefunden!</p>
        <p className="text-center">
          <i className="text-red-700 fa-solid fa-triangle-exclamation text-6xl"></i>
        </p>
      </div>
      <div className="flex items-center space-x-5 justify-center mb-4">
        <hr className="w-1/2" />
      </div>
      <div className="flex justify-center">
        <Link to="/tickets">
          <button className="cursor-pointer w-full md:w-auto h-12 p-3 text-white bg-mblue-500 hover:bg-mblue-600 duration-300 drop-shadow-xl">Startseite</button>
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;
