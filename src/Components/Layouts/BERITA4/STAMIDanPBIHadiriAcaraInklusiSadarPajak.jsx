import BeritaTerbaru from "../BeritaTerbaru";
import ClockIcon from "../ClockIcon";
import FacebookComment from "../FacebookComment";
import FacebookIcon from "../FacebookIcon";
import TwitterIcon from "../TwitterIcon";

const STAMIDanPBIHadiriAcaraInklusiSadarPajak = () => {
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
                      STAMI Dan PBI Hadiri Acara Inklusi Sadar Pajak
                    </h1>
                    <div className="flex my-4">
                      <ClockIcon />
                      <p className="ml-2">Nov 25, 2019</p>
                    </div>
                    <img
                      src="/images/stami-dan-pbi-hadiri-acara-inklusi-sadar-pajak/utama.jpg"
                      className="w-full h-full flex justify-center mx-auto my-2"
                    />

                    <div className="text-justify">
                      <p className="my-4">
                        Sekolah Tinggi Akuntansi dan Manajemen Indonesia (STAMI)
                        & Politeknik Bisnis Indonesia (PBI) menghadiri Acara
                        Inklusi Sadar Pajak di Gedung Kanwil DJP Sumut II
                        Pematangsiantar, (Jumat, 22 November 2019)
                      </p>

                      <p className="my-4">
                        Acara yang diikuti perwakilan dari 25 Pimpinan Perguruan
                        Tinggi Swasta ini dibuka oleh Plt kepala kanwil diwakili
                        oleh Kabid P2Humas Kanwil DJP Sumut II, Muhammad Faisal
                        Artjan.
                      </p>

                      <p className="my-4">
                        Tujuan Kegiatan ini mengajak semua Perguruan Tinggi /
                        para Dosen untuk menyamakan persepsi tentang pajak dan
                        bagaimana pembelajaran kesadaran pajak dalam perkuliahan
                        sehingga dapat terwujud generasi emas Indonesia yang
                        cerdas dan sadar pajak.
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
                    href="/arsip-berita/mahasiswa-stami-dan-pbi-melakukan-studi-tour-ke-gundaling-farm"
                    className="w-full"
                  >
                    <div className="hover:text-orange-400 w-full h-full p-6">
                      <span className="text-sm text-gray-400 ">
                        Previous Post
                      </span>
                      <p className="text-lg font-semibold">
                        Mahasiswa STAMI Dan PBI Melakukan Studi Tour Ke
                        Gundaling Farm
                      </p>
                    </div>
                  </a>
                </div>

                <div className="border-r border-gray-500 text-right w-1/2">
                  <a
                    href="/arsip-berita/stami-hadiri-pelaksanaan-monitoring-dan-evaluasi-pemetaan-mutu-pelaksanaaan-tridharma-perguruan-tinggi"
                    className="w-full"
                  >
                    <div className="hover:text-orange-400 w-full h-full p-6">
                      <span className="text-sm text-gray-400 ">Next Post</span>
                      <p className="text-lg font-semibold">
                        STAMI Hadiri Pelaksanaan Monitoring Dan Evaluasi
                        Pemetaan Mutu Pelaksanaaan Tridharma Perguruan Tinggi
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

export default STAMIDanPBIHadiriAcaraInklusiSadarPajak;
