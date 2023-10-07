import { Link } from "react-router-dom";
import KiriIcon from "./KiriIcon";
import KananIcon from "./KananIcon";

const Berita3 = () => {
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
              "/arsip-berita/pbi-dan-stami-hadiri-seminar-peluang-dan-tantangan-ekonomi-siantar-simalungun-tahun-2020"
            }
          >
            <img
              src="/images/pbi-dan-stami-hadiri-seminar-peluang-dan-tantangan-ekonomi-siantar-simalungun-tahun-2020/utama.jpg"
              className="w-full h-96 flex justify-center mx-auto"
            />
          </Link>
          <div className="border-solid border-gray-400 px-6 py-4 text-center flex -mt-28">
            <div className="rounded-lg w-24 border border-black bg-white">
              <h1 className="bg-orange-500 rounded-t-md font-semibold text-xl text-white py-2">
                2020
              </h1>
              <p className="text-black text-3xl font-semibold">05</p>
              <p className="text-black font-semibold">Mar</p>
            </div>
          </div>
        </div>
        <div className="border-x border-b border-x-gray-400 border-b-gray-400 shadow-sm shadow-black w-full h-auto px-6 py-6 flex justify-start -mt-7">
          <h2 className="text-2xl font-semibold">
            <Link
              to={
                "/arsip-berita/pbi-dan-stami-hadiri-seminar-peluang-dan-tantangan-ekonomi-siantar-simalungun-tahun-2020"
              }
            >
              PBI Dan STAMI Hadiri Seminar Peluang Dan Tantangan Ekonomi
              Siantar-Simalungun Tahun 2020
            </Link>
          </h2>
        </div>
      </div>

      {/* --------------------------------->>>>>>>>>> BERITA 2 <<<<<<<<<<--------------------------------- */}
      <div className="border-solid border-gray-400 p-7">
        <div>
          <Link
            to={
              "/arsip-berita/mahasiswa-stami-ikut-seleksi-calon-relawan-pajak-pematangsiantar"
            }
          >
            <img
              src="/images/mahasiswa-stami-berhasil-raih-peringkat-4-dalam-seleksi-calon-relawan-pajak-pematangsiantar/utama.jpg"
              className="w-full h-96 flex justify-center mx-auto"
            />
          </Link>
          <div className="border-solid border-gray-400 px-6 py-4 text-center flex -mt-28">
            <div className="rounded-lg w-24 border border-black bg-white">
              <h1 className="bg-orange-500 rounded-t-md font-semibold text-xl text-white py-2">
                2020
              </h1>
              <p className="text-black text-3xl font-semibold">21</p>
              <p className="text-black font-semibold">Feb</p>
            </div>
          </div>
        </div>
        <div className="border-x border-b border-x-gray-400 border-b-gray-400 shadow-sm shadow-black w-full h-auto px-6 py-6 flex justify-start -mt-7">
          <h2 className="text-2xl font-semibold">
            <Link
              to={
                "/arsip-berita/mahasiswa-stami-ikut-seleksi-calon-relawan-pajak-pematangsiantar"
              }
            >
              Mahasiswa STAMI Ikut Seleksi Calon Relawan Pajak Pematangsiantar
            </Link>
          </h2>
        </div>
      </div>

      {/* --------------------------------->>>>>>>>>> BERITA 3 <<<<<<<<<<--------------------------------- */}
      <div className="border-solid border-gray-400 p-7">
        <div>
          <Link
            to={
              "/arsip-berita/pbi-dan-stami-hadiri-seminar-21st-century-pedagogical-teaching-skills-di-politeknik-wilmar-bisnis-indonesia"
            }
          >
            <img
              src="/images/pbi-dan-stami-hadiri-seminar-21st-century-pedagogical-teaching-skills-di-politeknik-wilmar-bisnis-indonesia/utama.jpg"
              className="w-full h-96 flex justify-center mx-auto"
            />
          </Link>
          <div className="border-solid border-gray-400 px-6 py-4 text-center flex -mt-28">
            <div className="rounded-lg w-24 border border-black bg-white">
              <h1 className="bg-orange-500 rounded-t-md font-semibold text-xl text-white py-2">
                2020
              </h1>
              <p className="text-black text-3xl font-semibold">08</p>
              <p className="text-black font-semibold">Feb</p>
            </div>
          </div>
        </div>
        <div className="border-x border-b border-x-gray-400 border-b-gray-400 shadow-sm shadow-black w-full h-auto px-6 py-6 flex justify-start -mt-7">
          <h2 className="text-2xl font-semibold">
            <Link
              to={
                "/arsip-berita/pbi-dan-stami-hadiri-seminar-21st-century-pedagogical-teaching-skills-di-politeknik-wilmar-bisnis-indonesia"
              }
            >
              PBI Dan STAMI Hadiri Seminar 21st Century Pedagogical Teaching
              Skills Di Politeknik Wilmar Bisnis Indonesia
            </Link>
          </h2>
        </div>
      </div>

      {/* --------------------------------->>>>>>>>>> BERITA 4 <<<<<<<<<<--------------------------------- */}
      <div className="border-solid border-gray-400 p-7">
        <div>
          <Link
            to={
              "/arsip-berita/pbi-dan-stami-gelar-seminar-speaking-confidence-with-public-speaking"
            }
          >
            <img
              src="/images/pbi-dan-stami-gelar-seminar-speaking-confidence-with-public-speaking/utama.jpg"
              className="w-full h-96 flex justify-center mx-auto"
            />
          </Link>
          <div className="border-solid border-gray-400 px-6 py-4 text-center flex -mt-28">
            <div className="rounded-lg w-24 border border-black bg-white">
              <h1 className="bg-orange-500 rounded-t-md font-semibold text-xl text-white py-2">
                2020
              </h1>
              <p className="text-black text-3xl font-semibold">23</p>
              <p className="text-black font-semibold">Jan</p>
            </div>
          </div>
        </div>
        <div className="border-x border-b border-x-gray-400 border-b-gray-400 shadow-sm shadow-black w-full h-auto px-6 py-6 flex justify-start -mt-7">
          <h2 className="text-2xl font-semibold">
            <Link
              to={
                "/arsip-berita/pbi-dan-stami-gelar-seminar-speaking-confidence-with-public-speaking"
              }
            >
              PBI Dan STAMI Gelar Seminar SPEAKING CONFIDENCE WITH PUBLIC
              SPEAKING
            </Link>
          </h2>
        </div>
      </div>

      {/* --------------------------------->>>>>>>>>> BERITA 5 <<<<<<<<<<--------------------------------- */}
      <div className="border-solid border-gray-400 p-7">
        <div>
          <Link to={"/arsip-berita/perayaan-natal-bersama"}>
            <img
              src="/images/perayaan-natal-bersama/utama.jpg"
              className="w-full h-96 flex justify-center mx-auto"
            />
          </Link>
          <div className="border-solid border-gray-400 px-6 py-4 text-center flex -mt-28">
            <div className="rounded-lg w-24 border border-black bg-white">
              <h1 className="bg-orange-500 rounded-t-md font-semibold text-xl text-white py-2">
                2019
              </h1>
              <p className="text-black text-3xl font-semibold">20</p>
              <p className="text-black font-semibold">Dec</p>
            </div>
          </div>
        </div>
        <div className="border-x border-b border-x-gray-400 border-b-gray-400 shadow-sm shadow-black w-full h-auto px-6 py-6 flex justify-start -mt-7">
          <h2 className="text-2xl font-semibold">
            <Link to={"/arsip-berita/perayaan-natal-bersama"}>
              Perayaan Natal Bersama
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

export default Berita3;
