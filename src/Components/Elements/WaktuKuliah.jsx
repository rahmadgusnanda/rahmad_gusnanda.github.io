const WaktuKuliah = () => {
  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24">
      <h2 className="text-2xl m-1 mt-4 mb-2">Waktu Kuliah</h2>
      <p className="my-1">UMT dan YTB menyediakan 2 pilihan waktu kuliah:</p>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr className="text-center">
              <th className="font-medium text-black border border-gray-500">
                No
              </th>
              <th className="font-medium text-black border border-gray-500">
                Kelas
              </th>
              <th className="font-medium text-black border border-gray-500">
                Waktu
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-1 py-1 whitespace-nowrap border border-gray-500">
                <div className="text-sm text-gray-900 text-center">1</div>
              </td>
              <td className="px-1 py-1 whitespace-nowrap border border-gray-500">
                <div className="text-sm text-gray-900">Pagi</div>
              </td>
              <td className="px-1 py-1 whitespace-nowrap border border-gray-500">
                <div className="text-sm text-gray-900">08:00 - 12:00</div>
              </td>
            </tr>
            <tr>
              <td className="px-1 py-1 whitespace-nowrap border border-gray-500">
                <div className="text-sm text-gray-900 text-center">2</div>
              </td>
              <td className="px-1 py-1 whitespace-nowrap border border-gray-500">
                <div className="text-sm text-gray-900">Sore</div>
              </td>
              <td className="px-1 py-1 whitespace-nowrap border border-gray-500">
                <div className="text-sm text-gray-900">17:20 - 21:00</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WaktuKuliah;
