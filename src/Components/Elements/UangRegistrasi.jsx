const UangRegistrasi = () => {
  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24">
      <h2 className="text-2xl m-1 mt-4 mb-2">Uang Registrasi</h2>
      <p className="my-1">
        Biaya Registrasi Awal Untuk Program Diploma (D3) dan Strata (S1):
      </p>
      <table className="w-3/4 sm:w-full">
        <thead className="bg-gray-50">
          <tr className="text-center">
            <th className="font-medium text-black border border-gray-500">
              No
            </th>
            <th className="font-medium text-black border border-gray-500">
              Keterangan Pembayaran
            </th>
            <th className="font-medium text-black border border-gray-500">
              D-III YTB
            </th>
            <th className="font-medium text-black border border-gray-500">
              S1 UMT
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-2 py-2 whitespace-nowrap border border-gray-500">
              <div className="text-sm text-gray-900 text-center">1</div>
            </td>
            <td className="px-2 py-2 whitespace-nowrap border border-gray-500">
              <div className="text-sm text-gray-900">Biaya Pendaftaran</div>
            </td>
            <td className="px-2 py-2 whitespace-nowrap border border-gray-500">
              <div className="text-sm text-gray-900">Rp 250.000</div>
            </td>
            <td className="px-2 py-2 whitespace-nowrap border border-gray-500">
              <div className="text-sm text-gray-900">Rp 250.000</div>
            </td>
          </tr>

          <tr>
            <td className="px-2 py-2 whitespace-nowrap border border-gray-500">
              <div className="text-sm text-gray-900 text-center">2</div>
            </td>
            <td className="px-2 py-2 whitespace-nowrap border border-gray-500">
              <div className="text-sm text-gray-900">
                Biaya Ospek, Almamater & Perlengkapan
              </div>
            </td>
            <td className="px-2 py-2 whitespace-nowrap border border-gray-500">
              <div className="text-sm text-gray-900">Rp 1.000.000</div>
            </td>
            <td className="px-2 py-2 whitespace-nowrap border border-gray-500">
              <div className="text-sm text-gray-900">Rp 1.000.000</div>
            </td>
          </tr>

          <tr>
            <td className="px-2 py-2 whitespace-nowrap border border-gray-500">
              <div className="text-sm text-gray-900 text-center">3</div>
            </td>
            <td className="px-2 py-2 whitespace-nowrap border border-gray-500">
              <div className="text-sm text-gray-900">
                Biaya Comlab (pertahun)
              </div>
            </td>
            <td className="px-2 py-2 whitespace-nowrap border border-gray-500">
              <div className="text-sm text-gray-900">Rp 450.000</div>
            </td>
            <td className="px-2 py-2 whitespace-nowrap border border-gray-500">
              <div className="text-sm text-gray-900">Rp 450.000</div>
            </td>
          </tr>

          <tr>
            <td className="px-2 py-2 whitespace-nowrap border border-gray-500">
              <div className="text-sm text-gray-900 text-center">4</div>
            </td>
            <td className="px-2 py-2 whitespace-nowrap border border-gray-500">
              <div className="text-sm text-gray-900">
                Iuran BEM (Rp 75.000/tahun)
              </div>
            </td>
            <td className="px-2 py-2 whitespace-nowrap border border-gray-500">
              <div className="text-sm text-gray-900">Rp 225.000</div>
            </td>
            <td className="px-2 py-2 whitespace-nowrap border border-gray-500">
              <div className="text-sm text-gray-900">Rp 225.000</div>
            </td>
          </tr>

          <tr>
            <td
              colSpan={"2"}
              className="px-2 py-2 whitespace-nowrap border border-gray-500"
            >
              <div className="text-md text-gray-900 text-center">Total</div>
            </td>
            <td className="px-2 py-2 whitespace-nowrap border border-gray-500">
              <div className="text-sm text-gray-900">Rp 1.925.000</div>
            </td>
            <td className="px-2 py-2 whitespace-nowrap border border-gray-500">
              <div className="text-sm text-gray-900">Rp 2.00.000</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UangRegistrasi;
