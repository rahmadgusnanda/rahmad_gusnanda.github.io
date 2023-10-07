// import React from "react";

// const DataPendaftar = ({ data }) => {
//   const handleDelete = (id) => {
//     const updatedApplicants = applicants.filter(
//       (data) => data.id !== id
//     );
//     setApplicants(updatedApplicants);
//   };
//   return (
//     <div className="flex justify-center">
//       <table className="min-w-full">
//         <thead>
//           <tr>
//             <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
//               NISN
//             </th>
//             <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
//               Nama
//             </th>
//             <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
//               Tempat Lahir
//             </th>
//             <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
//               Tanggal Lahir
//             </th>
//             <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
//               Aksi
//             </th>
//           </tr>
//         </thead>
//         {/* <tbody className="bg-white divide-y divide-gray-200">
//           {data.map((entry) => (
//             <tr key={entry.id}>
//               <td className="px-6 py-4 whitespace-no-wrap">
//                 <div className="text-sm leading-5 text-gray-900">
//                   {entry.nisn}
//                 </div>
//               </td>
//               <td className="px-6 py-4 whitespace-no-wrap">
//                 <div className="text-sm leading-5 text-gray-900">
//                   {entry.nama}
//                 </div>
//               </td>
//               <td className="px-6 py-4 whitespace-no-wrap">
//                 <div className="text-sm leading-5 text-gray-900">
//                   {entry.tempatlahir}
//                 </div>
//               </td>
//               <td className="px-6 py-4 whitespace-no-wrap">
//                 <div className="text-sm leading-5 text-gray-900">
//                   {entry.tanggallahir}
//                 </div>
//               </td>
//               <td>
//                 <button
//                   className="px-2 py-1 bg-red-500 text-white rounded"
//                   onClick={() => handleDelete(data.id)}
//                 >
//                   Hapus
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody> */}
//       </table>
//     </div>
//   );
// };

// export default DataPendaftar;

// // import React, { useState } from "react";

// // const DataPendaftar = () => {
// //   const [applicants, setApplicants] = useState([
// //     { id: 1, name: "John Doe", email: "john@example.com" },
// //     { id: 2, name: "Jane Smith", email: "jane@example.com" },
// //     // ...Tambahkan data pendaftar lainnya di sini
// //   ]);

// //   const handleDelete = (id) => {
// //     const updatedApplicants = applicants.filter(
// //       (applicant) => applicant.id !== id
// //     );
// //     setApplicants(updatedApplicants);
// //   };

// //   return (
// //     <div className="p-4">
// //       <h2 className="text-2xl font-semibold mb-4">Data Pendaftar</h2>
// //       <ul className="space-y-2">
// //         {applicants.map((applicant) => (
// //           <li
// //             key={applicant.id}
// //             className="flex items-center justify-between p-2 border rounded"
// //           >
// //             <div>
// //               <p className="font-semibold">{applicant.name}</p>
// //               <p className="text-gray-500">{applicant.email}</p>
// //             </div>
// //             <button
// //               className="px-2 py-1 bg-red-500 text-white rounded"
// //               onClick={() => handleDelete(applicant.id)}
// //             >
// //               Hapus
// //             </button>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default DataPendaftar;

// import React, { useState } from "react";

// const DataPendaftar = () => {
//   const initialApplicants = [
//     { id: 1, name: "John Doe", email: "john@example.com" },
//     { id: 2, name: "Jane Smith", email: "jane@example.com" },
//     // ...Tambahkan data pendaftar lainnya di sini
//   ];

//   const [applicants, setApplicants] = useState(initialApplicants);
//   const [searchQuery, setSearchQuery] = useState("");

//   const handleSearch = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   const filteredApplicants = applicants.filter(
//     (applicant) =>
//       applicant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       applicant.email.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-semibold mb-4">Data Pendaftar</h2>
//       <input
//         type="text"
//         placeholder="Cari nama atau email"
//         className="px-4 py-2 border rounded w-full mb-4"
//         value={searchQuery}
//         onChange={handleSearch}
//       />
//       <ul className="space-y-2">
//         {filteredApplicants.map((applicant) => (
//           <li
//             key={applicant.id}
//             className="flex items-center justify-between p-2 border rounded"
//           >
//             <div>
//               <p className="font-semibold">{applicant.name}</p>
//               <p className="text-gray-500">{applicant.email}</p>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default DataPendaftar;

// import React, { useState } from "react";

// const DataPendaftar = ({ data }) => {
//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-semibold mb-4">Data Pendaftar</h2>
//       <ul className="space-y-2">
//         {data.map((applicant) => (
//           <li
//             key={applicant.id}
//             className="flex items-center p-2 border rounded"
//           >
//             <div>
//               <p className="font-semibold">{applicant.name}</p>
//               <p className="text-gray-500">{applicant.email}</p>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default DataPendaftar;

//===============================================================================================================================

// import React, { useState } from "react";

// const DataPendaftar = () => {
//   const [pendaftarList, setPendaftarList] = useState([
//     { id: 1, nama: "John Doe", email: "john@example.com" },
//     { id: 2, nama: "Jane Smith", email: "jane@example.com" },
//     // Tambahkan data pendaftar lainnya di sini
//   ]);

//   const [searchTerm, setSearchTerm] = useState("");

//   const handleDelete = (id) => {
//     const updatedList = pendaftarList.filter(
//       (pendaftar) => pendaftar.id !== id
//     );
//     setPendaftarList(updatedList);
//   };

//   const filteredPendaftar = pendaftarList.filter((pendaftar) =>
//     pendaftar.nama.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="p-4">
//       <h1 className="text-xl font-semibold mb-4">Daftar Pendaftar</h1>
//       <input
//         type="text"
//         placeholder="Cari pendaftar..."
//         className="border rounded p-2 mb-4"
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <ul>
//         {filteredPendaftar.map((pendaftar) => (
//           <li
//             key={pendaftar.id}
//             className="flex justify-between items-center border-b p-2"
//           >
//             <div>
//               <p className="font-semibold">{pendaftar.nama}</p>
//               <p className="text-gray-500">{pendaftar.email}</p>
//             </div>
//             <button
//               className="text-red-500 hover:text-red-700"
//               onClick={() => handleDelete(pendaftar.id)}
//             >
//               Hapus
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default DataPendaftar;

//===============================================================================================================================

import React, { useState } from "react";
import { Link } from "react-router-dom";

const ListPendaftar = ({ data, onDelete }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = data.filter((pendaftar) =>
    pendaftar.nisn.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="">
      <h1 className="text-xl font-semibold ">Daftar Mahasiswa Pendaftar</h1>

      <form action="" className="grid sm:grid-cols-2 justify-start">
        <div className="my-10">
          <label className="block mb-1 font-medium">Jurusan :</label>
          <select
            className="w-full p-2 border border-gray-400 rounded"
            onChange={(e) => handleInputChange("jurusan", e.target.value)}
          >
            <option value="" disabled>
              Pilih Jurusan
            </option>
            <option value="Teknik Komputer">Teknik Komputer</option>
            <option value="Komputerisasi Akuntansi">
              Komputerisasi Akuntansi
            </option>
            <option value="Keuangan Perbankan">Keuangan Perbankan</option>
            <option value="Manajemen Administrasi Perkantoran">
              Manajemen Administrasi Perkantoran
            </option>
            <option value="Manajemen Administrasi Perkantoran">
              Akuntansi
            </option>
            <option value="Manajemen Administrasi Perkantoran">
              Manajemen
            </option>
          </select>
        </div>

        <div className="flex items-center justify-end">
          <input
            type="text"
            placeholder="Cari pendaftar..."
            className="border border-gray-400 rounded h-10 w-48 mt-7"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </form>

      <table className="w-full">
        <thead>
          <tr className="bg-gray-200 border border-black">
            <th className="py-2 px-4 border border-black">NO</th>
            <th className="py-2 px-4 border border-black">Nama</th>
            <th className="py-2 px-4 border border-black">Jurusan</th>
            <th className="py-2 px-4 border border-black">Tanggal Lahir</th>
            <th className="py-2 px-4 border border-black">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((pendaftar) => (
            <tr key={pendaftar.id} className="border-b">
              <td className="py-2 px-4 border border-black text-center">
                {pendaftar.nisn}
              </td>
              <td className="py-2 px-4 border border-black">
                {pendaftar.nama}
              </td>

              <td className="py-2 px-4 border border-black">
                {pendaftar.tempatlahir}
              </td>
              <td className="py-2 px-4 border border-black">
                {pendaftar.tanggallahir}
              </td>
              <td className="border border-black text-center">
                <button
                  className="text-black text-sm hover:text-white border bg-green-500 rounded p-1 m-1"
                  //     onClick={() => onDelete(pendaftar.id)}
                >
                  <Link to="/detailpendaftar">Lihat</Link>
                </button>
                <button
                  className="text-black text-sm hover:text-white border bg-red-500 rounded p-1 m-1"
                  onClick={() => onDelete(pendaftar.id)}
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListPendaftar;
