const KurikulumManajemen = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="border border-solid border-black h-max my-20 mx-20 mt-36 p-12">
          <div className="mb-12 text-center">
            <h1 className="text-5xl font-semibold">Kurikulum S1 Manajemen</h1>
            <hr className="border-blue-500 border-b-4 w-10/12 mx-auto mt-3" />
          </div>

          <div>
            {/* //-------------------------------------->>>>> SEMESTER 1 <<<<<-------------------------------------- */}
            <h1 className="text-3xl font-semibold my-2">Semester 1</h1>
            <table className="">
              <thead className="">
                <tr className=" border-gray-200">
                  <th className="border-2 px-4 py-2 w-1/8">No</th>
                  <th className="border-2 px-4 py-2 w-4/8">Kode</th>
                  <th className="border-2 px-4 py-2 w-full">
                    Nama Mata Kuliah
                  </th>
                  <th className="border-2 px-4 py-2 w-1/8">SKS</th>
                  <th className="border-2 px-4 py-2 w-1/8">Semester</th>
                  <th className="border-2 px-4 py-2 w-1/8">Teori</th>
                  <th className="border-2 px-4 py-2 w-1/8">Praktek</th>
                </tr>
              </thead>
              <tbody className="text-justify">
                <tr className=" border-gray-200">
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    1
                  </td>
                  <td className="px-4 py-2 border-2">6218AK01</td>
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "left" }}
                  >
                    Akuntansi Dasar I
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    3
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    1
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    2
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    1
                  </td>
                </tr>

                <tr className=" border-gray-200">
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    2
                  </td>
                  <td className="px-4 py-2 border-2">6118EK01</td>
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "left" }}
                  >
                    Pengantar Bisnis
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    2
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    1
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    2
                  </td>
                  <td className="border-2"></td>
                </tr>

                <tr className=" border-gray-200">
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    3
                  </td>
                  <td className="px-4 py-2 border-2">6118EK02</td>
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "left" }}
                  >
                    Pengantar Ekonomi Mikro
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    3
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    1
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    3
                  </td>
                  <td className="border-2"></td>
                </tr>

                <tr className=" border-gray-200">
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    4
                  </td>
                  <td className="px-4 py-2 border-2">6118MN01</td>
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "left" }}
                  >
                    Pengantar Manajemen
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    3
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    1
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    2
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    1
                  </td>
                </tr>

                <tr className=" border-gray-200">
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    5
                  </td>
                  <td className="px-4 py-2 border-2">6118EK03</td>
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "left" }}
                  >
                    Matematika Ekonomi Bisnis
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    3
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    1
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    3
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  ></td>
                </tr>

                <tr className=" border-gray-200">
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    6
                  </td>
                  <td className="px-4 py-2 border-2">6118SI01</td>
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "left" }}
                  >
                    Pengantar Teknologi Informasi
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    2
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    1
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  ></td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    2
                  </td>
                </tr>

                <tr className=" border-gray-200">
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    7
                  </td>
                  <td className="px-4 py-2 border-2">6118UM01</td>
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "left" }}
                  >
                    Agama
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    2
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    1
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    2
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  ></td>
                </tr>

                <tr className=" border-gray-200">
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    8
                  </td>
                  <td className="px-4 py-2 border-2">6118UM02</td>
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "left" }}
                  >
                    Pancasila dan Kewarganegaraan
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    2
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    1
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    2
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  ></td>
                </tr>

                <tr className=" border-gray-200">
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    9
                  </td>
                  <td className="px-4 py-2 border-2">6118UM03</td>
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "left" }}
                  >
                    Bahasa Inggris I
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    2
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    1
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    2
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  ></td>
                </tr>

                <tr className=" border-gray-200">
                  <td
                    colSpan={"3"}
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    Total
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    22
                  </td>

                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  ></td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    18
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    4
                  </td>
                </tr>
              </tbody>
            </table>

            {/* //-------------------------------------->>>>> SEMESTER 2 <<<<<-------------------------------------- */}
            <h1 className="text-3xl font-semibold my-2 mt-8">Semester 2</h1>
            <table className="">
              <thead className="">
                <tr className=" border-gray-200">
                  <th className="border-2 px-4 py-2 w-1/8">No</th>
                  <th className="border-2 px-4 py-2 w-4/8">Kode</th>
                  <th className="border-2 px-4 py-2 w-full">
                    Nama Mata Kuliah
                  </th>
                  <th className="border-2 px-4 py-2 w-1/8">SKS</th>
                  <th className="border-2 px-4 py-2 w-1/8">Semester</th>
                  <th className="border-2 px-4 py-2 w-1/8">Teori</th>
                  <th className="border-2 px-4 py-2 w-1/8">Praktek</th>
                </tr>
              </thead>
              <tbody className="text-justify">
                <tr className=" border-gray-200">
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    1
                  </td>
                  <td className="px-4 py-2 border-2">6118AK01</td>
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "left" }}
                  >
                    Akuntansi Dasar II
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    3
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    2
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    2
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    1
                  </td>
                </tr>

                <tr className=" border-gray-200">
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    2
                  </td>
                  <td className="px-4 py-2 border-2">6118MN02</td>
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "left" }}
                  >
                    Manajemen Pemasaran I
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    3
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    2
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    2
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    1
                  </td>
                </tr>

                <tr className=" border-gray-200">
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    3
                  </td>
                  <td className="px-4 py-2 border-2">6118EK04</td>
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "left" }}
                  >
                    Pengantar Ekonomi Makro
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    3
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    2
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    3
                  </td>
                  <td className="border-2"></td>
                </tr>

                <tr className=" border-gray-200">
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    4
                  </td>
                  <td className="px-4 py-2 border-2">6118UM04</td>
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "left" }}
                  >
                    Bahasa Inggris II
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    2
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    2
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    2
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  ></td>
                </tr>

                <tr className=" border-gray-200">
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    5
                  </td>
                  <td className="px-4 py-2 border-2">6118EK05</td>
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "left" }}
                  >
                    Statistik Ekonomi dan Bisnis
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    3
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    2
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    2
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    1
                  </td>
                </tr>

                <tr className=" border-gray-200">
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    6
                  </td>
                  <td className="px-4 py-2 border-2">6118SI02</td>
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "left" }}
                  >
                    Organisasi Tata Niaga
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    3
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    2
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    1
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    2
                  </td>
                </tr>

                <tr className=" border-gray-200">
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    7
                  </td>
                  <td className="px-4 py-2 border-2">6118EK06</td>
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "left" }}
                  >
                    Komunikasi Bisnis
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    3
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    2
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    2
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    1
                  </td>
                </tr>

                <tr className=" border-gray-200">
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    8
                  </td>
                  <td className="px-4 py-2 border-2">6118EK07</td>
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "left" }}
                  >
                    Lembaga Keuangan
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    2
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    2
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    2
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  ></td>
                </tr>

                <tr className=" border-gray-200">
                  <td
                    colSpan={"3"}
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    Total
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    22
                  </td>

                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  ></td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    16
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    6
                  </td>
                </tr>
              </tbody>
            </table>

            {/* //-------------------------------------->>>>> SEMESTER 3 <<<<<-------------------------------------- */}
            <h1 className="text-3xl font-semibold my-2 mt-8">Semester 3</h1>
            <table className="">
              <thead className="">
                <tr className=" border-gray-200">
                  <th className="border-2 px-4 py-2 w-1/8">No</th>
                  <th className="border-2 px-4 py-2 w-4/8">Kode</th>
                  <th className="border-2 px-4 py-2 w-full">
                    Nama Mata Kuliah
                  </th>
                  <th className="border-2 px-4 py-2 w-1/8">SKS</th>
                  <th className="border-2 px-4 py-2 w-1/8">Semester</th>
                  <th className="border-2 px-4 py-2 w-1/8">Teori</th>
                  <th className="border-2 px-4 py-2 w-1/8">Praktek</th>
                </tr>
              </thead>
              <tbody className="text-justify">
                <tr className=" border-gray-200">
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    1
                  </td>
                  <td className="px-4 py-2 border-2">6118AK03</td>
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "left" }}
                  >
                    Akuntansi Biaya
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    3
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    3
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    2
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    1
                  </td>
                </tr>

                <tr className=" border-gray-200">
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    2
                  </td>
                  <td className="px-4 py-2 border-2">6118MN03</td>
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "left" }}
                  >
                    Manajemen Operasional
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    3
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    3
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    2
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    1
                  </td>
                </tr>

                <tr className=" border-gray-200">
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    3
                  </td>
                  <td className="px-4 py-2 border-2">6118MN04</td>
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "left" }}
                  >
                    Manajemen Pemasaran II
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    3
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    3
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    2
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    1
                  </td>
                </tr>

                <tr className=" border-gray-200">
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    4
                  </td>
                  <td className="px-4 py-2 border-2">6118MN05</td>
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "left" }}
                  >
                    Manajemen Keuangan I
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    3
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    3
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    2
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    1
                  </td>
                </tr>

                <tr className=" border-gray-200">
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    5
                  </td>
                  <td className="px-4 py-2 border-2">6118EK08</td>
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "left" }}
                  >
                    Perilaku Organisasi
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    3
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    3
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    3
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  ></td>
                </tr>

                <tr className=" border-gray-200">
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    6
                  </td>
                  <td className="px-4 py-2 border-2">6118UM05</td>
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "left" }}
                  >
                    Kewirausahaan
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    3
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    3
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    2
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    1
                  </td>
                </tr>

                <tr className=" border-gray-200">
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    7
                  </td>
                  <td className="px-4 py-2 border-2">6118UM06</td>
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "left" }}
                  >
                    Hukum Bisnis
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    2
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    3
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    2
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  ></td>
                </tr>

                <tr className=" border-gray-200">
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    8
                  </td>
                  <td className="px-4 py-2 border-2">6118UM07</td>
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "left" }}
                  >
                    Bahasa Inggris 3
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    2
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    3
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    2
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  ></td>
                </tr>

                <tr className=" border-gray-200">
                  <td
                    colSpan={"3"}
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    Total
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    22
                  </td>

                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  ></td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    17
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    5
                  </td>
                </tr>
              </tbody>
            </table>

            {/* //-------------------------------------->>>>> SEMESTER 4 <<<<<-------------------------------------- */}
            <h1 className="text-3xl font-semibold my-2 mt-8">Semester 4</h1>
            <table className="">
              <thead className="">
                <tr className=" border-gray-200">
                  <th className="border-2 px-4 py-2 w-1/8">No</th>
                  <th className="border-2 px-4 py-2 w-4/8">Kode</th>
                  <th className="border-2 px-4 py-2 w-full">
                    Nama Mata Kuliah
                  </th>
                  <th className="border-2 px-4 py-2 w-1/8">SKS</th>
                  <th className="border-2 px-4 py-2 w-1/8">Semester</th>
                  <th className="border-2 px-4 py-2 w-1/8">Teori</th>
                  <th className="border-2 px-4 py-2 w-1/8">Praktek</th>
                </tr>
              </thead>
              <tbody className="text-justify">
                <tr className=" border-gray-200">
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    1
                  </td>
                  <td className="px-4 py-2 border-2">6118AK04</td>
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "left" }}
                  >
                    Akuntansi Manajemen
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    3
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    4
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    2
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    1
                  </td>
                </tr>

                <tr className=" border-gray-200">
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    2
                  </td>
                  <td className="px-4 py-2 border-2">6118MN06</td>
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "left" }}
                  >
                    Manajemen Keuangan II
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    3
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    4
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    2
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    1
                  </td>
                </tr>

                <tr className=" border-gray-200">
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    3
                  </td>
                  <td className="px-4 py-2 border-2">6118EK09</td>
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "left" }}
                  >
                    Perpajakan
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    3
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    4
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    2
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    1
                  </td>
                </tr>

                <tr className=" border-gray-200">
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    4
                  </td>
                  <td className="px-4 py-2 border-2">6118EK10</td>
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "left" }}
                  >
                    Perencanaan Bisnis
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    3
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    4
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    2
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    1
                  </td>
                </tr>

                <tr className=" border-gray-200">
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    5
                  </td>
                  <td className="px-4 py-2 border-2">6118UM07</td>
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "left" }}
                  >
                    Bahasa Inggris 4
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    2
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    4
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    2
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  ></td>
                </tr>

                <tr className=" border-gray-200">
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    6
                  </td>
                  <td className="px-4 py-2 border-2">6118EK11</td>
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "left" }}
                  >
                    Ekonomi Manajerial
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    3
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    4
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    3
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  ></td>
                </tr>

                <tr className=" border-gray-200">
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    7
                  </td>
                  <td className="px-4 py-2 border-2">6118EK12</td>
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "left" }}
                  >
                    Analis Laporan Keuangan dan Kinerja
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    3
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    4
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    2
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    1
                  </td>
                </tr>

                <tr className=" border-gray-200">
                  <td
                    colSpan={"3"}
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    Total
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    20
                  </td>

                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  ></td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    15
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    5
                  </td>
                </tr>
              </tbody>
            </table>

            {/* //-------------------------------------->>>>> SEMESTER 5 <<<<<-------------------------------------- */}
            <h1 className="text-3xl font-semibold my-2 mt-8">Semester 5</h1>
            <table className="">
              <thead className="">
                <tr className=" border-gray-200">
                  <th className="border-2 px-4 py-2 w-1/8">No</th>
                  <th className="border-2 px-4 py-2 w-4/8">Kode</th>
                  <th className="border-2 px-4 py-2 w-full">
                    Nama Mata Kuliah
                  </th>
                  <th className="border-2 px-4 py-2 w-1/8">SKS</th>
                  <th className="border-2 px-4 py-2 w-1/8">Semester</th>
                  <th className="border-2 px-4 py-2 w-1/8">Teori</th>
                  <th className="border-2 px-4 py-2 w-1/8">Praktek</th>
                </tr>
              </thead>
              <tbody className="text-justify">
                <tr className=" border-gray-200">
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    1
                  </td>
                  <td className="px-4 py-2 border-2">6118UM08</td>
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "left" }}
                  >
                    Metodologi Penelitian
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    3
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    5
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    2
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    1
                  </td>
                </tr>

                <tr className=" border-gray-200">
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    2
                  </td>
                  <td className="px-4 py-2 border-2">6118EK13</td>
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "left" }}
                  >
                    Teori Portufolio dan Analis Invenstasi
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    2
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    5
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    2
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  ></td>
                </tr>

                <tr className=" border-gray-200">
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    3
                  </td>
                  <td className="px-4 py-2 border-2">6118MN07</td>
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "left" }}
                  >
                    Manajemen Resiko
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    3
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    5
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    3
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  ></td>
                </tr>

                <tr className=" border-gray-200">
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    4
                  </td>
                  <td className="px-4 py-2 border-2">6118UM09</td>
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "left" }}
                  >
                    Etika Profesi dan Bisnis
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    2
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    5
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    2
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  ></td>
                </tr>

                <tr className=" border-gray-200">
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    5
                  </td>
                  <td className="px-4 py-2 border-2">6118MN08</td>
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "left" }}
                  >
                    Sistem Pengendalian Manajemen
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    3
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    5
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    2
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    1
                  </td>
                </tr>

                <tr className=" border-gray-200">
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    6
                  </td>
                  <td className="px-4 py-2 border-2">6118MN09</td>
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "left" }}
                  >
                    Manajemen Perubahan dan Budaya Perusahaan
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    3
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    5
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    3
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  ></td>
                </tr>

                <tr className=" border-gray-200">
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    7
                  </td>
                  <td className="px-4 py-2 border-2">6118EK14</td>
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "left" }}
                  >
                    Penganggaran Perusahaan
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    2
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    5
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    2
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  ></td>
                </tr>

                <tr className=" border-gray-200">
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    8
                  </td>
                  <td className="px-4 py-2 border-2">6118EK15</td>
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "left" }}
                  >
                    Bisnis Internasional
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    2
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    5
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    2
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  ></td>
                </tr>

                <tr className=" border-gray-200">
                  <td
                    colSpan={"3"}
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    Total
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    20
                  </td>

                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  ></td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    18
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    2
                  </td>
                </tr>
              </tbody>
            </table>

            {/* //-------------------------------------->>>>> SEMESTER 6 <<<<<-------------------------------------- */}
            <h1 className="text-3xl font-semibold my-2 mt-8">Semester 6</h1>
            <table className="">
              <thead className="">
                <tr className=" border-gray-200">
                  <th className="border-2 px-4 py-2 w-1/8">No</th>
                  <th className="border-2 px-4 py-2 w-4/8">Kode</th>
                  <th className="border-2 px-4 py-2 w-full">
                    Nama Mata Kuliah
                  </th>
                  <th className="border-2 px-4 py-2 w-1/8">SKS</th>
                  <th className="border-2 px-4 py-2 w-1/8">Semester</th>
                  <th className="border-2 px-4 py-2 w-1/8">Teori</th>
                  <th className="border-2 px-4 py-2 w-1/8">Praktek</th>
                </tr>
              </thead>
              <tbody className="text-justify">
                <tr className=" border-gray-200">
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    1
                  </td>
                  <td className="px-4 py-2 border-2">6118MN10</td>
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "left" }}
                  >
                    Manajemen Sumber Daya Manusia
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    3
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    6
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    3
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  ></td>
                </tr>

                <tr className=" border-gray-200">
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    2
                  </td>
                  <td className="px-4 py-2 border-2">6118EK16</td>
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "left" }}
                  >
                    Perekonomian Indonesia
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    2
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    6
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    2
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  ></td>
                </tr>

                <tr className=" border-gray-200">
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    3
                  </td>
                  <td className="px-4 py-2 border-2">6118MN11</td>
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "left" }}
                  >
                    Manajemen Inovasi
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    3
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    6
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    3
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  ></td>
                </tr>

                <tr className=" border-gray-200">
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    4
                  </td>
                  <td className="px-4 py-2 border-2">6118EK17</td>
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "left" }}
                  >
                    Investasi dan Pasar Modal
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    3
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    6
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    3
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  ></td>
                </tr>

                <tr className=" border-gray-200">
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    5
                  </td>
                  <td className="px-4 py-2 border-2">6118MN12</td>
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "left" }}
                  >
                    Manajemen Strategi
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    3
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    6
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    3
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  ></td>
                </tr>

                <tr className=" border-gray-200">
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    6
                  </td>
                  <td className="px-4 py-2 border-2">6118EK18</td>
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "left" }}
                  >
                    Studi Kelayakan Bisnis
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    3
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    6
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    2
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    1
                  </td>
                </tr>

                <tr className=" border-gray-200">
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    7
                  </td>
                  <td className="px-4 py-2 border-2">6118MN13</td>
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "left" }}
                  >
                    Pengambilan Keputusan Manajemen
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    3
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    6
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    3
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  ></td>
                </tr>

                <tr className=" border-gray-200">
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    8
                  </td>
                  <td className="px-4 py-2 border-2">6118MN14</td>
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "left" }}
                  >
                    Sistem Informasi Manajemen
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    3
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    6
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    2
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    1
                  </td>
                </tr>

                <tr className=" border-gray-200">
                  <td
                    colSpan={"3"}
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    Total
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    23
                  </td>

                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  ></td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    21
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    22
                  </td>
                </tr>
              </tbody>
            </table>

            {/* //-------------------------------------->>>>> SEMESTER 7 <<<<<-------------------------------------- */}
            <h1 className="text-3xl font-semibold my-2 mt-8">Semester 7</h1>
            <table className="">
              <thead className="">
                <tr className=" border-gray-200">
                  <th className="border-2 px-4 py-2 w-1/8">No</th>
                  <th className="border-2 px-4 py-2 w-4/8">Kode</th>
                  <th className="border-2 px-4 py-2 w-full">
                    Nama Mata Kuliah
                  </th>
                  <th className="border-2 px-4 py-2 w-1/8">SKS</th>
                  <th className="border-2 px-4 py-2 w-1/8">Semester</th>
                  <th className="border-2 px-4 py-2 w-1/8">Teori</th>
                  <th className="border-2 px-4 py-2 w-1/8">Praktek</th>
                </tr>
              </thead>
              <tbody className="text-justify">
                <tr className=" border-gray-200">
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    1
                  </td>
                  <td className="px-4 py-2 border-2">6118MN15</td>
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "left" }}
                  >
                    Teori Motivasi dan Kepemimpinan
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    3
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    7
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    2
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    1
                  </td>
                </tr>

                <tr className=" border-gray-200">
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    2
                  </td>
                  <td className="px-4 py-2 border-2">6118MN16</td>
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "left" }}
                  >
                    Manajemen Keuangan Internasional
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    3
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    7
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    3
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  ></td>
                </tr>

                <tr className=" border-gray-200">
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    3
                  </td>
                  <td className="px-4 py-2 border-2"> 6118SI03</td>
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "left" }}
                  >
                    Bisnis Digital dan Inteligensi Bisnis
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    3
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    7
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    2
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    1
                  </td>
                </tr>

                <tr className=" border-gray-200">
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    4
                  </td>
                  <td className="px-4 py-2 border-2">6118UM10</td>
                  <td
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "left" }}
                  >
                    Skripsi
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    6
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    7
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    2
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    4
                  </td>
                </tr>

                <tr className=" border-gray-200">
                  <td
                    colSpan={"3"}
                    className="px-4 py-2 border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    Total
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    15
                  </td>

                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  ></td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    9
                  </td>
                  <td
                    className="border-2"
                    style={{ verticalAlign: "center", textAlign: "center" }}
                  >
                    6
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

export default KurikulumManajemen;
