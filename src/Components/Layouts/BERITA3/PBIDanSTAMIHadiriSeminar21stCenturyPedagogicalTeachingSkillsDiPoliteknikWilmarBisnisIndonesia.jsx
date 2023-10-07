import BeritaTerbaru from "../BeritaTerbaru";
import ClockIcon from "../ClockIcon";
import FacebookComment from "../FacebookComment";
import FacebookIcon from "../FacebookIcon";
import TwitterIcon from "../TwitterIcon";

const PBIDanSTAMIHadiriSeminar21stCenturyPedagogicalTeachingSkillsDiPoliteknikWilmarBisnisIndonesia =
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
                        PBI Dan STAMI Hadiri Seminar 21st Century Pedagogical
                        Teaching Skills Di Politeknik Wilmar Bisnis Indonesia
                      </h1>
                      <div className="flex my-4">
                        <ClockIcon />
                        <p className="ml-2">Feb 08, 2020</p>
                      </div>
                      <img
                        src="/images/pbi-dan-stami-hadiri-seminar-21st-century-pedagogical-teaching-skills-di-politeknik-wilmar-bisnis-indonesia/utama.jpg"
                        className="w-full h-full flex justify-center mx-auto my-2"
                      />

                      <div className="text-justify">
                        <p className="my-4">
                          Ketua Sekolah Tinggi Akuntansi dan Manajemen Indonesia
                          Dr. Calen Chan beserta Dosen STAMI dan PBI menghadiri
                          21st Century Pedagogical Teaching Skills Seminar di
                          Politeknik Wilmar Bisnis Indonesia - WBI Medan pada
                          Hari Kamis, 6 Februari 2020.
                        </p>

                        <p className="my-4">
                          Seminar yang mendatangkan pembicara dari Malaysia Mr
                          Keith Thong (UBS) dan dari USA Mr Sean Kilachand
                          (Edusync).
                        </p>

                        <p className="my-4">
                          Pentingnya transisi metode pengajaran Dosen yang
                          sekarang semakin didukung dengan kemajuan teknologi
                          seperti Artificial Intelligence dan Internet membuat
                          STAMI & PBI lebih berfokus kepada teknik-teknik yang
                          mengintegrasikan teknologi tersebut pada kegiatan
                          belajar mengajar di kampus.
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
                      href="/arsip-berita/pbi-dan-stami-gelar-seminar-speaking-confidence-with-public-speaking"
                      className="w-full"
                    >
                      <div className="hover:text-orange-400 w-full h-full p-6">
                        <span className="text-sm text-gray-400 ">
                          Previous Post
                        </span>
                        <p className="text-lg font-semibold">
                          PBI Dan STAMI Gelar Seminar SPEAKING CONFIDENCE WITH
                          PUBLIC SPEAKING
                        </p>
                      </div>
                    </a>
                  </div>

                  <div className="border-r border-gray-500 text-right w-1/2">
                    <a
                      href="/arsip-berita/mahasiswa-stami-ikut-seleksi-calon-relawan-pajak-pematangsiantar"
                      className="w-full"
                    >
                      <div className="hover:text-orange-400 w-full h-full p-6">
                        <span className="text-sm text-gray-400 ">
                          Next Post
                        </span>
                        <p className="text-lg font-semibold">
                          Mahasiswa STAMI Ikut Seleksi Calon Relawan Pajak
                          Pematangsiantar
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

export default PBIDanSTAMIHadiriSeminar21stCenturyPedagogicalTeachingSkillsDiPoliteknikWilmarBisnisIndonesia;
