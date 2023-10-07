import BeritaTerbaru from "../BeritaTerbaru";
import ClockIcon from "../ClockIcon";
import FacebookComment from "../FacebookComment";
import FacebookIcon from "../FacebookIcon";
import TwitterIcon from "../TwitterIcon";

const STAMIPBIDanAlumniKalamKudus83MelakukanAksiPeduliPencegahanCovid19 =
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
                        STAMI, PBI Dan Alumni Kalam Kudus 83 Melakukan Aksi
                        Peduli Pencegahan Covid-19
                      </h1>
                      <div className="flex my-4">
                        <ClockIcon />
                        <p className="ml-2">Apr 23, 2020</p>
                      </div>
                      <img
                        src="/images/stami-pbi-dan-alumni-kalam-kudus-83-melakukan-aksi-peduli-pencegahan-covid-19/utama.jpg"
                        alt="pengabdian-masyarakat"
                        className="w-full h-full flex justify-center mx-auto my-2"
                      />

                      <div className="text-justify">
                        <p className="my-4">
                          Tim Alumni Kalam Kudus 83 melaksanakan aksi
                          kemanusiaan sebagai wujud Peduli sekitar kita terhadap
                          Pandemi Virus Covid-19 . KAMPUS MURNI SADAR (STAMI &
                          PBI) mendukung penuh Tim Alumni Kalam Kudus 83
                          melaksanakan aksi kemanusiaan dimana Pimpinan, Dosen,
                          dan Staff turun langsung kelapangan bersama-sama
                          membagi sepuluh ribu masker kepada masyarakat
                          Pematangsiantar.
                        </p>

                        <p className="my-4">
                          Selain Social Distancing & Stay at Home, Penggunaan
                          masker wajib dilakukan untuk pencegahan penularan
                          Virus Covid-19. Masyarakat Pematangsiantar sangat
                          senang dengan adanya aksi ini berharap Pandemi Virus
                          Covid-19 ini cepat berlalu. Semoga aksi Peduli Pandemi
                          Virus Covid-19 ini bisa menggerakkan hati
                          saudara-saudari untuk saling tolong-menolong didalam
                          situasi dan kondisi Pandemi Virus Covid-19.
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
                      href="/arsip-berita/stami-dan-pbi-turut-berpartipasi-dalam-pencegahan-penyebaran-covid-19"
                      className="w-full"
                    >
                      <div className="hover:text-orange-400 w-full h-full p-6">
                        <span className="text-sm text-gray-400 ">
                          Previous Post
                        </span>
                        <p className="text-lg font-semibold">
                          STAMI Dan PBI Turut Berpartipasi Dalam Pencegahan
                          Penyebaran Covid-19
                        </p>
                      </div>
                    </a>
                  </div>

                  <div className="border-r border-gray-500 text-right w-1/2">
                    <a
                      href="/arsip-berita/stami-menerima-penghargaan-smart-campus-awards-2020-dalam-kategori-best-indonesian-smart-campus-in-creating-quality-graduates"
                      className="w-full"
                    >
                      <div className="hover:text-orange-400 w-full h-full p-6">
                        <span className="text-sm text-gray-400 ">
                          Next Post
                        </span>
                        <p className="text-lg font-semibold">
                          STAMI Menerima Penghargaan SMART CAMPUS AWARDS 2020
                          Dalam Kategori "Best Indonesian Smart Campus In
                          Creating Quality Graduates"
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

export default STAMIPBIDanAlumniKalamKudus83MelakukanAksiPeduliPencegahanCovid19;
