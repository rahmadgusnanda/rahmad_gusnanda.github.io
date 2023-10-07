const KataSambutanKetua = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="my-20">
        <div className="border border-solid border-black p-12">
          <div className="mb-12 text-center">
            <h1 className="text-5xl font-semibold">Kata Sambutan Ketua</h1>
            <hr className="border-blue-500 border-b-4 w-1/2 mx-auto mt-3" />
          </div>

          <figure className="text-center my-10">
            <img
              src="./public/images/katasambutan.jpg"
              alt="Kata Sambutan"
              className="mx-auto w-2/3 md:w-1/2 lg:w-1/3"
            />
            <h1 className="font-bold text-lg">Dr. Calen, SE., MM.</h1>
            <figcaption className="mt-2 text-black text-md">
              Ketua Sekolah Tinggi Akuntansi dan Manajemen Indonesia
            </figcaption>
          </figure>

          <div className="text-justify">
            <p>
              Puji syukur kami panjatkan kepada Tuhan Yang Maha Esa atas segala
              rahmat dan karuniaNya, sehingga kami dapat menyelesaikan pembuatan
              website Sekolah Tinggi Akuntansi dan Manajemen (STAMI). Sebagai
              wujud tanggung jawab kami di dalam menyiapkan generasi penerus
              bangsa yang cerdas dan berkualitas, maka kami hadir dengan sistem
              terbaik yang kami miliki. Ini merupakan wujud pelayanan kami
              kepada mahasiswa, serta masyarakat pada umumnya. Kami terus
              menerus melakukan peningkatan kualitas pendidikan, penelitian dan
              pengabdian pada masyarakat sesuai dengan tuntutan dan kebutuhan
              para stakeholder, dengan berlandaskan saling memuaskan, memberi
              manfaat, dan tidak merugikan.
            </p>

            <p className="mt-5">
              Dalam bidang pengajaran, STAMI telah mengembangkan kurikulum
              berbasis kompetensi yang mengacu pada Kerangka Kualifikasi
              Nasional Indonesia yang dirancang sesuai dengan kebutuhan
              industri. Untuk mendukung hal ini dibutuhkan seperti Laboratorium
              Bank, Laboratorium Akuntansi, Laboratorium Pasar Modal,
              Laboratorium Perpajakan, dan Laboratorium Manajemen.
            </p>

            <p className="mt-5">
              Untuk memenuhi kebutuhan akan fasilitas pendidikan yang baik,
              STAMI telah mengembangkan kampus dilengkapi dengan berbagai
              fasilitas pendukung pendidikan yang sangat baik. Keberadaan kampus
              baru, dengan dibarengi peningkatan kualitas sumber daya manusia
              dan tata kelola, akan mampu menjadikan STAMI sebagai Center of
              Excellent dalam pendidikan Akuntansi dan Manajemen.
            </p>

            <p className="mt-5">
              Selamat menelusuri halaman demi halaman pada website ini, semoga
              Tuhan Yang Maha Pemurah dan Penyayang senantiasa memberikan
              kekuatan dan kemampuan kepada kita semua dalam rangka meraih
              impian dan cita-cita kita bersama. Amin.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KataSambutanKetua;
