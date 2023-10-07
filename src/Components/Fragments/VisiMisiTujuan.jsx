const VisiMisiTujuan = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="my-20">
        <div className="border border-solid border-black p-12">
          <div className="mb-12 text-center">
            <h1 className="text-5xl font-semibold">Visi, Misi & Tujuan</h1>
            <hr className="border-blue-500 border-b-4 w-1/2 mx-auto mt-3" />
          </div>

          <div className="text-justify">
            <h1 className="text-3xl font-semibold">Visi</h1>
            <p>
              Visi Sekolah Tinggi Akuntansi dan Manajemen Indonesia adalah
              Menjadi Sekolah Tinggi yang unggul dibidang akuntansi dan
              manajemen yang menghasilkan lulusan berdaya saing skala nasional
              pada tahun 2025.
            </p>
          </div>

          <div className="text-justify mt-5">
            <h1 className="text-3xl font-semibold">Misi</h1>
            <ol className="pl-4 list-decimal">
              <li>
                Menyelenggarakan dan membangun sistem pembelajaran yang dapat
                menghasilkan lulusan yang unggul dibidang akuntansi dan
                manajemen dalam mempersiapkan diri memasuki dunia bisnis maupun
                menghadapi persaingan di pasar kerja baik nasional maupun
                internasional.
              </li>

              <li>
                Melakukan pengembangan pendidikan dan profesi bagi tenaga
                pengajar dan staf pendukung.
              </li>

              <li>
                Melakukan penelitian dan pengabdian masyarakat secara terprogram
                dan teratur dalam rangka mengembangkan ilmu akuntansi, dan
                manajemen serta kontribusinya dalam bidang bisnis dan
                pengembangan ekonomi masyarakat.
              </li>

              <li>
                Membangun organisasi pendidikan yang otonom, secara efisien dan
                berlandaskan kepada etika serta estetika.
              </li>

              <li>
                Membangun kerja sama dengan berbagai instansi dalam dan luar
                negeri untuk peningkatan kualitas mutu lulusan.
              </li>
            </ol>
          </div>

          <div className="text-justify mt-5">
            <h1 className="text-3xl font-semibold">Tujuan</h1>
            <ol className="pl-4 list-decimal">
              <li>
                Menghasilkan lulusan yang unggul dibidang akuntansi dan
                manajemen yang berdaya saing skala nasional peduli pada
                kepentingan masyarakat, berorientasi global dan tanggap terhadap
                kemajuan ilmu pengetahuan, teknologi, dan seni budaya (IPTEKS).
              </li>

              <li>
                Menghasilkan karya ilmiah yang merupkan hasil penelitian dan
                pengabdian masyarakat dalam bidang ekonomi, manajemen, dan
                akuntansi yang dipublikasikan dan menjunjung tinggi hak atas
                kekayaan intelektual (HAKI).
              </li>

              <li>
                Menciptakan suasana ilmiah yang kondusif untuk mendukung
                penyelenggaraan kegiatan akademik dan non-akademik.
              </li>

              <li>
                Menghasilkan kerja sama dengan berbagai instansi dalam dan luar
                negeri untuk peningkatan kualitas mutu lulusan.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisiMisiTujuan;
