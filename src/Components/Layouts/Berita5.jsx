import { Link } from "react-router-dom";
import KiriIcon from "./KiriIcon";
import KananIcon from "./KananIcon";

const Berita5 = () => {
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
              "/arsip-berita/mahasiswa-stami-raih-juara-2-puteri-pariwisata-pematangsiantar"
            }
          >
            <img
              src="/images/mahasiswa-stami-raih-juara-2-puteri-pariwisata-pematangsiantar/utama.jpg"
              className="w-full h-96 flex justify-center mx-auto"
            />
          </Link>
          <div className="border-solid border-gray-400 px-6 py-4 text-center flex -mt-28">
            <div className="rounded-lg w-24 border border-black bg-white">
              <h1 className="bg-orange-500 rounded-t-md font-semibold text-xl text-white py-2">
                2019
              </h1>
              <p className="text-black text-3xl font-semibold">11</p>
              <p className="text-black font-semibold">Oct</p>
            </div>
          </div>
        </div>
        <div className="border-x border-b border-x-gray-400 border-b-gray-400 shadow-sm shadow-black w-full h-auto px-6 py-6 flex justify-start -mt-7">
          <h2 className="text-2xl font-semibold">
            <Link
              to={
                "/arsip-berita/mahasiswa-stami-raih-juara-2-puteri-pariwisata-pematangsiantar"
              }
            >
              Mahasiswa STAMI Raih Juara 2 Puteri Pariwisata Pematangsiantar
            </Link>
          </h2>
        </div>
      </div>

      {/* --------------------------------->>>>>>>>>> BERITA 2 <<<<<<<<<<--------------------------------- */}
      <div className="border-solid border-gray-400 p-7">
        <div>
          <Link
            to={
              "/arsip-berita/stami-pbi-dan-usi-berkolaborasi-dalam-meningkatkan-mutu-pendidikan-pematangsiantar-dan-simalungun"
            }
          >
            <img
              src="/images/stami-pbi-dan-usi-berkolaborasi-dalam-meningkatkan-mutu-pendidikan-pematangsiantar-dan-simalungun/utama.jpg"
              className="w-full h-96 flex justify-center mx-auto"
            />
          </Link>
          <div className="border-solid border-gray-400 px-6 py-4 text-center flex -mt-28">
            <div className="rounded-lg w-24 border border-black bg-white">
              <h1 className="bg-orange-500 rounded-t-md font-semibold text-xl text-white py-2">
                2019
              </h1>
              <p className="text-black text-3xl font-semibold">10</p>
              <p className="text-black font-semibold">Sep</p>
            </div>
          </div>
        </div>
        <div className="border-x border-b border-x-gray-400 border-b-gray-400 shadow-sm shadow-black w-full h-auto px-6 py-6 flex justify-start -mt-7">
          <h2 className="text-2xl font-semibold">
            <Link
              to={
                "/arsip-berita/stami-pbi-dan-usi-berkolaborasi-dalam-meningkatkan-mutu-pendidikan-pematangsiantar-dan-simalungun"
              }
            >
              STAMI, PBI Dan USI Berkolaborasi Dalam Meningkatkan Mutu
              Pendidikan Pematangsiantar Dan Simalungun
            </Link>
          </h2>
        </div>
      </div>

      {/* --------------------------------->>>>>>>>>> BERITA 3 <<<<<<<<<<--------------------------------- */}
      <div className="border-solid border-gray-400 p-7">
        <div>
          <Link
            to={
              "/arsip-berita/pengenalan-kehidupan-kampus-kepada-mahasiswa-baru"
            }
          >
            <img
              src="/images/pengenalan-kehidupan-kampus-kepada-mahasiswa-baru/utama.jpg"
              className="w-full h-96 flex justify-center mx-auto"
            />
          </Link>
          <div className="border-solid border-gray-400 px-6 py-4 text-center flex -mt-28">
            <div className="rounded-lg w-24 border border-black bg-white">
              <h1 className="bg-orange-500 rounded-t-md font-semibold text-xl text-white py-2">
                2019
              </h1>
              <p className="text-black text-3xl font-semibold">06</p>
              <p className="text-black font-semibold">Jan</p>
            </div>
          </div>
        </div>
        <div className="border-x border-b border-x-gray-400 border-b-gray-400 shadow-sm shadow-black w-full h-auto px-6 py-6 flex justify-start -mt-7">
          <h2 className="text-2xl font-semibold">
            <Link
              to={
                "/arsip-berita/pengenalan-kehidupan-kampus-kepada-mahasiswa-baru"
              }
            >
              Pengenalan Kehidupan Kampus Kepada Mahasiswa Baru
            </Link>
          </h2>
        </div>
      </div>

      {/* --------------------------------->>>>>>>>>> BERITA 4 <<<<<<<<<<--------------------------------- */}
      <div className="border-solid border-gray-400 p-7">
        <div>
          <Link
            to={
              "/arsip-berita/badan-eksekutif-mahasiswa-hadiri-festival-beasiswa"
            }
          >
            <img
              src="/images/badan-eksekutif-mahasiswa-hadiri-festival-beasiswa/utama.jpg"
              className="w-full h-96 flex justify-center mx-auto"
            />
          </Link>
          <div className="border-solid border-gray-400 px-6 py-4 text-center flex -mt-28">
            <div className="rounded-lg w-24 border border-black bg-white">
              <h1 className="bg-orange-500 rounded-t-md font-semibold text-xl text-white py-2">
                2019
              </h1>
              <p className="text-black text-3xl font-semibold">01</p>
              <p className="text-black font-semibold">Aug</p>
            </div>
          </div>
        </div>
        <div className="border-x border-b border-x-gray-400 border-b-gray-400 shadow-sm shadow-black w-full h-auto px-6 py-6 flex justify-start -mt-7">
          <h2 className="text-2xl font-semibold">
            <Link
              to={
                "/arsip-berita/badan-eksekutif-mahasiswa-hadiri-festival-beasiswa"
              }
            >
              Badan Eksekutif Mahasiswa Hadiri Festival Beasiswa.
            </Link>
          </h2>
        </div>
      </div>

      {/* --------------------------------->>>>>>>>>> BERITA 5 <<<<<<<<<<--------------------------------- */}
      <div className="border-solid border-gray-400 p-7">
        <div>
          <Link
            to={
              "/arsip-berita/ldp2pro-dan-lsp-paras-bnsp-bersama-stami-dan-pbi-sukses-melaksanakan-sertifikasi-kompetensi"
            }
          >
            <img
              src="/images/ldp2pro-dan-lsp-paras-bnsp-bersama-stami-dan-pbi-sukses-melaksanakan-sertifikasi-kompetensi/utama.jpg"
              className="w-full h-96 flex justify-center mx-auto"
            />
          </Link>
          <div className="border-solid border-gray-400 px-6 py-4 text-center flex -mt-28">
            <div className="rounded-lg w-24 border border-black bg-white">
              <h1 className="bg-orange-500 rounded-t-md font-semibold text-xl text-white py-2">
                2019
              </h1>
              <p className="text-black text-3xl font-semibold">17</p>
              <p className="text-black font-semibold">Jul</p>
            </div>
          </div>
        </div>
        <div className="border-x border-b border-x-gray-400 border-b-gray-400 shadow-sm shadow-black w-full h-auto px-6 py-6 flex justify-start -mt-7">
          <h2 className="text-2xl font-semibold">
            <Link
              to={
                "/arsip-berita/ldp2pro-dan-lsp-paras-bnsp-bersama-stami-dan-pbi-sukses-melaksanakan-sertifikasi-kompetensi"
              }
            >
              LDP2PRO Dan LSP PARAS-BNSP Bersama STAMI Dan PBI SUKSES
              Melaksanakan Sertifikasi Kompetensi
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

export default Berita5;
