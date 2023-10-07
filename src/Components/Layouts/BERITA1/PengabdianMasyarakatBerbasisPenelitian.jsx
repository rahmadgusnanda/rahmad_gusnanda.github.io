import BeritaTerbaru from "../BeritaTerbaru";
import ClockIcon from "../ClockIcon";
import FacebookComment from "../FacebookComment";
import FacebookIcon from "../FacebookIcon";
import TwitterIcon from "../TwitterIcon";

const PengabdianMasyarakatBerbasisPenelitian = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="h-max w-screen my-20 mt-36">
        <div className="mx-16">
          {/* --------------------------------------->>>>>    BERITA     <<<<<--------------------------------------- */}
          <div className="flex justify-center grid-cols-2 mx-auto my-10">
            <div className="w-4/6">
              <div className="border border-gray-400 mx-6">
                <div className="p-7">
                  <div>
                    <h1 className="text-4xl font-semibold faceb">
                      Pengabdian Masyarakat Berbasis Penelitian
                    </h1>
                    <div className="flex my-4">
                      <ClockIcon />
                      <p className="ml-2">Aug 19, 2020</p>
                    </div>
                    <img
                      src="/images/pengabdian-masyarakat-berbasis-penelitian/utama.jpg"
                      className="w-full h-full flex justify-center mx-auto my-2"
                    />

                    <div className="text-justify">
                      <p className="my-4">
                        Pada Hari Selasa, 18 Agustus 2020, Civitas Sekolah
                        Tinggi Akuntansi dan Manajemen Indonesia dan Politeknik
                        Bisnis Indonesia Murni sadar mendapat Seminar tentang
                        Aplikasi Manager Referensi Mendeley untuk mendukung
                        Penulisan Ilmiah para dosen oleh Bapak Prof Dr. Hasan
                        Basri Tarmizi, SU, MS. dan Bapak Dr. Iskandar Muda
                        Damanik, SE., M.Si.Ak, CA, CSP, CSRS, CPA dari Lembaga
                        Pengabdian Masyarakat Universitas Sumatera Utara Medan.
                      </p>

                      <p>
                        Dengan adanya pelatihan untuk menunjang produktivitas
                        Dosen dalam melaksanakan Tridharma Perguruan Tinggi,
                        STAMI & PBI berkomitmen untuk terus meningkatkan
                        kualitas serta kuantitas penelitian dan pengabdian
                        kepada masyarakat kota Pematangsiantar kedepannya.
                      </p>
                    </div>

                    <img
                      src="/images/pengabdian-masyarakat-berbasis-penelitian/1.jpg"
                      className="w-full h-full flex justify-center mx-auto my-4"
                    />
                    <img
                      src="/images/pengabdian-masyarakat-berbasis-penelitian/2.jpg"
                      className="w-full h-full flex justify-center mx-auto my-4"
                    />
                    <img
                      src="/images/pengabdian-masyarakat-berbasis-penelitian/3.jpg"
                      className="w-full h-full flex justify-center mx-auto my-4"
                    />
                    <img
                      src="/images/pengabdian-masyarakat-berbasis-penelitian/4.jpg"
                      className="w-full h-full flex justify-center mx-auto my-4"
                    />

                    <div className="my-4">
                      <h1>SHARE THIS POST</h1>
                      <hr className="border-blue-500 border-b-2 w-1/5" />
                    </div>

                    <div className="flex items-center">
                      <div className="bg-blue-700 w-28 flex p-1 rounded-md mr-4">
                        <a
                          href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fstami.ac.id%2Fagenda%2F2020%2F07%2Fvlog-competition"
                          className="flex items-center"
                        >
                          <FacebookIcon warna="text-white" />
                          <p className="text-white">Share</p>
                        </a>
                      </div>

                      <div className="bg-sky-500 w-28 flex p-1 rounded-md">
                        <a
                          href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fstami.ac.id%2Fagenda%2F2020%2F07%2Fvlog-competition"
                          className="flex items-center"
                        >
                          <TwitterIcon />
                          <p className="text-white">Share</p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border border-gray-500 flex mx-6 my-10">
                <div className="border-r border-gray-500 text-left w-1/2">
                  <a
                    href="/arsip-berita/pelaksanaan-sertifikasi-kompetensi-kerja-pskk-bnsp-bidang-teknisi-akuntansi-yunior"
                    className="w-full"
                  >
                    <div className="hover:text-orange-400 w-full h-full p-6">
                      <span className="text-sm text-gray-400 ">
                        Previous Post
                      </span>
                      <p className="text-lg font-semibold">
                        Pelaksanaan Sertifikasi Kompetensi Kerja (PSKK) BNSP
                        Bidang Teknisi Akuntansi Yunior
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              <div>
                <FacebookComment />
              </div>
            </div>

            {/* ---------------------------------->>>>>     BERITA TERBARU     <<<<<---------------------------------- */}
            <div className="border border-gray-400 w-2/6 h-full mx-2">
              <BeritaTerbaru />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PengabdianMasyarakatBerbasisPenelitian;
