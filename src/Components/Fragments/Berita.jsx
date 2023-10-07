import React from "react";

const Berita = () => {
  const beritaData = [
    {
      judul: "Berita 1",
      deskripsi: "Deskripsi berita 1...",
      tanggal: "21/09/2023",
    },
    {
      judul: "Berita 2",
      deskripsi: "Deskripsi berita 2...",
      tanggal: "20/09/2023",
    },
    // Tambahkan berita lainnya sesuai kebutuhan
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {beritaData.map((berita, index) => (
        <div key={index} className="border border-gray-400 mx-6 w-1/4 p-4 mb-4">
          <h2 className="text-xl font-semibold mb-2">{berita.judul}</h2>
          <p className="text-gray-700 mb-4">{berita.deskripsi}</p>
          <p className="text-gray-600">{berita.tanggal}</p>
        </div>
      ))}
    </div>
  );
};

export default Berita;
