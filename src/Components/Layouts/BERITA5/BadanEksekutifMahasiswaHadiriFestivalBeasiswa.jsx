import BeritaTerbaru from "../BeritaTerbaru";
import ClockIcon from "../ClockIcon";
import FacebookComment from "../FacebookComment";
import FacebookIcon from "../FacebookIcon";
import TwitterIcon from "../TwitterIcon";

const BadanEksekutifMahasiswaHadiriFestivalBeasiswa = () => {
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
                      Badan Eksekutif Mahasiswa Hadiri Festival Beasiswa
                    </h1>
                    <div className="flex my-4">
                      <ClockIcon />
                      <p className="ml-2">Aug 01, 2019</p>
                    </div>
                    <img
                      src="/images/badan-eksekutif-mahasiswa-hadiri-festival-beasiswa/utama.jpg"
                      className="w-full h-full flex justify-center mx-auto my-2"
                    />

                    <div className="text-justify">
                      <p className="my-4">
                        Perwakilan Mahasiswa PBI Kristian R Parulian Silitonga
                        dan Dony Simamarta mengikuti Festival Beasiswa di Medan
                        bersama Bapak Arwin Tannuary bagian dari kemahasiswaan
                        PBI ( Sabtu, 27 Juli 2019).
                      </p>

                      <p className="my-4">
                        Berbagai kegiatan seperti Scholarship Forum, Scholarship
                        Workshop & Seminar, Scholarship SUPERMENTOR, Scholarship
                        & Education Expo dan Inspiring Talk dari Bpk. Gubernur &
                        Wakil Gubernur Sumatera Utara, Koordinator LL DIKTI
                        wilayah I Sumatra Utara, Ketua WISH Pusat 2019, Plt.
                        Direktur Utama LPDP dan lainya.
                      </p>

                      <p className="my-4">
                        Mahasiswa PBI juga diberi kesempatan untuk Ujian TOEFL
                        dan Workshop TOEFL yang merupakan salah satu syarat
                        untuk melanjutkan kuliah ke Universitas Luar Negeri.
                      </p>
                    </div>

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
                    href="/arsip-berita/ldp2pro-dan-lsp-paras-bnsp-bersama-stami-dan-pbi-sukses-melaksanakan-sertifikasi-kompetensi"
                    className="w-full"
                  >
                    <div className="hover:text-orange-400 w-full h-full p-6">
                      <span className="text-sm text-gray-400 ">
                        Previous Post
                      </span>
                      <p className="text-lg font-semibold">
                        LDP2PRO Dan LSP PARAS-BNSP Bersama STAMI Dan PBI SUKSES
                        Melaksanakan Sertifikasi Kompetensi
                      </p>
                    </div>
                  </a>
                </div>

                <div className="border-r border-gray-500 text-right w-1/2">
                  <a
                    href="/arsip-berita/pengenalan-kehidupan-kampus-kepada-mahasiswa-baru"
                    className="w-full"
                  >
                    <div className="hover:text-orange-400 w-full h-full p-6">
                      <span className="text-sm text-gray-400 ">Next Post</span>
                      <p className="text-lg font-semibold">
                        Pengenalan Kehidupan Kampus Kepada Mahasiswa Baru
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

export default BadanEksekutifMahasiswaHadiriFestivalBeasiswa;
