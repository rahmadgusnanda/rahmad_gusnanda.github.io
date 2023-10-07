const DaftarBeasiswa = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center items-center">
        <div className="border border-solid border-black h-max my-20 mx-20 mt-36 p-12 w-10/12">
          <div className="mb-12 text-center">
            <h1 className="text-5xl font-semibold">Beasiswa</h1>
            <hr className="border-blue-500 border-b-4 w-56 mx-auto mt-3" />
          </div>

          <div className="text-justify mt-5">
            <p>
              Daftar beasiswa yang tersedia dan terbuka bagi mahasiswa PBI
              adalah
            </p>
            <ol className="pl-4" style={{ listStyleType: "decimal" }}>
              <li>
                Beasiswa bagi calon mahasiswa yang berperingkat di sekolah asal:
                <ul className="pl-4" style={{ listStyleType: "circle" }}>
                  <li>Peringkat I di kelas 100%</li>
                  <li>Peringkat II di kelas 75%</li>
                  <li>Peringkat III di kelas 50%</li>
                </ul>
              </li>

              <li>Beasiswa bagi anak guru 10%</li>

              <li>
                Beasiswa bagi calon mahasiswa yang berprestasi olahraga:
                <ul className="pl-4" style={{ listStyleType: "circle" }}>
                  <li>Internasional 100%</li>
                  <li>Nasional 75%</li>
                  <li>Provinsi 50%</li>
                  <li>Kota 25%</li>
                </ul>
              </li>

              <li>Beasiswa PPA & Bidik Misi</li>
              <li>Beasiswa Yayasan Pendidikan Bina Usaha Indonesia</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DaftarBeasiswa;
