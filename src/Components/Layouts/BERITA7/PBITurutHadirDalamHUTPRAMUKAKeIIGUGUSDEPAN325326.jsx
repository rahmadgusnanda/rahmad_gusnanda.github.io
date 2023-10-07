import BeritaTerbaru from "../BeritaTerbaru";
import ClockIcon from "../ClockIcon";
import FacebookComment from "../FacebookComment";
import FacebookIcon from "../FacebookIcon";
import TwitterIcon from "../TwitterIcon";

const PBITurutHadirDalamHUTPRAMUKAKeIIGUGUSDEPAN325326 = () => {
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
                      PBI Turut Hadir Dalam HUT PRAMUKA Ke II GUGUS DEPAN
                      325-326
                    </h1>
                    <div className="flex my-4">
                      <ClockIcon />
                      <p className="ml-2">Feb 07, 2019</p>
                    </div>
                    <img
                      src="/images/pbi-turut-hadir-dalam-hut-pramuka-ke-ii-gugus-depan-325-326/utama.jpg"
                      className="w-full h-full flex justify-center mx-auto my-2"
                    />

                    <div className="text-justify">
                      <p className="my-4">
                        Pada HUT PRAMUKA Ke II GUGUS DEPAN 325-326 Mts.
                        AL-HIKMAH Sahkuda Bayu bersama Politeknik Bisnis
                        Indonesia Murni Sadar Pematangsiantar mengadakan
                        berbagai kegiatan pramuka di Desa Sahkuda Bayu Kecamatan
                        Gunung Malela selama tiga hari (tgl 2,3 dan 4 Februari
                        2018).
                      </p>

                      <p className="my-4">
                        Adapun kegiatan yang dilakukan antara lain :Tapak
                        Perkemahan putra putri untuk siaga dan penggalang, Seni
                        budaya siaga dan penggalang, Ketangkasan untuk
                        penggalang, Kreatifitas regu untuk penggalang dan siaga,
                        dan berbagai kegiatan lainya yang dapat memberikan
                        motivasi kepada putra putri pramuka indonesia.
                      </p>

                      <p className="my-4">
                        Sekitar ratusan putra putri pramuka yang ikut perkemahan
                        berasal dari berbagai daerah yaitu : Kecamatan Gunung
                        Malela, Karang Sari, Tanah Jawa, Dolok Malela, Siantar,
                        Tapian Dolok, Bandar Betsy, Bangun, Bah Kapul, Marihat
                        Tempel, Sukasari, Serapuh, Gunung Maligas, Laras,
                        Sinaksak, Bandar Malela, Bahlias, Perdagangan,
                        Kerasaaan, Pematang Bandar, Bah Gunung, Bandar Tongah,
                        dan Perlanaan.
                      </p>

                      <p className="my-4">
                        Ketua Pelaksana yaitu Bpk. Warsidi, S.Pdi mengucapkan
                        terimakasih kepada semua pihak yang telah mendukung
                        kegiatan ini terutama Bpk. Calen, SE. MM sebagai
                        Direktur Politeknik Bisnis Indonesia Murni Sadar
                        Pematangsiantar yang telah mendukung acara HUT Pramuka
                        ini dapat berjalan baik dan lancar hingga selesai dengan
                        sukses. Semoga Kegiatan ini dapat menciptakan generasi
                        bangsa yang cinta sesama, patriotis, cerdar, bermental
                        baja serta berguna bagi nusa dan bangsa.
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
                <div className="border-r border-gray-500 text-left w-1/2"></div>

                <div className="border-r border-gray-500 text-right w-1/2">
                  <a
                    href="/arsip-berita/pbi-selenggarakan-pelatihan-hidroponik"
                    className="w-full"
                  >
                    <div className="hover:text-orange-400 w-full h-full p-6">
                      <span className="text-sm text-gray-400 ">Next Post</span>
                      <p className="text-lg font-semibold">
                        PBI Selenggarakan Pelatihan HIDROPONIK
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

export default PBITurutHadirDalamHUTPRAMUKAKeIIGUGUSDEPAN325326;
