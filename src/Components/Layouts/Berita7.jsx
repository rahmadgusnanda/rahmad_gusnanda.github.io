import { Link } from "react-router-dom";
import KiriIcon from "./KiriIcon";
import KananIcon from "./KananIcon";

const Berita7 = () => {
  return (
    <div className="sm:w-full">
      <h1 className="text-left py-4 text-3xl font-semibold justify-start pl-4 border border-b-gray-400 border-l-4 border-l-blue-500">
        Berita
      </h1>

      {/* --------------------------------->>>>>>>>>> BERITA 1 <<<<<<<<<<--------------------------------- */}
      <div className="border-solid border-gray-400 p-7">
        <div>
          <Link
            to={
              "/arsip-berita/pbi-dan-lp2pro-jalin-mou-dalam-penyelenggaraan-tempat-uji-kompetensi"
            }
          >
            <img
              src="/images/pbi-dan-lp2pro-jalin-mou-dalam-penyelenggaraan-tempat-uji-kompetensi/utama.jpg"
              alt="Tabloid"
              className="w-full h-96 flex justify-center mx-auto"
            />
          </Link>
          <div className="border-solid border-gray-400 px-6 py-4 text-center flex -mt-28">
            <div className="rounded-lg w-24 border border-black bg-white">
              <h1 className="bg-orange-500 rounded-t-md font-semibold text-xl text-white py-2">
                2019
              </h1>
              <p className="text-black text-3xl font-semibold">23</p>
              <p className="text-black font-semibold">Apr</p>
            </div>
          </div>
        </div>
        <div className="border-x border-b border-x-gray-400 border-b-gray-400 shadow-sm shadow-black w-full h-auto px-6 py-6 flex justify-start -mt-7">
          <h2 className="text-2xl font-semibold">
            <Link
              to={
                "/arsip-berita/pbi-dan-lp2pro-jalin-mou-dalam-penyelenggaraan-tempat-uji-kompetensi"
              }
            >
              PBI Dan LP2PRO Jalin MoU Dalam Penyelenggaraan Tempat Uji
              Kompetensi
            </Link>
          </h2>
        </div>
      </div>

      {/* --------------------------------->>>>>>>>>> BERITA 2 <<<<<<<<<<--------------------------------- */}
      <div className="border-solid border-gray-400 p-7">
        <div>
          <Link
            to={"/arsip-berita/pbi-dan-stami-selenggarakan-futsal-pbi-cup-2019"}
          >
            <img
              src="/images/pbi-dan-stami-selenggarakan-futsal-pbi-cup-2019/utama.jpg"
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
              <p className="text-black font-semibold">Mar</p>
            </div>
          </div>
        </div>
        <div className="border-x border-b border-x-gray-400 border-b-gray-400 shadow-sm shadow-black w-full h-auto px-6 py-6 flex justify-start -mt-7">
          <h2 className="text-2xl font-semibold">
            <Link
              to={
                "/arsip-berita/pbi-dan-stami-selenggarakan-futsal-pbi-cup-2019"
              }
            >
              PBI Dan STAMI Selenggarakan FUTSAL PBI CUP 2019
            </Link>
          </h2>
        </div>
      </div>

      {/* --------------------------------->>>>>>>>>> BERITA 3 <<<<<<<<<<--------------------------------- */}
      <div className="border-solid border-gray-400 p-7">
        <div>
          <Link
            to={
              "/arsip-berita/mahasiswa-pbi-turut-hadir-dalam-millennial-road-safety-festival-pematangsiantar"
            }
          >
            <img
              src="/images/mahasiswa-pbi-turut-hadir-dalam-millennial-road-safety-festival-pematangsiantar/utama.jpg"
              alt="Tabloid"
              className="w-full h-96 flex justify-center mx-auto"
            />
          </Link>
          <div className="border-solid border-gray-400 px-6 py-4 text-center flex -mt-28">
            <div className="rounded-lg w-24 border border-black bg-white">
              <h1 className="bg-orange-500 rounded-t-md font-semibold text-xl text-white py-2">
                2019
              </h1>
              <p className="text-black text-3xl font-semibold">03</p>
              <p className="text-black font-semibold">Mar</p>
            </div>
          </div>
        </div>
        <div className="border-x border-b border-x-gray-400 border-b-gray-400 shadow-sm shadow-black w-full h-auto px-6 py-6 flex justify-start -mt-7">
          <h2 className="text-2xl font-semibold">
            <Link
              to={
                "/arsip-berita/mahasiswa-pbi-turut-hadir-dalam-millennial-road-safety-festival-pematangsiantar"
              }
            >
              Mahasiswa PBI Turut Hadir Dalam Millennial Road Safety Festival
              Pematangsiantar
            </Link>
          </h2>
        </div>
      </div>

      {/* --------------------------------->>>>>>>>>> BERITA 4 <<<<<<<<<<--------------------------------- */}
      <div className="border-solid border-gray-400 p-7">
        <div>
          <Link to={"/arsip-berita/pbi-selenggarakan-pelatihan-hidroponik"}>
            <img
              src="/images/pbi-selenggarakan-pelatihan-hidroponik/utama.jpg"
              alt="Tabloid"
              className="w-full h-96 flex justify-center mx-auto"
            />
          </Link>
          <div className="border-solid border-gray-400 px-6 py-4 text-center flex -mt-28">
            <div className="rounded-lg w-24 border border-black bg-white">
              <h1 className="bg-orange-500 rounded-t-md font-semibold text-xl text-white py-2">
                2019
              </h1>
              <p className="text-black text-3xl font-semibold">16</p>
              <p className="text-black font-semibold">Feb</p>
            </div>
          </div>
        </div>
        <div className="border-x border-b border-x-gray-400 border-b-gray-400 shadow-sm shadow-black w-full h-auto px-6 py-6 flex justify-start -mt-7">
          <h2 className="text-2xl font-semibold">
            <Link to={"/arsip-berita/pbi-selenggarakan-pelatihan-hidroponik"}>
              PBI Selenggarakan Pelatihan HIDROPONIK
            </Link>
          </h2>
        </div>
      </div>

      {/* --------------------------------->>>>>>>>>> BERITA 5 <<<<<<<<<<--------------------------------- */}
      <div className="border-solid border-gray-400 p-7">
        <div>
          <Link
            to={
              "/arsip-berita/pbi-turut-hadir-dalam-hut-pramuka-ke-ii-gugus-depan-325-326"
            }
          >
            <img
              src="/images/pbi-turut-hadir-dalam-hut-pramuka-ke-ii-gugus-depan-325-326/utama.jpg"
              alt="Tabloid"
              className="w-full h-96 flex justify-center mx-auto"
            />
          </Link>
          <div className="border-solid border-gray-400 px-6 py-4 text-center flex -mt-28">
            <div className="rounded-lg w-24 border border-black bg-white">
              <h1 className="bg-orange-500 rounded-t-md font-semibold text-xl text-white py-2">
                2019
              </h1>
              <p className="text-black text-3xl font-semibold">07</p>
              <p className="text-black font-semibold">Feb</p>
            </div>
          </div>
        </div>
        <div className="border-x border-b border-x-gray-400 border-b-gray-400 shadow-sm shadow-black w-full h-auto px-6 py-6 flex justify-start -mt-7">
          <h2 className="text-2xl font-semibold">
            <Link
              to={
                "/arsip-berita/pbi-turut-hadir-dalam-hut-pramuka-ke-ii-gugus-depan-325-326"
              }
            >
              PBI Turut Hadir Dalam HUT PRAMUKA Ke II GUGUS DEPAN 325-326
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

export default Berita7;
