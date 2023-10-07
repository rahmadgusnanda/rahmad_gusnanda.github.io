import React, { useState } from "react";

const Validasi = () => {
  const [formData, setFormData] = useState({
    nama: "",
    asalsekolah: "",
    nisn: "",
    tempatlahir: "",
    tanggallahir: "",
    alamat: "",
    phone: "",
    email: "",
    agama: "",
    badan: "",
    bersaudara: "",
    kecamatan: "",
    kelurahan: "",
    namaayah: "",
    nikayah: "",
    pendidikanayah: "",
    pekerjaanayah: "",
    phoneayah: "",
    namaibu: "",
    nikibu: "",
    pendidikanibu: "",
    pekerjaanibu: "",
    phoneibu: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (formData.nama.trim() === "") {
      newErrors.nama = "Nama harus diisi.";
    }

    if (formData.asalsekolah.trim() === "") {
      newErrors.asalsekolah = "Asal Sekolah harus diisi.";
    }

    if (formData.nisn.trim() === "") {
      newErrors.nisn = "NISN harus diisi.";
    }

    if (formData.tempatlahir.trim() === "") {
      newErrors.tempatlahir = "Tempat Lahir harus diisi.";
    }

    if (!/^\d+$/.test(formData.phone)) {
      newErrors.phone = "Nomor Telepon harus berupa angka.";
    }

    if (!formData.email.includes("@")) {
      newErrors.email = "Email harus valid.";
    }

    if (formData.alamat.trim() === "") {
      newErrors.alamat = "Alamat harus diisi.";
    }

    if (formData.agama.trim() === "") {
      newErrors.agama = "Agama harus diisi.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (inputNama, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [inputNama]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Data berhasil divalidasi dan dikirim:", formData);
      // Lakukan tindakan selanjutnya, misalnya pengiriman data ke server
    }
  };

  return (
    <div className="max-w-7xl mx-auto mt-4 p-4 border">
      <h2 className="text-xl font-semibold mb-4">Form Data Diri</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 w-full">
        {/* Nama */}
        <div className="mb-4 mx-4">
          <label className="block mb-1 font-medium">Nama</label>
          <input
            type="text"
            className={`w-full p-2 border rounded ${
              errors.nama ? "border-red-500" : ""
            }`}
            value={formData.nama}
            onChange={(e) => handleInputChange("nama", e.target.value)}
          />
          {errors.nama && (
            <p className="text-red-500 text-sm mt-1">{errors.nama}</p>
          )}
        </div>

        {/* Asal Sekolah */}
        <div className="mb-4 mx-4">
          <label className="block mb-1 font-medium">Asal Sekolah</label>
          <input
            type="text"
            className={`w-full p-2 border rounded ${
              errors.asalsekolah ? "border-red-500" : ""
            }`}
            value={formData.asalsekolah}
            onChange={(e) => handleInputChange("asalsekolah", e.target.value)}
          />
          {errors.asalsekolah && (
            <p className="text-red-500 text-sm mt-1">{errors.asalsekolah}</p>
          )}
        </div>

        {/* NISN */}
        <div className="mb-4 mx-4">
          <label className="block mb-1 font-medium">NISN</label>
          <input
            type="text"
            className={`w-full p-2 border rounded ${
              errors.nisn ? "border-red-500" : ""
            }`}
            value={formData.nisn}
            onChange={(e) => handleInputChange("nisn", e.target.value)}
          />
          {errors.nisn && (
            <p className="text-red-500 text-sm mt-1">{errors.nisn}</p>
          )}
        </div>

        {/* Tempat Lahir */}
        <div className="mb-4 mx-4">
          <label className="block mb-1 font-medium">Tempat Lahir</label>
          <input
            type="text"
            className={`w-full p-2 border rounded ${
              errors.tempatlahir ? "border-red-500" : ""
            }`}
            value={formData.tempatlahir}
            onChange={(e) => handleInputChange("tempatlahir", e.target.value)}
          />
          {errors.tempatlahir && (
            <p className="text-red-500 text-sm mt-1">{errors.tempatlahir}</p>
          )}
        </div>

        {/* Alamat */}
        <div className="mb-4 mx-4">
          <label className="block mb-1 font-medium">Alamat</label>
          <textarea
            className={`w-full p-2 border rounded ${
              errors.alamat ? "border-red-500" : ""
            }`}
            value={formData.alamat}
            onChange={(e) => handleInputChange("alamat", e.target.value)}
          />
          {errors.alamat && (
            <p className="text-red-500 text-sm mt-1">{errors.alamat}</p>
          )}
        </div>

        {/* Nomor Telepon */}
        <div className="mb-4 mx-4">
          <label className="block mb-1 font-medium">Nomor Telepon</label>
          <input
            type="tel"
            className={`w-full p-2 border rounded ${
              errors.phone ? "border-red-500" : ""
            }`}
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>

        {/* Email */}
        <div className="mb-4 mx-4">
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            className={`w-full p-2 border rounded ${
              errors.email ? "border-red-500" : ""
            }`}
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>
      </form>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </div>
  );
};

export default Validasi;
