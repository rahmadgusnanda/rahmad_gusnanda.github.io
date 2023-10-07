// import React from "react";
// import DataPendaftar from "../Components/Fragments/DataPendaftar";
// import SearchBar from "../Components/Layouts/SearchBar";

// const data = [
//   {
//     nisn: 1,
//     nama: "John Doe",
//     tempatlahir: "Pematangsiantar",
//     tanggallahir: "30-08-2002",
//   },
// ];

// const App = () => {
//   return (
//     <div className="p-8">
//       <h1 className="text-2xl font-semibold mb-4">Data Pendaftar</h1>
//       <SearchBar />
//       <DataPendaftar data={data} />
//     </div>
//   );
// };

// export default App;

import React, { useState } from "react";

function ListPendaftarPage() {
  const [pendaftarList, setPendaftarList] = useState([
    {
      id: 1,
      nisn: "111",
      nama: "Rahmad Gusnanda",
      tempatlahir: "Pematangsiantar",
      tanggallahir: "30-08-2002",
    },
    {
      id: 2,
      nisn: "222",
      nama: "Jane Smith",
      tempatlahir: "Pematangsiantar",
      tanggallahir: "1-1-2000",
    },
    // Tambahkan data pendaftar lainnya di sini
  ]);

  const handleDelete = (id) => {
    const updatedList = pendaftarList.filter(
      (pendaftar) => pendaftar.id !== id
    );
    setPendaftarList(updatedList);
  };

  return (
    <div className="min-h-screen flex justify-center m-6">
      <DataPendaftar data={pendaftarList} onDelete={handleDelete} />
    </div>
  );
}

export default ListPendaftarPage;
