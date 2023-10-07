import BeritaTerbaru from "../BeritaTerbaru";
import ClockIcon from "../ClockIcon";
import FacebookComment from "../FacebookComment";
import FacebookIcon from "../FacebookIcon";
import TwitterIcon from "../TwitterIcon";

const MahasiswaSTAMIRaihJuara2PuteriPariwisataPematangsiantar = () => {
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
                      Mahasiswa STAMI Raih Juara 2 Puteri Pariwisata
                      Pematangsiantar
                    </h1>
                    <div className="flex my-4">
                      <ClockIcon />
                      <p className="ml-2">Oct 11, 2019</p>
                    </div>
                    <img
                      src="/images/mahasiswa-stami-raih-juara-2-puteri-pariwisata-pematangsiantar/utama.jpg"
                      className="w-full h-full flex justify-center mx-auto my-2"
                    />

                    <div className="text-justify">
                      <p className="my-4">
                        Selamat Kepada Kenny Tanjaya - Mahasiswa Manajemen
                        Semester 1 STAMI yang telah terpilih sebagai Juara 3
                        Putera Pariwisata Kota Pematangsiantar 2019.
                      </p>

                      <p className="my-4">
                        Setelah menjalani serangkaian seleksi dari seleksi
                        administrasi 25 September 2019, audisi 30 September
                        2019, pembekalan 2 Oktober 2019, tour daerah wisata kota
                        Pematangsiantar 6 Oktober 2018 dan Malam Grand Final
                        Yang berlangsung Rabu, 9 Oktober 2019 bertempat di
                        Convention Hall Siantar Hotel, Kenny berhasil
                        menyisihkan 8 Finalis Putra hingga akhirnya meraih gelar
                        Juara 3 Putra Pariwisata Kota Pematangsiantar 2019.
                      </p>

                      <p className="my-4">
                        Kontes yang di selenggarakan oleh Walikota
                        Pematangsiantar dengan tema "Melalui Putra-Putri
                        Pariwisata, Kita jadikan Generasi Muda sebagai Pelopor
                        Pariwisata dan Budaya Kota Pematangsiantar" menarik
                        perhatian seluruh masyarakat terutama generasi muda dari
                        berbagai kalangan untuk menunjukkan kemampuan mereka.
                      </p>

                      <p className="my-4">
                        Kampus Murni Sadar akan terus mengeksplore setiap bakat
                        mahasiswa untuk memotivasi semangat mahasiswa di bidang
                        akademik dan non akademik.
                      </p>

                      <p className="my-4">
                        Kami ucapkan terima kasih kepada Kristian Roni Parulian
                        Silitonga (Presiden BEM) Mahasiswa Keuangan Perbankan
                        Semester 3 selaku mentor Kenny untuk pembekalan menuju
                        Pemilihan Putra Pariwisata Pematangsiantar 2019 dan
                        semua tim yang berpartisipasi dalam penyelenggaraan
                        kontes yang sangat bergengsi di Kota Pematangsiantar.
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
                    href="/arsip-berita/stami-pbi-dan-usi-berkolaborasi-dalam-meningkatkan-mutu-pendidikan-pematangsiantar-dan-simalungun"
                    className="w-full"
                  >
                    <div className="hover:text-orange-400 w-full h-full p-6">
                      <span className="text-sm text-gray-400 ">
                        Previous Post
                      </span>
                      <p className="text-lg font-semibold">
                        STAMI, PBI Dan USI Berkolaborasi Dalam Meningkatkan Mutu
                        Pendidikan Pematangsiantar Dan Simalungun
                      </p>
                    </div>
                  </a>
                </div>

                <div className="border-r border-gray-500 text-right w-1/2">
                  <a
                    href="/arsip-berita/uji-kompetensi-bnsp"
                    className="w-full"
                  >
                    <div className="hover:text-orange-400 w-full h-full p-6">
                      <span className="text-sm text-gray-400 ">Next Post</span>
                      <p className="text-lg font-semibold">
                        Uji Kompetensi BNSP
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

export default MahasiswaSTAMIRaihJuara2PuteriPariwisataPematangsiantar;
