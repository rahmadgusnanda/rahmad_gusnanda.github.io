const DosenPengajar = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="my-20">
        <div className="border border-solid border-black p-12">
          <div className="mb-12 text-center">
            <h1 className="text-5xl font-semibold">Dosen Pengajar</h1>
            <hr className="border-blue-500 border-b-4 w-1/2 mx-auto mt-3" />
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-t-2 border-gray-200">
                  <th className="px-4 py-2 w-1/12">#</th>
                  <th className="px-4 py-2 w-2/5">Nama Dosen</th>
                  <th className="px-4 py-2 w-full">Mata Kuliah</th>
                </tr>
              </thead>
              <tbody className="text-left">
                <tr className="bg-gray-200/50 border-b-2 border-gray-200">
                  <td className="border-y-2 px-4 py-2">1</td>
                  <td className="border-y-2 px-4 py-2">Calen, S.E., M.M.</td>
                  <td className="border-y-2 px-4 py-2">
                    <ul className="list-disc pl-4">
                      <li>Dasar Akuntansi I,</li>
                      <li>Pengantar Manajemen Kearsipan,</li>
                      <li>Manajemen Pemasaran.</li>
                    </ul>
                  </td>
                </tr>

                <tr className="bg-gray-200/50 border-b-2 border-gray-200">
                  <td className="border-y-2 px-4 py-2">2</td>
                  <td className="border-y-2 px-4 py-2">Sahat Sonang, M.Kom.</td>
                  <td className="border-y-2 px-4 py-2">
                    <ul className="list-disc pl-4">
                      <li>Pengantar Teknologi Informasi Komputer</li>
                      <li>Pengantar Aplikasi Komputer</li>
                      <li>Aplikasi Komputer Bisnis</li>
                    </ul>
                  </td>
                </tr>

                <tr className="bg-gray-200/50 border-b-2 border-gray-200">
                  <td className="border-y-2 px-4 py-2">3</td>
                  <td className="border-y-2 px-4 py-2">
                    Viktor Marudut Siregar, S.Kom.
                  </td>
                  <td className="border-y-2 px-4 py-2">
                    <ul className="list-disc pl-4">
                      <li>Praktikum Pengenalan Teknologi Informasi Komputer</li>
                      <li>Aplikasi Komputer Bisnis</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DosenPengajar;
