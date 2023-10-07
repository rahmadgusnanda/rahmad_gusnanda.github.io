import { Link } from "react-router-dom";
import ClockIcon from "./ClockIcon";

const BeritaTerbaru = () => {
  return (
    <div>
      <h1 className="text-left py-4 text-3xl font-semibold justify-start pl-4 border border-b-gray-400 border-l-4 border-l-blue-500">
        Berita Terbaru
      </h1>
      <div className="flex p-4">
        <figure className="flex">
          <img
            src="/images/pengabdian-masyarakat-berbasis-penelitian/utama.jpg"
            alt="Gambar "
            className="w-24 h-20"
          />

          <figcaption className="justify-center ml-2">
            <p className="text-md font-semibold hover:text-orange-300 -mt-1.5">
              <Link
                to={"/arsip-berita/pengabdian-masyarakat-berbasis-penelitian"}
              >
                Pengabdian Masyarakat Berbasis Penelitian
              </Link>
            </p>

            <div className="flex my-1">
              <ClockIcon />
              <p className="ml-2">Aug 19, 2020</p>
            </div>
          </figcaption>
        </figure>
      </div>

      <div className="flex  p-4">
        <figure className="flex">
          <img
            src="/images/pelaksanaan-sertifikasi-kompetensi-kerja-pskk-bnsp-bidang-teknisi-akuntansi-yunior/utama.jpg"
            alt="Gambar 1"
            className="w-24 h-20"
          />

          <figcaption className="justify-center ml-2">
            <p className="text-md font-semibold hover:text-orange-300 -mt-1.5">
              <Link
                to={
                  "/arsip-berita/pelaksanaan-sertifikasi-kompetensi-kerja-pskk-bnsp-bidang-teknisi-akuntansi-yunior"
                }
              >
                Pelaksanaan Sertifikasi Kompetensi Kerja (PSKK) BNSP Bidang
                Teknisi Akuntansi Yunior
              </Link>
            </p>

            <div className="flex my-1">
              <ClockIcon />
              <p className="ml-2">Aug 18, 2020</p>
            </div>
          </figcaption>
        </figure>
      </div>

      <div className="flex p-4">
        <figure className="flex">
          <img
            src="/images/stami-dan-pbi-jalin-mou-dengan-lembaga-multi-kompetensi-utama/utama.jpg"
            alt="Gambar 1"
            className="w-24 h-20"
          />

          <figcaption className="justify-center ml-2">
            <p className="text-md font-semibold hover:text-orange-300 -mt-1.5">
              <Link
                to={
                  "/arsip-berita/stami-dan-pbi-jalin-mou-dengan-lembaga-multi-kompetensi-utama"
                }
              >
                STAMI Dan PBI Jalin MoU Dengan Lembaga Multi Kompetensi Utama
              </Link>
            </p>

            <div className="flex my-1">
              <ClockIcon />
              <p className="ml-2">Aug 03, 2020</p>
            </div>
          </figcaption>
        </figure>
      </div>

      <div className="flex p-4">
        <figure className="flex">
          <img
            src="/images/pertemuan-persahabatan-stami-pbi-dengan-tim-stie-lmii-medan/utama.jpg"
            alt="Gambar 1"
            className="w-24 h-20"
          />

          <figcaption className="justify-center ml-2">
            <p className="text-md font-semibold hover:text-orange-300 -mt-1.5">
              <Link
                to={
                  "/arsip-berita/pertemuan-persahabatan-stami-pbi-dengan-tim-stie-lmii-medan"
                }
              >
                Pertemuan Persahabatan STAMI & PBI Dengan Tim STIE LMII Medan
              </Link>
            </p>

            <div className="flex my-1">
              <ClockIcon />
              <p className="ml-2">Jul 09, 2020</p>
            </div>
          </figcaption>
        </figure>
      </div>

      <div className="flex p-4">
        <figure className="flex">
          <img
            src="/images/stami-menerima-penghargaan-smart-campus-awards-2020-dalam-kategori-best-indonesian-smart-campus-in-creating-quality-graduates/utama.jpg"
            alt="Gambar 1"
            className="w-24 h-20"
          />

          <figcaption className="justify-center ml-2">
            <p className="text-md font-semibold hover:text-orange-300 -mt-1.5">
              <Link
                to={
                  "/arsip-berita/stami-menerima-penghargaan-smart-campus-awards-2020-dalam-kategori-best-indonesian-smart-campus-in-creating-quality-graduates"
                }
              >
                STAMI Menerima Penghargaan SMART CAMPUS AWARDS 2020 Dalam
                Kategori "Best Indonesian Smart Campus In Creating Quality
                Graduates"
              </Link>
            </p>

            <div className="flex my-1">
              <ClockIcon />
              <p className="ml-2">May 13, 2020</p>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default BeritaTerbaru;
