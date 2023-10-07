const UangK = () => {
  return (
    <div className="flex justify-center">
      <div className="sm:-mx-6 lg:-mx-8">
        <div className="sm:px-6 lg:px-8">
          <div className=" border-gray-500">
            <table className=" divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-2 py-2 text-left text-xs font-medium text-gray-500 border border-gray-500">
                    No
                  </th>
                  <th className="px-2 py-2 text-left text-xs font-medium text-gray-500 border border-gray-500">
                    Program Studi
                  </th>
                  <th className="px-2 py-2 text-left text-xs font-medium text-gray-500 border border-gray-500">
                    Kelas
                  </th>
                  <th className="px-2 py-2 text-left text-xs font-medium text-gray-500 border border-gray-500">
                    Besar Uang Kuliah Per Tahun
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-2 py-2 whitespace-nowrap border border-gray-500">
                    <div className="text-sm text-gray-900 ">1</div>
                  </td>
                  <td
                    rowSpan={"2"}
                    className="px-6 py-4 whitespace-nowrap border border-gray-500"
                  >
                    <div className="text-sm text-gray-900">Teknik Komputer</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border border-gray-500">
                    <div className="text-sm text-gray-900">Pagi</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border border-gray-500">
                    <div className="text-sm text-gray-900">Rp. 5.600.000</div>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap border border-gray-500">
                    <div className="text-sm text-gray-900">2</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border border-gray-500">
                    <div className="text-sm text-gray-900">Malam</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border border-gray-500">
                    <div className="text-sm text-gray-900">Malam</div>
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

export default UangK;
