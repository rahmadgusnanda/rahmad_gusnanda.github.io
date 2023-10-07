import { Link } from "react-router-dom";
import KiriIcon from "./KiriIcon";
import KananIcon from "./KananIcon";

const Berita6 = () => {
  return (
    <div className="sm:w-full">
      <h1 className="text-left py-4 text-3xl font-semibold justify-start pl-4 border border-b-gray-400 border-l-4 border-l-blue-500">
        Berita
      </h1>

      {/* --------------------------------->>>>>>>>>> BERITA 1 <<<<<<<<<<--------------------------------- */}
      <div className="border-solid border-gray-400 p-7">
        <div>
          <Link to={"/arsip-berita/berbuka-puasa-bersama"}>
            <img
              src="/images/berbuka-puasa-bersama/utama.jpg"
              alt="Tabloid"
              className="w-full h-96 flex justify-center mx-auto"
            />
          </Link>
          <div className="border-solid border-gray-400 px-6 py-4 text-center flex -mt-28">
            <div className="rounded-lg w-24 border border-black bg-white">
              <h1 className="bg-orange-500 rounded-t-md font-semibold text-xl text-white py-2">
                2019
              </h1>
              <p className="text-black text-3xl font-semibold">30</p>
              <p className="text-black font-semibold">May</p>
            </div>
          </div>
        </div>
        <div className="border-x border-b border-x-gray-400 border-b-gray-400 shadow-sm shadow-black w-full h-auto px-6 py-6 flex justify-start -mt-7">
          <h2 className="text-2xl font-semibold">
            <Link to={"/arsip-berita/berbuka-puasa-bersama"}>
              Berbuka Puasa Bersama
            </Link>
          </h2>
        </div>
      </div>

      {/* --------------------------------->>>>>>>>>> BERITA 2 <<<<<<<<<<--------------------------------- */}
      <div className="border-solid border-gray-400 p-7">
        <div>
          <Link
            to={
              "/arsip-berita/berbagi-berkah-ramadhan-dengan-sebar-takjil-gratis"
            }
          >
            <img
              src="/images/berbagi-berkah-ramadhan-dengan-sebar-takjil-gratis/utama.jpg"
              alt="Tabloid"
              className="w-full h-96 flex justify-center mx-auto"
            />
          </Link>
          <div className="border-solid border-gray-400 px-6 py-4 text-center flex -mt-28">
            <div className="rounded-lg w-24 border border-black bg-white">
              <h1 className="bg-orange-500 rounded-t-md font-semibold text-xl text-white py-2">
                2019
              </h1>
              <p className="text-black text-3xl font-semibold">30</p>
              <p className="text-black font-semibold">May</p>
            </div>
          </div>
        </div>
        <div className="border-x border-b border-x-gray-400 border-b-gray-400 shadow-sm shadow-black w-full h-auto px-6 py-6 flex justify-start -mt-7">
          <h2 className="text-2xl font-semibold">
            <Link
              to={
                "/arsip-berita/berbagi-berkah-ramadhan-dengan-sebar-takjil-gratis"
              }
            >
              Berbagi Berkah Ramadhan Dengan Sebar Takjil Gratis
            </Link>
          </h2>
        </div>
      </div>

      {/* --------------------------------->>>>>>>>>> BERITA 3 <<<<<<<<<<--------------------------------- */}
      <div className="border-solid border-gray-400 p-7">
        <div>
          <Link
            to={
              "/arsip-berita/pbi-dan-stami-gelar-seminar-tentang-menjadi-generasi-milenial-yang-cerdas-dan-kritis"
            }
          >
            <img
              src="/images/pbi-dan-stami-gelar-seminar-tentang-menjadi-generasi-milenial-yang-cerdas-dan-kritis/utama.jpg"
              alt="Tabloid"
              className="w-full h-96 flex justify-center mx-auto"
            />
          </Link>
          <div className="border-solid border-gray-400 px-6 py-4 text-center flex -mt-28">
            <div className="rounded-lg w-24 border border-black bg-white">
              <h1 className="bg-orange-500 rounded-t-md font-semibold text-xl text-white py-2">
                2019
              </h1>
              <p className="text-black text-3xl font-semibold">30</p>
              <p className="text-black font-semibold">May</p>
            </div>
          </div>
        </div>
        <div className="border-x border-b border-x-gray-400 border-b-gray-400 shadow-sm shadow-black w-full h-auto px-6 py-6 flex justify-start -mt-7">
          <h2 className="text-2xl font-semibold">
            <Link
              to={
                "/arsip-berita/pbi-dan-stami-gelar-seminar-tentang-menjadi-generasi-milenial-yang-cerdas-dan-kritis"
              }
            >
              PBI Dan STAMI Gelar Seminar Tentang Menjadi Generasi Milenial Yang
              Cerdas Dan Kritis
            </Link>
          </h2>
        </div>
      </div>

      {/* --------------------------------->>>>>>>>>> BERITA 4 <<<<<<<<<<--------------------------------- */}
      <div className="border-solid border-gray-400 p-7">
        <div>
          <Link to={"/arsip-berita/berbuka-puasa-bersama-anak-panti-asuhan"}>
            <img
              src="/images/berbuka-puasa-bersama-anak-panti-asuhan/utama.jpg"
              alt="Tabloid"
              className="w-full h-96 flex justify-center mx-auto"
            />
          </Link>
          <div className="border-solid border-gray-400 px-6 py-4 text-center flex -mt-28">
            <div className="rounded-lg w-24 border border-black bg-white">
              <h1 className="bg-orange-500 rounded-t-md font-semibold text-xl text-white py-2">
                2019
              </h1>
              <p className="text-black text-3xl font-semibold">29</p>
              <p className="text-black font-semibold">May</p>
            </div>
          </div>
        </div>
        <div className="border-x border-b border-x-gray-400 border-b-gray-400 shadow-sm shadow-black w-full h-auto px-6 py-6 flex justify-start -mt-7">
          <h2 className="text-2xl font-semibold">
            <Link to={"/arsip-berita/berbuka-puasa-bersama-anak-panti-asuhan"}>
              Berbuka Puasa Bersama Anak Panti Asuhan
            </Link>
          </h2>
        </div>
      </div>

      {/* --------------------------------->>>>>>>>>> BERITA 5 <<<<<<<<<<--------------------------------- */}
      <div className="border-solid border-gray-400 p-7">
        <div>
          <Link to={"/arsip-berita/stami-dan-pbi-gelar-seminar-ilmiah"}>
            <img
              src="/images/stami-dan-pbi-gelar-seminar-ilmiah/utama.jpg"
              alt="Tabloid"
              className="w-full h-96 flex justify-center mx-auto"
            />
          </Link>
          <div className="border-solid border-gray-400 px-6 py-4 text-center flex -mt-28">
            <div className="rounded-lg w-24 border border-black bg-white">
              <h1 className="bg-orange-500 rounded-t-md font-semibold text-xl text-white py-2">
                2019
              </h1>
              <p className="text-black text-3xl font-semibold">26</p>
              <p className="text-black font-semibold">Apr</p>
            </div>
          </div>
        </div>
        <div className="border-x border-b border-x-gray-400 border-b-gray-400 shadow-sm shadow-black w-full h-auto px-6 py-6 flex justify-start -mt-7">
          <h2 className="text-2xl font-semibold">
            <Link to={"/arsip-berita/stami-dan-pbi-gelar-seminar-ilmiah"}>
              STAMI Dan PBI Gelar Seminar Ilmiah
            </Link>
          </h2>
        </div>
      </div>

      <nav className="my-10">
        <nav>
          <ul className="flex justify-center items-center">
            <li className="mx-4 py-2 px-4 bg-blue-500">
              {" "}
              <KiriIcon />{" "}
            </li>
            <li className="mx-4 py-2 bg-blue-500">
              <Link to={"/arsip-berita"} className="py-2 px-4">
                1
              </Link>
            </li>
            <li className="mx-4 py-2 bg-blue-500">
              <Link to={"/arsip-berita/2"} className="py-2 px-4">
                2
              </Link>
            </li>
            <li className="mx-4 py-2 bg-blue-500">
              <Link to={"/arsip-berita/3"} className="py-2 px-4">
                3
              </Link>
            </li>
            <li className="mx-4 py-2 bg-blue-500">
              <Link to={"/arsip-berita/4"} className="py-2 px-4">
                4
              </Link>
            </li>
            <li className="mx-4 py-2 bg-blue-500">
              <Link to={"/arsip-berita/5"} className="py-2 px-4">
                5
              </Link>
            </li>
            <li className="mx-4 py-2 bg-blue-500">
              <Link to={"/arsip-berita/6"} className="py-2 px-4">
                6
              </Link>
            </li>
            <li className="mx-4 py-2 bg-blue-500">
              <Link to={"/arsip-berita/7"} className="py-2 px-4">
                7
              </Link>
            </li>
            <li className="mx-4 py-2 px-4 bg-blue-500">
              {" "}
              <KananIcon />{" "}
            </li>
          </ul>
        </nav>
      </nav>
    </div>
  );
};

export default Berita6;
