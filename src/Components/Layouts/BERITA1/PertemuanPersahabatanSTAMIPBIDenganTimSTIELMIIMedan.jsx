import BeritaTerbaru from "../BeritaTerbaru";
import ClockIcon from "../ClockIcon";
import FacebookComment from "../FacebookComment";
import FacebookIcon from "../FacebookIcon";
import TwitterIcon from "../TwitterIcon";

const PertemuanPersahabatanSTAMIPBIDenganTimSTIELMIIMedan = () => {
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
                      Pertemuan Persahabatan STAMI & PBI Dengan Tim STIE LMII
                      Medan
                    </h1>
                    <div className="flex my-4">
                      <ClockIcon />
                      <p className="ml-2">Jul 09, 2020</p>
                    </div>
                    <img
                      src="/images/pertemuan-persahabatan-stami-pbi-dengan-tim-stie-lmii-medan/utama.jpg"
                      className="w-full h-full flex justify-center mx-auto my-2"
                    />

                    <div className="text-justify">
                      <p className="mt-4 mb-8">
                        Ketua STAMI Dr. Calen,SE,MM dan Kaprodi PBI Henry Dunan
                        Pardede, MM dengan senang hati menyambut kedatangan Bpk
                        Dr. Togu Harlen Lumban Raja, SE, Msi, Bpk Dr. Hadirat
                        Manao, SH, MH dan Bpk St. Josmar Silaban SH, MA, MKn di
                        Kampus STAMI & PBI Pematangsiantar.
                      </p>

                      <img
                        src="/images/pertemuan-persahabatan-stami-pbi-dengan-tim-stie-lmii-medan/1.jpg"
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
                    href="/arsip-berita/stami-menerima-penghargaan-smart-campus-awards-2020-dalam-kategori-best-indonesian-smart-campus-in-creating-quality-graduates"
                    className="w-full"
                  >
                    <div className="hover:text-orange-400 w-full h-full p-6">
                      <span className="text-sm text-gray-400 ">
                        Previous Post
                      </span>
                      <p className="text-lg font-semibold">
                        STAMI Menerima Penghargaan SMART CAMPUS AWARDS 2020
                        Dalam Kategori "Best Indonesian Smart Campus In Creating
                        Quality Graduates"
                      </p>
                    </div>
                  </a>
                </div>

                <div className="border-r border-gray-500 text-right w-1/2">
                  <a
                    href="/arsip-berita/stami-dan-pbi-jalin-mou-dengan-lembaga-multi-kompetensi-utama"
                    className="w-full"
                  >
                    <div className="hover:text-orange-400 w-full h-full p-6">
                      <span className="text-sm text-gray-400 ">Next Post</span>
                      <p className="text-lg font-semibold">
                        STAMI Dan PBI Jalin MoU Dengan Lembaga Multi Kompetensi
                        Utama
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

export default PertemuanPersahabatanSTAMIPBIDenganTimSTIELMIIMedan;
