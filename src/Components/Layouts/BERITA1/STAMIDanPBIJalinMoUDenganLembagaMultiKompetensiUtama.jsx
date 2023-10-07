import BeritaTerbaru from "../BeritaTerbaru";
import ClockIcon from "../ClockIcon";
import FacebookComment from "../FacebookComment";
import FacebookIcon from "../FacebookIcon";
import TwitterIcon from "../TwitterIcon";

const STAMIDanPBIJalinMoUDenganLembagaMultiKompetensiUtama = () => {
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
                      STAMI Dan PBI Jalin MoU Dengan Lembaga Multi Kompetensi
                      Utama
                    </h1>
                    <div className="flex my-4">
                      <ClockIcon />
                      <p className="ml-2">Aug 03, 2020</p>
                    </div>
                    <img
                      src="/images/stami-dan-pbi-jalin-mou-dengan-lembaga-multi-kompetensi-utama/utama.jpg"
                      className="w-full h-full flex justify-center mx-auto my-2"
                    />

                    <div className="text-justify">
                      <p className="my-4">
                        Sebagai Asesor kompetensi Badan Nasional Sertifikasi
                        Profesi (BNSP) Bpk Dr. Calen SE.,M.M dan Bpk Henry Dunan
                        Pardede,S.P.,M.M mewakili kampus Murni Sadar (STAMI &
                        PBI) melakukan MoU dengan Lembaga Multi Kompetensi Utama
                        Bpk Soni Hestukoro,ST.,M.T,CH,CHR dan Ibu Bunga
                        Adity,S.E,M.Si,CH,CHT . Perjanjian kerjasama di lakukan
                        pada hari Selasa 4 Agustus 2020 bertempat di Hotel Grand
                        Central Medan.
                      </p>

                      <p className="my-6">
                        STAMI dan PBI Murni Sadar Pematangsiantar Siantar
                        merupakan tempat uji kompetensi dan Training Centre oleh
                        lembaga Sertifikasi Profesi Multi Kompetensi Utama
                        (LSP-MKU) dengan ruang lingkup skema sertifikasi yaitu
                        Uji Kompetensi Service Exellent, Uji Kompetensi Teknisi
                        Akuntansi Yunior, Pelatihan dan Uji Kompetensi
                        Kewirausahaan, Pelatihan dan Uji Kompetensi Pendamping
                        UMKM, Pelatihan dan Uji Kompetensi Fasilitator
                        Pendidikan dan Pelatihan UMKM.
                      </p>

                      <img
                        src="/images/stami-dan-pbi-jalin-mou-dengan-lembaga-multi-kompetensi-utama/1.jpg"
                        className="w-full h-full flex justify-center mx-auto my-4"
                      />
                      <img
                        src="/images/stami-dan-pbi-jalin-mou-dengan-lembaga-multi-kompetensi-utama/2.jpg"
                        className="w-full h-full flex justify-center mx-auto my-4"
                      />
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
                    href="/arsip-berita/pertemuan-persahabatan-stami-pbi-dengan-tim-stie-lmii-medan"
                    className="w-full"
                  >
                    <div className="hover:text-orange-400 w-full h-full p-6">
                      <span className="text-sm text-gray-400 ">
                        Previous Post
                      </span>
                      <p className="text-lg font-semibold">
                        Pertemuan Persahabatan STAMI & PBI Dengan Tim STIE LMII
                        Medan
                      </p>
                    </div>
                  </a>
                </div>

                <div className="border-r border-gray-500 text-right w-1/2">
                  <a
                    href="/arsip-berita/pelaksanaan-sertifikasi-kompetensi-kerja-pskk-bnsp-bidang-teknisi-akuntansi-yunior"
                    className="w-full"
                  >
                    <div className="hover:text-orange-400 w-full h-full p-6">
                      <span className="text-sm text-gray-400 ">Next Post</span>
                      <p className="text-lg font-semibold">
                        Pelaksanaan Sertifikasi Kompetensi Kerja (PSKK) BNSP
                        Bidang Teknisi Akuntansi Yunior
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

export default STAMIDanPBIJalinMoUDenganLembagaMultiKompetensiUtama;
