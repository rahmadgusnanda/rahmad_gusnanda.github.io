import BeritaTerbaru from "../BeritaTerbaru";
import ClockIcon from "../ClockIcon";
import FacebookComment from "../FacebookComment";
import FacebookIcon from "../FacebookIcon";
import TwitterIcon from "../TwitterIcon";

const PelaksanaanSertifikasiKompetensiKerjaBNSPBidangTeknisiAkuntansiYunior =
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
                        Pelaksanaan Sertifikasi Kompetensi Kerja (PSKK) BNSP
                        Bidang Teknisi Akuntansi Yunior
                      </h1>
                      <div className="flex my-4">
                        <ClockIcon />
                        <p className="ml-2">Aug 18, 2020</p>
                      </div>
                      <img
                        src="/images/pelaksanaan-sertifikasi-kompetensi-kerja-pskk-bnsp-bidang-teknisi-akuntansi-yunior/utama.jpg"
                        className="w-full h-full flex justify-center mx-auto my-2"
                      />

                      <div className="text-justify">
                        <p className="my-4">
                          STAMI & PBI MURNI SADAR sangat memperhatikan
                          kompetensi dari mahasiwanya karena kompetensi
                          merupakan hal yang mutlak bagi seorang lulusan
                          perguruan tinggi. Oleh karena itu sejak tahun 2018
                          kampus Murni Sadar sebagai satu-satunya tempat uji
                          kompetensi dari LSP di kota Pematangsiantar telah
                          melakukan kegiatan uji kompetensi diberbagai bidang.
                        </p>

                        <p className="my-4">
                          Pada Hari Jum'at dan Sabtu, tanggal 14-15 Agustus 2020
                          Sekolah Tinggi Akuntansi dan Manajemen Indonesia dan
                          Politeknik Bisnis Indonesia Murni sadar telah
                          melaksanakan Ujian Sertifikasi Kompetensi Teknisi
                          Akuntansi Yunior yang berstandar Asia Tenggara. STAMI
                          dan PBI berkomitmen penuh untuk memberikan pembekalan
                          kemampuan serta kompetensi memadai bagi para
                          mahasiswa/i dengan mengadakan pelatihan-pelatihan
                          serta uji kompetensi yang sesuai dengan bidang
                          studinya.
                        </p>

                        <p className="my-4">
                          Selaku Asesor Akuntansi tersertifikasi BNSP Bapak
                          Calen Chan dan Bapak Henry Dunan Pardede dengan penuh
                          tanggung jawab melaksanakan pelatihan dan pengujian
                          dengan mengikuti protokol kesehatan selama Pandemi
                          Covid-19. Semoga mahasiswa/i yang lulus dan
                          bersertifikasi kompeten dapat memberi manfaat melalui
                          kegiatan ini.
                        </p>

                        <p>Salam Pendidikan!</p>
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
                      href="/arsip-berita/stami-dan-pbi-jalin-mou-dengan-lembaga-multi-kompetensi-utama"
                      className="w-full"
                    >
                      <div className="hover:text-orange-400 w-full h-full p-6">
                        <span className="text-sm text-gray-400 ">
                          Previous Post
                        </span>
                        <p className="text-lg font-semibold">
                          STAMI Dan PBI Jalin MoU Dengan Lembaga Multi
                          Kompetensi Utama
                        </p>
                      </div>
                    </a>
                  </div>

                  <div className="border-r border-gray-500 text-right w-1/2">
                    <a
                      href="/arsip-berita/pengabdian-masyarakat-berbasis-penelitian"
                      className="w-full"
                    >
                      <div className="hover:text-orange-400 w-full h-full p-6">
                        <span className="text-sm text-gray-400 ">
                          Next Post
                        </span>
                        <p className="text-lg font-semibold">
                          Pengabdian Masyarakat Berbasis Penelitian
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

export default PelaksanaanSertifikasiKompetensiKerjaBNSPBidangTeknisiAkuntansiYunior;
