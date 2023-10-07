import { Link } from "react-router-dom";
import KiriIcon from "./KiriIcon";
import KananIcon from "./KananIcon";

const Berita = () => {
  return (
    <div className="sm:w-full">
      <h1 className="text-left py-4 text-3xl font-semibold justify-start pl-4 border border-b-gray-400 border-l-4 border-l-blue-500">
        Berita
      </h1>

      {/* --------------------------------->>>>>>>>>> BERITA 1 <<<<<<<<<<--------------------------------- */}
      <div className="border-solid border-gray-400 p-7">
        <div>
          <Link to={"/arsip-berita/pengabdian-masyarakat-berbasis-penelitian"}>
            <img
              src="/images/pengabdian-masyarakat-berbasis-penelitian/utama.jpg"
              alt="Tabloid"
              className="w-full h-96 flex justify-center mx-auto"
            />
          </Link>
          <div className="border-solid border-gray-400 px-6 py-4 text-center flex -mt-28">
            <div className="rounded-lg w-24 border border-black bg-white">
              <h1 className="bg-orange-500 rounded-t-md font-semibold text-xl text-white py-2">
                2020
              </h1>
              <p className="text-black text-3xl font-semibold">19</p>
              <p className="text-black font-semibold">Aug</p>
            </div>
          </div>
        </div>
        <div className="border-x border-b border-x-gray-400 border-b-gray-400 shadow-sm shadow-black w-full h-auto px-6 py-6 flex justify-start -mt-7">
          <h2 className="text-2xl font-semibold">
            <Link
              to={"/arsip-berita/pengabdian-masyarakat-berbasis-penelitian"}
            >
              Pengabdian Masyarakat Berbasis Penelitian
            </Link>
          </h2>
        </div>
      </div>

      {/* --------------------------------->>>>>>>>>> BERITA 2 <<<<<<<<<<--------------------------------- */}
      <div className="border-solid border-gray-400 p-7">
        <div>
          <Link
            to={
              "/arsip-berita/pelaksanaan-sertifikasi-kompetensi-kerja-pskk-bnsp-bidang-teknisi-akuntansi-yunior"
            }
          >
            <img
              src="/images/pelaksanaan-sertifikasi-kompetensi-kerja-pskk-bnsp-bidang-teknisi-akuntansi-yunior/utama.jpg"
              alt="Tabloid"
              className="w-full h-96 flex justify-center mx-auto"
            />
          </Link>
          <div className="border-solid border-gray-400 px-6 py-4 text-center flex -mt-28">
            <div className="rounded-lg w-24 border border-black bg-white">
              <h1 className="bg-orange-500 rounded-t-md font-semibold text-xl text-white py-2">
                2020
              </h1>
              <p className="text-black text-3xl font-semibold">18</p>
              <p className="text-black font-semibold">Aug</p>
            </div>
          </div>
        </div>
        <div className="border-x border-b border-x-gray-400 border-b-gray-400 shadow-sm shadow-black w-full h-auto px-6 py-6 flex justify-start -mt-7">
          <h2 className="text-2xl font-semibold">
            <Link
              to={
                "/arsip-berita/pelaksanaan-sertifikasi-kompetensi-kerja-pskk-bnsp-bidang-teknisi-akuntansi-yunior"
              }
            >
              Pelaksanaan Sertifikasi Kompetensi Kerja (PSKK) BNSP Bidang
              Teknisi Akuntansi Yunior
            </Link>
          </h2>
        </div>
      </div>

      {/* --------------------------------->>>>>>>>>> BERITA 3 <<<<<<<<<<--------------------------------- */}
      <div className="border-solid border-gray-400 p-7">
        <div>
          <Link
            to={
              "/arsip-berita/stami-dan-pbi-jalin-mou-dengan-lembaga-multi-kompetensi-utama"
            }
          >
            <img
              src="/images/stami-dan-pbi-jalin-mou-dengan-lembaga-multi-kompetensi-utama/utama.jpg"
              alt="Tabloid"
              className="w-full h-96 flex justify-center mx-auto"
            />
          </Link>
          <div className="border-solid border-gray-400 px-6 py-4 text-center flex -mt-28">
            <div className="rounded-lg w-24 border border-black bg-white">
              <h1 className="bg-orange-500 rounded-t-md font-semibold text-xl text-white py-2">
                2020
              </h1>
              <p className="text-black text-3xl font-semibold">03</p>
              <p className="text-black font-semibold">Aug</p>
            </div>
          </div>
        </div>
        <div className="border-x border-b border-x-gray-400 border-b-gray-400 shadow-sm shadow-black w-full h-auto px-6 py-6 flex justify-start -mt-7">
          <h2 className="text-2xl font-semibold">
            <Link
              to={
                "/arsip-berita/stami-dan-pbi-jalin-mou-dengan-lembaga-multi-kompetensi-utama"
              }
            >
              STAMI Dan PBI Jalin MoU Dengan Lembaga Multi Kompetensi Utama
            </Link>
          </h2>
        </div>
      </div>

      {/* --------------------------------->>>>>>>>>> BERITA 4 <<<<<<<<<<--------------------------------- */}
      <div className="border-solid border-gray-400 p-7">
        <div>
          <Link
            to={
              "/arsip-berita/pertemuan-persahabatan-stami-pbi-dengan-tim-stie-lmii-medan"
            }
          >
            <img
              src="/images/pertemuan-persahabatan-stami-pbi-dengan-tim-stie-lmii-medan/utama.jpg"
              alt="Tabloid"
              className="w-full h-96 flex justify-center mx-auto"
            />
          </Link>
          <div className="border-solid border-gray-400 px-6 py-4 text-center flex -mt-28">
            <div className="rounded-lg w-24 border border-black bg-white">
              <h1 className="bg-orange-500 rounded-t-md font-semibold text-xl text-white py-2">
                2020
              </h1>
              <p className="text-black text-3xl font-semibold">09</p>
              <p className="text-black font-semibold">Jul</p>
            </div>
          </div>
        </div>
        <div className="border-x border-b border-x-gray-400 border-b-gray-400 shadow-sm shadow-black w-full h-auto px-6 py-6 flex justify-start -mt-7">
          <h2 className="text-2xl font-semibold">
            <Link
              to={
                "/arsip-berita/pertemuan-persahabatan-stami-pbi-dengan-tim-stie-lmii-medan"
              }
            >
              Pertemuan Persahabatan STAMI & PBI Dengan Tim STIE LMII Medan
            </Link>
          </h2>
        </div>
      </div>

      {/* --------------------------------->>>>>>>>>> BERITA 5 <<<<<<<<<<--------------------------------- */}
      <div className="border-solid border-gray-400 p-7">
        <div>
          <Link
            to={
              "/arsip-berita/stami-menerima-penghargaan-smart-campus-awards-2020-dalam-kategori-best-indonesian-smart-campus-in-creating-quality-graduates"
            }
          >
            <img
              src="/images/stami-menerima-penghargaan-smart-campus-awards-2020-dalam-kategori-best-indonesian-smart-campus-in-creating-quality-graduates/utama.jpg"
              alt="Tabloid"
              className="w-full h-96 flex justify-center mx-auto"
            />
          </Link>
          <div className="border-solid border-gray-400 px-6 py-4 text-center flex -mt-28">
            <div className="rounded-lg w-24 border border-black bg-white">
              <h1 className="bg-orange-500 rounded-t-md font-semibold text-xl text-white py-2">
                2020
              </h1>
              <p className="text-black text-3xl font-semibold">09</p>
              <p className="text-black font-semibold">Jul</p>
            </div>
          </div>
        </div>
        <div className="border-x border-b border-x-gray-400 border-b-gray-400 shadow-sm shadow-black w-full h-auto px-6 py-6 flex justify-start -mt-7">
          <h2 className="text-2xl font-semibold">
            <Link
              to={
                "/arsip-berita/stami-menerima-penghargaan-smart-campus-awards-2020-dalam-kategori-best-indonesian-smart-campus-in-creating-quality-graduates"
              }
            >
              STAMI Menerima Penghargaan SMART CAMPUS AWARDS 2020 Dalam Kategori
              "Best Indonesian Smart Campus In Creating Quality Graduates"
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

export default Berita;
