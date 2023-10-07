const PbiUmt = () => {
  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24">
      <div>
        <h2 className="text-2xl mt-5">Program Pendidikan</h2>
        <p className="mt-1">
          Universitas Murni Teguh (UMT) memiliki dua program studi antara lain:
        </p>

        <ol className="pl-4" style={{ listStyleType: "decimal" }}>
          <li>Program Strata (S1) Manajemen</li>
          <li>Program Strata (S1) Akuntansi</li>
        </ol>
      </div>

      <div>
        <p className="mt-3">
          Yayasan Tapeumulia Bangsa (YTB) memiliki empat program studi antara
          lain:
        </p>

        <ol className="pl-4" style={{ listStyleType: "decimal" }}>
          <li>Program Diploma (D3) Teknik Komputer</li>
          <li>Program Diploma (D3) Komputerisasi Akuntansi</li>
          <li>Program Diploma (D3) Keuangan dan Perbankan</li>
          <li>Program Diploma (D3) Manajemen Administrasi Perkantoran</li>
        </ol>
      </div>
    </div>
  );
};

export default PbiUmt;
