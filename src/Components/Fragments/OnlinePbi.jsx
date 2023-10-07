import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";

const OnlinePbi = () => {
  const [formData, setFormData] = useState({
    nama: "",
    asalsekolah: "",
    nisn: "",
    jenisKelamin: "",
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
    upload: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    // ---------------------------------------->>>>> FORM MAHASISWA <<<<----------------------------------------
    if (formData.nama.trim() === "") {
      newErrors.nama = "Nama harus diisi.";
    }

    if (formData.asalsekolah.trim() === "") {
      newErrors.asalsekolah = "Asal Sekolah harus diisi.";
    }

    if (!formData.email.includes("@")) {
      newErrors.email = "Email harus valid.";
    }

    if (!/^\d+$/.test(formData.nisn)) {
      newErrors.nisn = "NISN harus diisi.";
    }

    if (formData.jenisKelamin.trim() === "") {
      newErrors.jenisKelamin = "Jenis kelamin harus dipilih.";
    }

    if (formData.tempatlahir.trim() === "") {
      newErrors.tempatlahir = "Tempat Lahir harus diisi.";
    }

    if (formData.tanggallahir.trim() === "") {
      newErrors.tanggallahir = "Tanggal Lahir harus diisi.";
    }

    if (formData.alamat.trim() === "") {
      newErrors.alamat = "Alamat harus diisi.";
    }

    if (!/^\d+$/.test(formData.phone)) {
      newErrors.phone = "Nomor Telepon harus berupa angka.";
    }

    if (!formData.email.includes("@")) {
      newErrors.email = "Email harus valid.";
    }

    if (formData.agama.trim() === "") {
      newErrors.agama = "Agama harus diisi.";
    }

    if (formData.badan.trim() === "") {
      newErrors.badan = "Tinggi dan Berat badan harus diisi.";
    }

    if (formData.bersaudara.trim() === "") {
      newErrors.bersaudara = "Jumlah saudara harus diisi.";
    }

    if (formData.kecamatan.trim() === "") {
      newErrors.kecamatan = "Kecamatan harus diisi.";
    }

    if (formData.kelurahan.trim() === "") {
      newErrors.kelurahan = "Kelurahan harus diisi.";
    }

    // ---------------------------------------->>>>> FORM AYAH <<<<----------------------------------------
    if (formData.namaayah.trim() === "") {
      newErrors.namaayah = "Nama Ayah harus diisi.";
    }

    if (!/^\d+$/.test(formData.nikayah)) {
      newErrors.nikayah = "NIK harus berupa angka.";
    }

    if (formData.pendidikanayah.trim() === "") {
      newErrors.pendidikanayah = "Pendidikan Ayah harus diisi.";
    }

    if (formData.pekerjaanayah.trim() === "") {
      newErrors.pekerjaanayah = "Pekerjaan Ayah harus diisi.";
    }

    if (!/^\d+$/.test(formData.phoneayah)) {
      newErrors.phoneayah = "Nomor Telepon harus berupa angka.";
    }

    // ---------------------------------------->>>>> FORM IBU <<<<----------------------------------------
    if (formData.namaibu.trim() === "") {
      newErrors.namaibu = "Nama Ibu harus diisi.";
    }

    if (!/^\d+$/.test(formData.nikibu)) {
      newErrors.nikibu = "NIK harus berupa angka.";
    }

    if (formData.pendidikanibu.trim() === "") {
      newErrors.pendidikanibu = "Pendidikan Ibu harus diisi.";
    }

    if (formData.pekerjaanibu.trim() === "") {
      newErrors.pekerjaanibu = "Pekerjaan Ibu harus diisi.";
    }

    if (!/^\d+$/.test(formData.phoneibu)) {
      newErrors.phoneibu = "Nomor Telepon harus berupa angka.";
    }

    if (formData.upload.trim() === "") {
      newErrors.upload = "Upload bukti transfer.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (inputName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [inputName]: value,
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
    <div
      className="max-w-6xl mx-auto my-8 p-4 border border-gray-300 shadow-lg
     shadow-gray-400 rounded-md"
    >
      <h2 className="text-xl font-semibold mb-10 text-center">
        Form Data Diri
        <br />
        YAYASAN TAPEUMULIA BANGSA
      </h2>
      <form onSubmit={handleSubmit} className="sm:grid grid-cols-2">
        {/*---------------------------------------->>>>> Nama MAHASISWA <<<<<----------------------------------------*/}
        <div className="mb-4 mx-4">
          <label className="block mb-1 font-medium">Nama</label>
          <input
            type="text"
            className={`w-full p-2 border border-gray-400 rounded ${
              errors.nama ? "border-red-500" : ""
            }`}
            value={formData.nama}
            onChange={(e) => handleInputChange("nama", e.target.value)}
          />
          {errors.nama && (
            <p className="text-red-500 text-sm mt-1">{errors.nama}</p>
          )}
        </div>

        {/*---------------------------------------->>>>> Asal Sekolah <<<<<----------------------------------------*/}
        <div className="mb-4 mx-4">
          <label className="block mb-1 font-medium">Asal Sekolah</label>
          <input
            type="text"
            className={`w-full p-2 border border-gray-400 rounded ${
              errors.asalsekolah ? "border-red-500" : ""
            }`}
            value={formData.asalsekolah}
            onChange={(e) => handleInputChange("asalsekolah", e.target.value)}
          />
          {errors.asalsekolah && (
            <p className="text-red-500 text-sm mt-1">{errors.asalsekolah}</p>
          )}
        </div>

        {/*---------------------------------------->>>>> NISN <<<<---------------------------------------- */}
        <div className="mb-4 mx-4">
          <label className="block mb-1 font-medium">NISN</label>
          <input
            type="text"
            className={`w-full p-2 border border-gray-400 rounded ${
              errors.nisn ? "border-red-500" : ""
            }`}
            value={formData.nisn}
            onChange={(e) => handleInputChange("nisn", e.target.value)}
          />
          {errors.nisn && (
            <p className="text-red-500 text-sm mt-1">{errors.nisn}</p>
          )}
        </div>

        {/* ---------------------------------------->>>>> JENIS KELAMIN <<<<----------------------------------------*/}
        <div className="mb-4 mx-4">
          <label className="block mb-1 font-medium">Jenis Kelamin</label>
          <div>
            <label className="inline-flex items-center">
              <input
                type="radio"
                className={`mr-2 ${
                  errors.jenisKelamin ? "border-red-500" : ""
                }`}
                name="jenisKelamin"
                value="Laki-laki"
                checked={formData.jenisKelamin === "Laki-laki"}
                onChange={(e) =>
                  handleInputChange("jenisKelamin", e.target.value)
                }
              />
              Laki-laki
            </label>
            <label className="inline-flex items-center ml-4">
              <input
                type="radio"
                className={`mr-2 ${
                  errors.jenisKelamin ? "border-red-500" : ""
                }`}
                name="jenisKelamin"
                value="Perempuan"
                checked={formData.jenisKelamin === "Perempuan"}
                onChange={(e) =>
                  handleInputChange("jenisKelamin", e.target.value)
                }
              />
              Perempuan
            </label>
          </div>
          {errors.jenisKelamin && (
            <p className="text-red-500 text-sm mt-1">{errors.jenisKelamin}</p>
          )}
        </div>

        {/* ---------------------------------------->>>> JENIS KELAMIN <<<<----------------------------------------
        <div className="mb-4 mx-4">
          <label className="block mb-1 font-medium">Jenis Kelamin</label>
          <select
            className={`w-full p-2 border border-gray-400 rounded ${
              errors.jenisKelamin ? "border-red-500" : ""
            }`}
            value={formData.jenisKelamin}
            onChange={(e) => handleInputChange("jenisKelamin", e.target.value)}
          >
            <option value="" disabled>
              Pilih jenis kelamin
            </option>
            <option value="Laki-laki">Laki-laki</option>
            <option value="Perempuan">Perempuan</option>
          </select>
          {errors.jenisKelamin && (
            <p className="text-red-500 text-sm mt-1">{errors.jenisKelamin}</p>
          )}
        </div> */}

        {/*---------------------------------------->>>> Tempat Lahir <<<<----------------------------------------*/}
        <div className="mb-4 mx-4">
          <label className="block mb-1 font-medium">Tempat Lahir</label>
          <input
            type="text"
            className={`w-full p-2 border border-gray-400 rounded ${
              errors.tempatlahir ? "border-red-500" : ""
            }`}
            value={formData.tempatlahir}
            onChange={(e) => handleInputChange("tempatlahir", e.target.value)}
          />
          {errors.tempatlahir && (
            <p className="text-red-500 text-sm mt-1">{errors.tempatlahir}</p>
          )}
        </div>

        {/*---------------------------------------->>>>> Tanggal Lahir <<<<<----------------------------------------*/}
        <div className="mb-4 mx-4">
          <label className="block mb-1 font-medium">Tanggal Lahir</label>
          <DatePicker
            selected={formData.tanggallahir}
            onChange={(date) => handleInputChange("tanggallahir", date)}
            className={`w-full p-2 border border-gray-400 rounded ${
              errors.tanggallahir ? "border-red-500" : ""
            }`}
          />
          {errors.tanggallahir && (
            <p className="text-red-500 text-sm mt-1">{errors.tanggallahir}</p>
          )}
        </div>

        {/*---------------------------------------->>>> Alamat <<<<---------------------------------------- */}
        <div className="mb-4 mx-4">
          <label className="block mb-1 font-medium">Alamat</label>
          <textarea
            className={`w-full p-2 border border-gray-400 rounded ${
              errors.alamat ? "border-red-500" : ""
            }`}
            value={formData.alamat}
            onChange={(e) => handleInputChange("alamat", e.target.value)}
          />
          {errors.alamat && (
            <p className="text-red-500 text-sm mt-1">{errors.alamat}</p>
          )}
        </div>

        {/*---------------------------------------->>>>> Nomor Telepon <<<<<----------------------------------------*/}
        <div className="mb-4 mx-4">
          <label className="block mb-1 font-medium">Nomor Telepon</label>
          <input
            type="tel"
            className={`w-full p-2 border border-gray-400 rounded ${
              errors.phone ? "border-red-500" : ""
            }`}
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>

        {/*---------------------------------------->>>>> Email <<<<<---------------------------------------- */}
        <div className="mb-4 mx-4">
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            className={`w-full p-2 border border-gray-400 rounded ${
              errors.email ? "border-red-500" : ""
            }`}
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/*---------------------------------------->>>>> Agama <<<<<---------------------------------------- */}
        <div className="mb-4 mx-4">
          <label className="block mb-1 font-medium">Agama</label>
          <input
            type="text"
            className={`w-full p-2 border border-gray-400 rounded ${
              errors.agama ? "border-red-500" : ""
            }`}
            value={formData.agama}
            onChange={(e) => handleInputChange("agama", e.target.value)}
          />
          {errors.agama && (
            <p className="text-red-500 text-sm mt-1">{errors.agama}</p>
          )}
        </div>

        {/*---------------------------------------->>>>> Badan <<<<<---------------------------------------- */}
        <div className="mb-4 mx-4">
          <label className="block mb-1 font-medium">
            Tinggi dan Berat badan
          </label>
          <input
            type="text"
            className={`w-full p-2 border border-gray-400 rounded ${
              errors.badan ? "border-red-500" : ""
            }`}
            value={formData.badan}
            onChange={(e) => handleInputChange("badan", e.target.value)}
          />
          {errors.badan && (
            <p className="text-red-500 text-sm mt-1">{errors.badan}</p>
          )}
        </div>

        {/*---------------------------------------->>>>> Bersaudara <<<<<---------------------------------------- */}
        <div className="mb-4 mx-4">
          <label className="block mb-1 font-medium">
            Anak ke ... dari jumlah bersaudara
          </label>
          <input
            type="text"
            className={`w-full p-2 border border-gray-400 rounded ${
              errors.bersaudara ? "border-red-500" : ""
            }`}
            value={formData.bersaudara}
            onChange={(e) => handleInputChange("bersaudara", e.target.value)}
          />
          {errors.bersaudara && (
            <p className="text-red-500 text-sm mt-1">{errors.bersaudara}</p>
          )}
        </div>

        {/*---------------------------------------->>>>> Kecamatan <<<<<---------------------------------------- */}
        <div className="mb-4 mx-4">
          <label className="block mb-1 font-medium">Kecamatan</label>
          <input
            type="text"
            className={`w-full p-2 border border-gray-400 rounded ${
              errors.kecamatan ? "border-red-500" : ""
            }`}
            value={formData.kecamatan}
            onChange={(e) => handleInputChange("kecamatan", e.target.value)}
          />
          {errors.kecamatan && (
            <p className="text-red-500 text-sm mt-1">{errors.kecamatan}</p>
          )}
        </div>

        {/*---------------------------------------->>>>> Kelurahan <<<<<---------------------------------------- */}
        <div className="mb-4 mx-4">
          <label className="block mb-1 font-medium">Kelurahan</label>
          <input
            type="text"
            className={`w-full p-2 border border-gray-400 rounded ${
              errors.kelurahan ? "border-red-500" : ""
            }`}
            value={formData.kelurahan}
            onChange={(e) => handleInputChange("kelurahan", e.target.value)}
          />
          {errors.kelurahan && (
            <p className="text-red-500 text-sm mt-1">{errors.kelurahan}</p>
          )}
        </div>

        {/*---------------------------------------->>>>> Nama Ayah <<<<<----------------------------------------*/}
        <div className="mb-4 mx-4">
          <label className="block mb-1 font-medium">Nama Ayah</label>
          <input
            type="text"
            className={`w-full p-2 border border-gray-400 rounded ${
              errors.namaayah ? "border-red-500" : ""
            }`}
            value={formData.namaayah}
            onChange={(e) => handleInputChange("namaayah", e.target.value)}
          />
          {errors.namaayah && (
            <p className="text-red-500 text-sm mt-1">{errors.namaayah}</p>
          )}
        </div>

        {/*---------------------------------------->>>>> NIK AYAH <<<<<----------------------------------------*/}
        <div className="mb-4 mx-4">
          <label className="block mb-1 font-medium">NIK Ayah</label>
          <input
            type="text"
            className={`w-full p-2 border border-gray-400 rounded ${
              errors.nikayah ? "border-red-500" : ""
            }`}
            value={formData.nikayah}
            onChange={(e) => handleInputChange("nikayah", e.target.value)}
          />
          {errors.nikayah && (
            <p className="text-red-500 text-sm mt-1">{errors.nikayah}</p>
          )}
        </div>

        {/*---------------------------------------->>>>> PENDIDIKAN AYAH <<<<<----------------------------------------*/}
        <div className="mb-4 mx-4">
          <label className="block mb-1 font-medium">Pendidikan Ayah</label>
          <input
            type="text"
            className={`w-full p-2 border border-gray-400 rounded ${
              errors.pendidikanayah ? "border-red-500" : ""
            }`}
            value={formData.pendidikanayah}
            onChange={(e) =>
              handleInputChange("pendidikanayah", e.target.value)
            }
          />
          {errors.pendidikanayah && (
            <p className="text-red-500 text-sm mt-1">{errors.pendidikanayah}</p>
          )}
        </div>

        {/*---------------------------------------->>>>> PEKERJAAN AYAH <<<<<----------------------------------------*/}
        <div className="mb-4 mx-4">
          <label className="block mb-1 font-medium">Pekerjaan Ayah</label>
          <input
            type="text"
            className={`w-full p-2 border border-gray-400 rounded ${
              errors.pekerjaanayah ? "border-red-500" : ""
            }`}
            value={formData.pekerjaanayah}
            onChange={(e) => handleInputChange("pekerjaanayah", e.target.value)}
          />
          {errors.pekerjaanayah && (
            <p className="text-red-500 text-sm mt-1">{errors.pekerjaanayah}</p>
          )}
        </div>

        {/*---------------------------------------->>>>> TELEPON AYAH <<<<<----------------------------------------*/}
        <div className="mb-4 mx-4">
          <label className="block mb-1 font-medium">Telepon Ayah</label>
          <input
            type="text"
            className={`w-full p-2 border border-gray-400 rounded ${
              errors.phoneayah ? "border-red-500" : ""
            }`}
            value={formData.phoneayah}
            onChange={(e) => handleInputChange("phoneayah", e.target.value)}
          />
          {errors.phoneayah && (
            <p className="text-red-500 text-sm mt-1">{errors.phoneayah}</p>
          )}
        </div>

        <br />

        {/*---------------------------------------->>>>> NAMA IBU <<<<<----------------------------------------*/}
        <div className="mb-4 mx-4">
          <label className="block mb-1 font-medium">Nama Ibu</label>
          <input
            type="text"
            className={`w-full p-2 border border-gray-400 rounded ${
              errors.namaibu ? "border-red-500" : ""
            }`}
            value={formData.namaibu}
            onChange={(e) => handleInputChange("namaibu", e.target.value)}
          />
          {errors.namaibu && (
            <p className="text-red-500 text-sm mt-1">{errors.namaibu}</p>
          )}
        </div>

        {/*---------------------------------------->>>>> NIK IBU <<<<<----------------------------------------*/}
        <div className="mb-4 mx-4">
          <label className="block mb-1 font-medium">NIK Ibu</label>
          <input
            type="text"
            className={`w-full p-2 border border-gray-400 rounded ${
              errors.nikibu ? "border-red-500" : ""
            }`}
            value={formData.nikayah}
            onChange={(e) => handleInputChange("nikayah", e.target.value)}
          />
          {errors.nikayah && (
            <p className="text-red-500 text-sm mt-1">{errors.nikayah}</p>
          )}
        </div>

        {/*---------------------------------------->>>>> PENDIDIKAN IBU <<<<<----------------------------------------*/}
        <div className="mb-4 mx-4">
          <label className="block mb-1 font-medium">Pendidikan Ibu</label>
          <input
            type="text"
            className={`w-full p-2 border border-gray-400 rounded ${
              errors.pendidikanibu ? "border-red-500" : ""
            }`}
            value={formData.pendidikanibu}
            onChange={(e) => handleInputChange("pendidikanibu", e.target.value)}
          />
          {errors.pendidikanibu && (
            <p className="text-red-500 text-sm mt-1">{errors.pendidikanibu}</p>
          )}
        </div>

        {/*---------------------------------------->>>>> PEKERJAAN IBU <<<<<----------------------------------------*/}
        <div className="mb-4 mx-4">
          <label className="block mb-1 font-medium">Pekerjaan Ibu</label>
          <input
            type="text"
            className={`w-full p-2 border border-gray-400 rounded ${
              errors.pekerjaanibu ? "border-red-500" : ""
            }`}
            value={formData.pekerjaanibu}
            onChange={(e) => handleInputChange("pekerjaanibu", e.target.value)}
          />
          {errors.pekerjaanibu && (
            <p className="text-red-500 text-sm mt-1">{errors.pekerjaanibu}</p>
          )}
        </div>

        {/*---------------------------------------->>>>> TELEPON IBU <<<<<----------------------------------------*/}
        <div className="mb-4 mx-4">
          <label className="block mb-1 font-medium">Telepom Ibu</label>
          <input
            type="text"
            className={`w-full p-2 border border-gray-400 rounded ${
              errors.phoneibu ? "border-red-500" : ""
            }`}
            value={formData.phoneibu}
            onChange={(e) => handleInputChange("phoneibu", e.target.value)}
          />
          {errors.phoneibu && (
            <p className="text-red-500 text-sm mt-1">{errors.phoneibu}</p>
          )}
        </div>

        <br />

        {/* ---------------------------------------->>>>> Format File <<<<<---------------------------------------- */}
        <div className="col-span-2 sm:col-span-1 mb-4 mx-4">
          <label className="block mb-1 font-medium">Bukti Transfer</label>
          <input
            type="file"
            className={`w-full p-1.5 border border-gray-400 rounded flex ${
              errors.upload ? "border-red-500" : ""
            }`}
            onChange={(e) => handleInputChange("upload", e.target.files[0])}
          />
          {errors.upload && (
            <p className="text-red-500 text-sm mt-1">{errors.upload}</p>
          )}
        </div>

        <div className="flex justify-between col-span-2">
          <div className="col-span-2">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 ml-4 rounded hover:text-white hover:bg-blue-600 hover:-translate-y-1 hover:scale-110"
            >
              Submit
            </button>
          </div>

          <div className="col-span-">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 ml-4 rounded hover:text-white hover:bg-blue-600 hover:-translate-y-1 hover:scale-110"
            >
              <Link to={"/detailpendaftar"}>Detail Pendaftar</Link>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default OnlinePbi;
