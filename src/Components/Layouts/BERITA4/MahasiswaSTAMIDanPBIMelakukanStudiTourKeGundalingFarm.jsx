import BeritaTerbaru from "../BeritaTerbaru";
import ClockIcon from "../ClockIcon";
import FacebookComment from "../FacebookComment";
import FacebookIcon from "../FacebookIcon";
import TwitterIcon from "../TwitterIcon";

const MahasiswaSTAMIDanPBIMelakukanStudiTourKeGundalingFarm = () => {
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
                      Mahasiswa STAMI Dan PBI Melakukan Studi Tour Ke Gundaling
                      Farm
                    </h1>
                    <div className="flex my-4">
                      <ClockIcon />
                      <p className="ml-2">Nov 15, 2019</p>
                    </div>
                    <img
                      src="/images/mahasiswa-stami-dan-pbi-melakukan-studi-tour-ke-gundaling-farm/utama.jpg"
                      className="w-full h-full flex justify-center mx-auto my-2"
                    />

                    <div className="text-justify">
                      <p className="my-4">
                        Sebanyak 100 mahasiswa dari Politeknik Bisnis
                        Indonesia(PBI) dan Sekolah Tinggi Akuntansi dan
                        Manajemen Indonesia (STAMI) melakukan Study Tour ke
                        Gundaling Farm PT. Putra Indo Mandiri Sejahtera di
                        Berastagi , Kabupaten Karo (Kamis, 14 November 2019)
                      </p>

                      <p className="my-4">
                        Kegiatan Study Tour merupakan program rutin yang
                        dilaksanakan setiap tahun untuk memberikan motivasi,
                        wawasan dan pengetahuan kepada mahasiswa/I STAMI dan PBI
                        Murni Sadar. Kunjungan yang kita lakukan disambut baik
                        dan hangat oleh Tim PT. Putra Indo Mandiri Sejahtera
                        sekaligus memandu Mahasiswa/I meninjau langsung
                        peternakan sapi penghasil susu segar .
                      </p>

                      <p className="my-4">
                        Gundaling Farm sendiri di bawah manajemen PT. Putra Indo
                        Mandiri Sejahtera (PT. PIMS), yang bergerak di bidang
                        usaha peternakan sapi perah merupakan satu-satunya usaha
                        peternakan sapi di Sumatera Utara yang dikelola secara
                        modern dan menjual hasil produksinya sendiri.
                      </p>

                      <p className="my-4">
                        Mahasiswa/I sangat antusias dan merasa puas atas
                        penjelasan tentang cara beternak sapi hingga proses
                        pemerahaan susu dan pembuatan yogurt selama mengikuti
                        study tour di Gundaling Farm. Peternakan sapi yang
                        beromset ratusan juta setiap bulannya sangat
                        menginspirasi dan memberikan motivasi kepada mahasiswa/I
                        untuk berani membuka usaha sendiri baik dibidang
                        peternakan, pertanian, seni, dan teknologi.
                      </p>

                      <p className="my-4">
                        Selain belajar teori dikampus mahasiswa/I STAMI dan PBI
                        Murni Sadar juga belajar praktek dilapangan sebagai
                        salah satu wujud dari pendidikan vokasi sehingga mereka
                        dapat menerapkan ilmu dan pengetahuan mereka untuk
                        memenuhi permintaan dunia lapangan kerja dan sebagai
                        contoh bagi mahasiswa/I yang ingin membuka usaha sendiri
                        (Entrepreneurship) .
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
                    href="/arsip-berita/pbi-dan-stami-gelar-acara-talkshow-get-ready-to-be-a-young-entrepreneur"
                    className="w-full"
                  >
                    <div className="hover:text-orange-400 w-full h-full p-6">
                      <span className="text-sm text-gray-400 ">
                        Previous Post
                      </span>
                      <p className="text-lg font-semibold">
                        PBI Dan STAMI Gelar Acara Talkshow Get Ready To Be A
                        Young Entrepreneur
                      </p>
                    </div>
                  </a>
                </div>

                <div className="border-r border-gray-500 text-right w-1/2">
                  <a
                    href="/arsip-berita/stami-dan-pbi-hadiri-acara-inklusi-sadar-pajak"
                    className="w-full"
                  >
                    <div className="hover:text-orange-400 w-full h-full p-6">
                      <span className="text-sm text-gray-400 ">Next Post</span>
                      <p className="text-lg font-semibold">
                        STAMI Dan PBI Hadiri Acara Inklusi Sadar Pajak
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

export default MahasiswaSTAMIDanPBIMelakukanStudiTourKeGundalingFarm;
