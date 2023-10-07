import BeritaTerbaru from "../BeritaTerbaru";
import ClockIcon from "../ClockIcon";
import FacebookComment from "../FacebookComment";
import FacebookIcon from "../FacebookIcon";
import TwitterIcon from "../TwitterIcon";

const PBIDanSTAMIGelarAcaraTalkshowGetReadyToBeAYoungEntrepreneur = () => {
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
                      PBI Dan STAMI Gelar Acara Talkshow Get Ready To Be A Young
                      Entrepreneur
                    </h1>
                    <div className="flex my-4">
                      <ClockIcon />
                      <p className="ml-2">Nov 14, 2019</p>
                    </div>
                    <img
                      src="/images/pbi-dan-stami-gelar-acara-talkshow-get-ready-to-be-a-young-entrepreneur/utama.jpg"
                      className="w-full h-full flex justify-center mx-auto my-2"
                    />

                    <div className="text-justify">
                      <p className="my-4">
                        Kampus Murni Sadar mengundang seorang Entrepreneur
                        terkenal di Pematangsiantar sebagai narasumber dalam
                        acara Talk Show "Get Ready To Be a Young Entrepreneur"
                        yang diadakan di Hall Kampus Murni Sadar, Jl. Sriwijaya
                        atas no.9-C Pematangsiantar (Selasa, 12 November 2019)
                      </p>

                      <p className="my-4">
                        Hotmatua Hamonangan Silalahi , Ya... nama itu tidak
                        asing lagi bagi warga pematangsiantar, pemilik Patarias
                        dan pelaku UMKM ini sangat peduli dalam membangun
                        generasi muda To Be a Young Entrepreneur . Beliau
                        mengajak mahasiswa/i tidak hanya pencari kerja(Karyawan)
                        tapi sebagai pemilik usaha, industri dan lainnya yang
                        bisa membuka lapangan pekerjaan bagi orang lain.
                      </p>

                      <p className="my-4">
                        Mahasiswa/i STAMI & PBI sangat antusias dalam mengikuti
                        Talk Show ini sehingga mereka menemukan jati diri mereka
                        sesungguhnya bahkan Jiwa / Mental mereka ditempah
                        menjadi kuat dan tangguh untuk menjadi seorang
                        Entrepreneur sejati.
                      </p>

                      <p className="my-4">
                        Terimakasih kepada semua tim yang telah bekerja keras
                        sehingga Talk Show ini berjalan dengan lancar dan sukses
                        hingga akhir karena kerjasama yang baik antara BEM,
                        ECDC, Mahasiswa, Dosen, dan lainnya.
                      </p>

                      <p className="my-4">
                        “Harga kesuksesan adalah kerja keras, dedikasi terhadap
                        pekerjaan yang ada, dan tekad apakah kita menang atau
                        kalah, apakah kita telah menerapkan yang terbaik dari
                        diri kita untuk tugas yang sedang dihadapi.”
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
                    href="/arsip-berita/uji-kompetensi-bnsp"
                    className="w-full"
                  >
                    <div className="hover:text-orange-400 w-full h-full p-6">
                      <span className="text-sm text-gray-400 ">
                        Previous Post
                      </span>
                      <p className="text-lg font-semibold">
                        Uji Kompetensi BNSP
                      </p>
                    </div>
                  </a>
                </div>

                <div className="border-r border-gray-500 text-right w-1/2">
                  <a
                    href="/arsip-berita/mahasiswa-stami-dan-pbi-melakukan-studi-tour-ke-gundaling-farm"
                    className="w-full"
                  >
                    <div className="hover:text-orange-400 w-full h-full p-6">
                      <span className="text-sm text-gray-400 ">Next Post</span>
                      <p className="text-lg font-semibold">
                        Mahasiswa STAMI Dan PBI Melakukan Studi Tour Ke
                        Gundaling Farm
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

export default PBIDanSTAMIGelarAcaraTalkshowGetReadyToBeAYoungEntrepreneur;
