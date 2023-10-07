import BeritaTerbaru from "../BeritaTerbaru";
import ClockIcon from "../ClockIcon";
import FacebookComment from "../FacebookComment";
import FacebookIcon from "../FacebookIcon";
import TwitterIcon from "../TwitterIcon";

const MahasiswaSTAMIIkutSeleksiCalonRelawanPajakPematangsiantar = () => {
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
                      Mahasiswa STAMI Ikut Seleksi Calon Relawan Pajak
                      Pematangsiantar
                    </h1>
                    <div className="flex my-4">
                      <ClockIcon />
                      <p className="ml-2">Feb 21, 2020</p>
                    </div>
                    <img
                      src="/images/mahasiswa-stami-berhasil-raih-peringkat-4-dalam-seleksi-calon-relawan-pajak-pematangsiantar/utama.jpg"
                      className="w-full h-full flex justify-center mx-auto my-2"
                    />

                    <div className="text-justify">
                      <p className="my-4">
                        Dari Hasil seleksi mahasiswa dari berbagai perguruan
                        tinggai swasta 6 Mahasiswa Sekolah Tinggi Akuntansi dan
                        Manajemen Indonesia (STAMI) dan Politeknik Bisnis
                        Indonesia (PBI) terpilih sebagai relawan pajak di Kantor
                        Wilayah Direktorat Jenderal Pajak (Kanwil DJP Sumut II).
                      </p>

                      <p className="my-4">
                        Relawan pajak merupakan mahasiswa yang sudah menempuh
                        matakuliah perpajakan untuk ikut serta menjadi
                        pendamping masyarakat wajib pajak dalam rangka memenuhi
                        kewajiban administrasi perpajakannya. Katanya, adapun
                        tujuan Relawan Pajak adalah Mengedukasi Masyarakat akan
                        pentingnya pajak dan mendampingi Wajib Pajak untuk
                        melaporkan pajaknya.
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
                    href="/arsip-berita/pbi-dan-stami-hadiri-seminar-21st-century-pedagogical-teaching-skills-di-politeknik-wilmar-bisnis-indonesia"
                    className="w-full"
                  >
                    <div className="hover:text-orange-400 w-full h-full p-6">
                      <span className="text-sm text-gray-400 ">
                        Previous Post
                      </span>
                      <p className="text-lg font-semibold">
                        PBI Dan STAMI Hadiri Seminar 21st Century Pedagogical
                        Teaching Skills Di Politeknik Wilmar Bisnis Indonesia
                      </p>
                    </div>
                  </a>
                </div>

                <div className="border-r border-gray-500 text-right w-1/2">
                  <a
                    href="/arsip-berita/pbi-dan-stami-hadiri-seminar-peluang-dan-tantangan-ekonomi-siantar-simalungun-tahun-2020"
                    className="w-full"
                  >
                    <div className="hover:text-orange-400 w-full h-full p-6">
                      <span className="text-sm text-gray-400 ">Next Post</span>
                      <p className="text-lg font-semibold">
                        PBI Dan STAMI Hadiri Seminar Peluang Dan Tantangan
                        Ekonomi Siantar-Simalungun Tahun 2020
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

export default MahasiswaSTAMIIkutSeleksiCalonRelawanPajakPematangsiantar;
