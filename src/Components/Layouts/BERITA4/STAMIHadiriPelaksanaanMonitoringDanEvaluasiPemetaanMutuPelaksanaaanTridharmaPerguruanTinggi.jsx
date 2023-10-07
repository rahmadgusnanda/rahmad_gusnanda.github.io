import BeritaTerbaru from "../BeritaTerbaru";
import ClockIcon from "../ClockIcon";
import FacebookComment from "../FacebookComment";
import FacebookIcon from "../FacebookIcon";
import TwitterIcon from "../TwitterIcon";

const STAMIHadiriPelaksanaanMonitoringDanEvaluasiPemetaanMutuPelaksanaaanTridharmaPerguruanTinggi =
  () => {
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
                        STAMI Hadiri Pelaksanaan Monitoring Dan Evaluasi
                        Pemetaan Mutu Pelaksanaaan Tridharma Perguruan Tinggi
                      </h1>
                      <div className="flex my-4">
                        <ClockIcon />
                        <p className="ml-2">Nov 29, 2019</p>
                      </div>
                      <img
                        src="/images/stami-hadiri-pelaksanaan-monitoring-dan-evaluasi-pemetaan-mutu-pelaksanaaan-tridharma-perguruan-tinggi/utama.jpg"
                        className="w-full h-full flex justify-center mx-auto my-2"
                      />

                      <div className="text-justify">
                        <p className="my-4">
                          Ketua Sekolah Tinggi Akuntansi dan Manajemen Indonesia
                          ( STAMI ) beserta Dosen dan Staff menghadiri undangan
                          dari LLDIKTI Wilayah I dalam pelaksanaan Monitoring
                          dan Evaluasi Pemetaan Mutu Pelaksanaaan Tridharma
                          Perguruan Tinggi di Medan.
                        </p>

                        <p className="my-4">
                          Pelaksanaan Monitoring dan Evaluasi yang diketuai oleh
                          Bapak Syafruddin, S.T, M.M, serta Bapak Izhar
                          Nasution, Bapak Dr. Syafruddin Ginting Sugihen, S.E.,
                          Mafis, Ak, CPA., CA, dan Bapak Yuris Danilwan, S.E.,
                          M.Si., Ph.D berjalan dengan baik dan lancar.
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
                      href="/arsip-berita/stami-dan-pbi-hadiri-acara-inklusi-sadar-pajak"
                      className="w-full"
                    >
                      <div className="hover:text-orange-400 w-full h-full p-6">
                        <span className="text-sm text-gray-400 ">
                          Previous Post
                        </span>
                        <p className="text-lg font-semibold">
                          STAMI Dan PBI Hadiri Acara Inklusi Sadar Pajak
                        </p>
                      </div>
                    </a>
                  </div>

                  <div className="border-r border-gray-500 text-right w-1/2">
                    <a
                      href="/arsip-berita/perayaan-natal-bersama"
                      className="w-full"
                    >
                      <div className="hover:text-orange-400 w-full h-full p-6">
                        <span className="text-sm text-gray-400 ">
                          Next Post
                        </span>
                        <p className="text-lg font-semibold">
                          Perayaan Natal Bersama
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

export default STAMIHadiriPelaksanaanMonitoringDanEvaluasiPemetaanMutuPelaksanaaanTridharmaPerguruanTinggi;
