const UangKuliah = () => {
  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24">
      <h2 className="text-2xl mt-4 mb-2">Uang Kuliah</h2>
      <p className="my-1">
        Daftar uang kuliah Program Diploma (D3) tiap program studi:
      </p>
      <table className="w-3/4 sm:w-full">
        <thead className="bg-gray-50">
          <tr className="text-center">
            <th className="font-medium text-center px-2 py-2 text-black border border-gray-500">
              No
            </th>
            <th className="font-medium text-center px-2 py-2 text-black border border-gray-500">
              Program Studi
            </th>
            <th className="font-medium text-center px-2 py-2 text-black border border-gray-500">
              Kelas
            </th>
            <th className="font-medium text-center px-2 py-2 text-black border border-gray-500">
              Besar Uang Kuliah Per Tahun
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {/* //----------------->>> TEKNIK KOMPUTER <<<----------------- */}
          <tr>
            <td className="text-center px-2 py-2 whitespace-nowrap border border-gray-500">
              <div className="text-sm text-gray-900 text-center">1</div>
            </td>
            <td
              rowSpan={"2"}
              className="px-2 py-1 whitespace-nowrap border border-gray-500"
            >
              <div className="text-sm text-gray-900">Teknik Komputer</div>
            </td>
            <td className="text-center px-2 py-2 whitespace-nowrap border border-gray-500">
              <div className="text-sm text-gray-900">Pagi</div>
            </td>
            <td className="text-center px-2 py-2 whitespace-nowrap border border-gray-500">
              <div className="text-sm text-gray-900">Rp. 6.000.000</div>
            </td>
          </tr>
          <tr>
            <td className="text-center px-2 py-2 whitespace-nowrap border border-gray-500">
              <div className="text-sm text-gray-900">2</div>
            </td>
            <td className="text-center px-2 py-2 whitespace-nowrap border border-gray-500">
              <div className="text-sm text-gray-900">Sore</div>
            </td>
            <td className="text-center px-2 py-2 whitespace-nowrap border border-gray-500">
              <div className="text-sm text-gray-900">Rp. 6.500.000</div>
            </td>
          </tr>

          {/* //----------------->>> KOMPUTERISASI AKUNTANSI <<<----------------- */}
          <tr>
            <td className="text-center px-2 py-2 whitespace-nowrap border border-gray-500">
              <div className="text-sm text-gray-900 text-center">3</div>
            </td>
            <td
              rowSpan={"2"}
              className="px-2 py-1 whitespace-nowrap border border-gray-500"
            >
              <div className="text-sm text-gray-900">
                Komputerisasi Akuntansi
              </div>
            </td>
            <td className="text-center px-2 py-2 whitespace-nowrap border border-gray-500">
              <div className="text-sm text-gray-900">Pagi</div>
            </td>
            <td className="text-center px-2 py-2 whitespace-nowrap border border-gray-500">
              <div className="text-sm text-gray-900">Rp. 5.500.000</div>
            </td>
          </tr>
          <tr>
            <td className="text-center px-2 py-2 whitespace-nowrap border border-gray-500">
              <div className="text-sm text-gray-900">4</div>
            </td>
            <td className="text-center px-2 py-2 whitespace-nowrap border border-gray-500">
              <div className="text-sm text-gray-900">Sore</div>
            </td>
            <td className="text-center px-2 py-2 whitespace-nowrap border border-gray-500">
              <div className="text-sm text-gray-900">Rp. 6.000.000</div>
            </td>
          </tr>

          {/* //----------------->>> KEUANGAN PERBANKAN <<<----------------- */}
          <tr>
            <td className="text-center px-2 py-2 whitespace-nowrap border border-gray-500">
              <div className="text-sm text-gray-900 text-center">5</div>
            </td>
            <td
              rowSpan={"2"}
              className="px-2 py-1 whitespace-nowrap border border-gray-500"
            >
              <div className="text-sm text-gray-900">Keuangan Perbankan</div>
            </td>
            <td className="text-center px-2 py-2 whitespace-nowrap border border-gray-500">
              <div className="text-sm text-gray-900">Pagi</div>
            </td>
            <td className="text-center px-2 py-2 whitespace-nowrap border border-gray-500">
              <div className="text-sm text-gray-900">Rp. 5.000.000</div>
            </td>
          </tr>
          <tr>
            <td className="text-center px-2 py-2 whitespace-nowrap border border-gray-500">
              <div className="text-sm text-gray-900">6</div>
            </td>
            <td className="text-center px-2 py-2 whitespace-nowrap border border-gray-500">
              <div className="text-sm text-gray-900">Sore</div>
            </td>
            <td className="text-center px-2 py-2 whitespace-nowrap border border-gray-500">
              <div className="text-sm text-gray-900">Rp. 5.200.000</div>
            </td>
          </tr>

          {/* //----------------->>> MANAJEMEN <<<----------------- */}
          <tr>
            <td className="text-center px-2 py-2 whitespace-nowrap border border-gray-500">
              <div className="text-sm text-gray-900 text-center">7</div>
            </td>
            <td
              rowSpan={"2"}
              className="px-2 py-1 whitespace-nowrap border border-gray-500"
            >
              <div className="text-sm text-gray-900">
                Manajemen Adm. Perkantoran
              </div>
            </td>
            <td className="text-center px-2 py-2 whitespace-nowrap border border-gray-500">
              <div className="text-sm text-gray-900">Pagi</div>
            </td>
            <td className="text-center px-2 py-2 whitespace-nowrap border border-gray-500">
              <div className="text-sm text-gray-900">Rp. 5.000.000</div>
            </td>
          </tr>
          <tr>
            <td className="text-center px-2 py-2 whitespace-nowrap border border-gray-500">
              <div className="text-sm text-gray-900">8</div>
            </td>
            <td className="text-center px-2 py-2 whitespace-nowrap border border-gray-500">
              <div className="text-sm text-gray-900">Sore</div>
            </td>
            <td className="text-center px-2 py-2 whitespace-nowrap border border-gray-500">
              <div className="text-sm text-gray-900">Rp. 5.200.000</div>
            </td>
          </tr>
        </tbody>
      </table>

      <p className="mt-4">
        Daftar uang kuliah Program Strata (S1) untuk tiap program studi:
      </p>

      <table className="w-3/4 sm:w-full">
        <thead className="bg-gray-50">
          <tr className="text-center">
            <th className="font-medium text-center px-2 py-2 text-black border border-gray-500">
              No
            </th>
            <th className="font-medium text-center px-2 py-2 text-black border border-gray-500">
              Program Studi
            </th>
            <th className="font-medium text-center px-2 py-2 text-black border border-gray-500">
              Kelas
            </th>
            <th className="font-medium text-center px-2 py-2 text-black border border-gray-500">
              Besar Uang Kuliah Per Tahun
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {/* //----------------->>> Akuntansi <<<----------------- */}
          <tr>
            <td className="text-center px-2 py-2 whitespace-nowrap border border-gray-500">
              <div className="text-sm text-gray-900 text-center">1</div>
            </td>
            <td
              rowSpan={"2"}
              className="px-2 py-1 whitespace-nowrap border border-gray-500"
            >
              <div className="text-sm text-gray-900">Akuntansi</div>
            </td>
            <td className="text-center px-2 py-2 whitespace-nowrap border border-gray-500">
              <div className="text-sm text-gray-900">Pagi</div>
            </td>
            <td className="text-center px-2 py-2 whitespace-nowrap border border-gray-500">
              <div className="text-sm text-gray-900">Rp. 6.500.000</div>
            </td>
          </tr>
          <tr>
            <td className="text-center px-2 py-2 whitespace-nowrap border border-gray-500">
              <div className="text-sm text-gray-900">2</div>
            </td>
            <td className="text-center px-2 py-2 whitespace-nowrap border border-gray-500">
              <div className="text-sm text-gray-900">Sore</div>
            </td>
            <td className="text-center px-2 py-2 whitespace-nowrap border border-gray-500">
              <div className="text-sm text-gray-900">Rp. 7.000.000</div>
            </td>
          </tr>

          {/* //----------------->>> Manajemen <<<----------------- */}
          <tr>
            <td className="text-center px-2 py-2 whitespace-nowrap border border-gray-500">
              <div className="text-sm text-gray-900 text-center">3</div>
            </td>
            <td
              rowSpan={"2"}
              className="px-2 py-1 whitespace-nowrap border border-gray-500"
            >
              <div className="text-sm text-gray-900">Manajemen</div>
            </td>
            <td className="text-center px-2 py-2 whitespace-nowrap border border-gray-500">
              <div className="text-sm text-gray-900">Pagi</div>
            </td>
            <td className="text-center px-2 py-2 whitespace-nowrap border border-gray-500">
              <div className="text-sm text-gray-900">Rp. 6.500.000</div>
            </td>
          </tr>
          <tr>
            <td className="text-center px-2 py-2 whitespace-nowrap border border-gray-500">
              <div className="text-sm text-gray-900">4</div>
            </td>
            <td className="text-center px-2 py-2 whitespace-nowrap border border-gray-500">
              <div className="text-sm text-gray-900">Sore</div>
            </td>
            <td className="text-center px-2 py-2 whitespace-nowrap border border-gray-500">
              <div className="text-sm text-gray-900">Rp. 7.000.000</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UangKuliah;

{
  /* <thead className="bg-gray-300 sm:bg-gray-300 md:bg-gray-300 lg:bg-gray-300 text-center">
          <tr className="border border-slate-300">
            <th className="border border-slate-300">No</th>
            <th className="border border-slate-300">Program Studi</th>
            <th className="border border-slate-300">Kelas</th>
            <th className="border border-slate-300">
              Besar Uang Kuliah Per Tahun
            </th>
          </tr>
        </thead>

        <tbody className="">
          <tr className="">
            <td className="border-x border-b border-slate-300">1</td>
            <td className="border-x border-slate-300">Teknik Komputer</td>
            <td className="border-x border-b border-slate-300">Pagi</td>
            <td className="border-x border-b border-slate-300">
              Rp. 5.600.000
            </td>
          </tr>
          <tr className="">
            <td className="border-x border-b border-slate-300">2</td>
            <td className="border-x border-b border-slate-300"></td>
            <td className="border-x border-b border-slate-300">Malam</td>
            <td className="border-x border-b border-slate-300">
              Rp. 6.100.000
            </td>
          </tr>

          <tr className="">
            <td className="border-x border-b border-slate-300">3</td>
            <td className="border-x border-slate-300">
              Komputerisasi Akuntansi
            </td>
            <td className="border-x border-b border-slate-300">Pagi</td>
            <td className="border-x border-b border-slate-300">
              Rp. 5.100.000
            </td>
          </tr>
          <tr className="">
            <td className="border-x border-b border-slate-300">4</td>
            <td className="border-x border-b border-slate-300"></td>
            <td className="border-x border-b border-slate-300">Malam</td>
            <td className="border-x border-b border-slate-300">
              Rp. 5.600.000
            </td>
          </tr>

          <tr className="">
            <td className="border-x border-b border-slate-300">5</td>
            <td className="border-x border-slate-300">
              Keuangan dan Perbankan
            </td>
            <td className="border-x border-b border-slate-300">Pagi</td>
            <td className="border-x border-b border-slate-300">
              Rp. 4.600.000
            </td>
          </tr>
          <tr className="">
            <td className="border-x border-b border-slate-300">6</td>
            <td className="border-x border-b border-slate-300"></td>
            <td className="border-x border-b border-slate-300">Malam</td>
            <td className="border-x border-b border-slate-300">
              Rp. 4.800.000
            </td>
          </tr>

          <tr className="">
            <td className="border-x border-b border-slate-300">7</td>
            <td className="border-x border-slate-300">
              Manajemen Administrasi Perkantoran
            </td>
            <td className="border-x border-b border-slate-300">Pagi</td>
            <td className="border-x border-b border-slate-300">
              Rp. 4.600.000
            </td>
          </tr>
          <tr className="">
            <td className="border-x border-b border-slate-300">8</td>
            <td className="border-x border-b border-slate-300"></td>
            <td className="border-x border-b border-slate-300">Malam</td>
            <td className="border-x border-b border-slate-300">
              Rp. 4.800.000
            </td>
          </tr>
        </tbody> */
  //   <table className="w-3/4">
  //   <thead className="bg-gray-300 sm:bg-gray-300 md:bg-gray-300 lg:bg-gray-300 text-center">
  //     <tr className="border border-slate-300">
  //       <th className="border border-slate-300">No</th>
  //       <th className="border border-slate-300">Program Studi</th>
  //       <th className="border border-slate-300">Kelas</th>
  //       <th className="border border-slate-300">
  //         Besar Uang Kuliah Per Tahun
  //       </th>
  //     </tr>
  //   </thead>
  //   <tbody className="">
  //     <tr className="">
  //       <td className="border-x border-b border-slate-300">1</td>
  //       <td className="border-x border-slate-300">Manajemen</td>
  //       <td className="border-x border-b border-slate-300">Pagi</td>
  //       <td className="border-x border-b border-slate-300">
  //         Rp. 6.000.000
  //       </td>
  //     </tr>
  //     <tr className="">
  //       <td className="border-x border-b border-slate-300">2</td>
  //       <td className="border-x border-b border-slate-300"></td>
  //       <td className="border-x border-b border-slate-300">Malam</td>
  //       <td className="border-x border-b border-slate-300">
  //         Rp. 6.500.000
  //       </td>
  //     </tr>
  //     <tr className="">
  //       <td className="border-x border-b border-slate-300">3</td>
  //       <td className="border-x border-slate-300">Akuntansi</td>
  //       <td className="border-x border-b border-slate-300">Pagi</td>
  //       <td className="border-x border-b border-slate-300">
  //         Rp. 6.000.000
  //       </td>
  //     </tr>
  //     <tr className="">
  //       <td className="border-x border-b border-slate-300">4</td>
  //       <td className="border-x border-b border-slate-300"></td>
  //       <td className="border-x border-b border-slate-300">Malam</td>
  //       <td className="border-x border-b border-slate-300">
  //         Rp. 6.000.000
  //       </td>
  //     </tr>
  //   </tbody>
  // </table>
}
