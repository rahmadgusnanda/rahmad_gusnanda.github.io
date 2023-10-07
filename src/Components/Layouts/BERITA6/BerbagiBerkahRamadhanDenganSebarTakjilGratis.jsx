import BeritaTerbaru from "../BeritaTerbaru";
import ClockIcon from "../ClockIcon";
import FacebookComment from "../FacebookComment";
import FacebookIcon from "../FacebookIcon";
import TwitterIcon from "../TwitterIcon";

const BerbagiBerkahRamadhanDenganSebarTakjilGratis = () => {
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
                      Berbagi Berkah Ramadhan Dengan Sebar Takjil Gratis
                    </h1>
                    <div className="flex my-4">
                      <ClockIcon />
                      <p className="ml-2">May 30, 2019</p>
                    </div>
                    <img
                      src="/images/berbagi-berkah-ramadhan-dengan-sebar-takjil-gratis/utama.jpg"
                      className="w-full h-full flex justify-center mx-auto my-2"
                    />

                    <div className="text-justify">
                      <p className="my-4">
                        Dalam rangka menyambut bulan suci Ramadhan, Mahasiswa/i
                        Politeknik Bisnis Indonesia & Sekolah Tinggi Akuntansi
                        dan Manajaemen Indonesia Pematangsiantar
                        menyelenggarakan kegiatan Berbagi Takjil di depan Kampus
                        STAMI Jalan Sutomo dan berbuka puasa bersama di Aula PBI
                        jalan Sriwijaya no.9C-E Pematangsianatar (Rabu, 29 Mei
                        2019).
                      </p>

                      <p className="my-4">
                        Acara ini sengaja dilakukan dengan maksud dan tujuan
                        untuk berbagi dengan sesama, dalam hal ini adalah
                        pengguna jalan yang masih harus melanjutkan
                        perjalanannya disaat tiba waktu berbuka puasa, sebanyak
                        300 paket takjil, dibagikan secara cuma-cuma atau gratis
                        kepada warga yang melintasi jalan sutomo depan kampus
                        STAMI. Setelah pembagian takjil usai, Mahasiswa/i STAMI
                        dan PBI melanjutkan kegiatan acara keakraban dan buka
                        puasa bersama seluruh civitas akademika STAMI dan PBI
                      </p>

                      <p className="my-4">
                        Mahasiswa/i yg terdiri dari berbagai latar belakang yang
                        berbeda agama, suku dan ras turut serta dalam kegiatan
                        ini untuk menjalin keakraban dan persaudaraan antar
                        mahasiswa. “Betapa indahnya Bhineka Tunggal Ika di bulan
                        Suci Ramadhan ini” ungkapan salah satu Mahasiswa STAMI
                      </p>

                      <p className="my-4">
                        Sementara itu, Mahasiswa STAMI dan PBI lainnya juga
                        memberikan apresiasi yang luar biasa atas
                        terselenggaranya rangkaian kegiatan berbagi Takjil dan
                        berbuka puasa bersama mahasiswa/i dan seluruh civitas
                        akademika STAMI dan PBI.
                      </p>

                      <p className="my-4">
                        "Kegiatan ini sangat bagus untuk mempererat silaturahmi
                        dan kepedulian mahasiswa, karena banyak Mahasiswa jaman
                        sekarang melakukan hal-hal yang kurang bermanfaat," ujar
                        Debrianto selaku koordinator Badan Eksekutif Mahasiswa
                        (BEM).
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
                    href="/arsip-berita/pbi-dan-stami-gelar-seminar-tentang-menjadi-generasi-milenial-yang-cerdas-dan-kritis"
                    className="w-full"
                  >
                    <div className="hover:text-orange-400 w-full h-full p-6">
                      <span className="text-sm text-gray-400 ">
                        Previous Post
                      </span>
                      <p className="text-lg font-semibold">
                        PBI Dan STAMI Gelar Seminar Tentang Menjadi Generasi
                        Milenial Yang Cerdas Dan Kritis
                      </p>
                    </div>
                  </a>
                </div>

                <div className="border-r border-gray-500 text-right w-1/2">
                  <a
                    href="/arsip-berita/berbuka-puasa-bersama"
                    className="w-full"
                  >
                    <div className="hover:text-orange-400 w-full h-full p-6">
                      <span className="text-sm text-gray-400 ">Next Post</span>
                      <p className="text-lg font-semibold">
                        Berbuka Puasa Bersama
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

export default BerbagiBerkahRamadhanDenganSebarTakjilGratis;
