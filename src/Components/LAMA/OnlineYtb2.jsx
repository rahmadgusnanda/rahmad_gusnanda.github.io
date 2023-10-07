// import React, { useState } from "react";
// import InputForm from "../Elements/Input";

// const ValidationForm = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState({});

//   const validateForm = () => {
//     const newErrors = {};

//     if (name.trim() === "") {
//       newErrors.name = "Nama harus diisi.";
//     }

//     if (!email.includes("@")) {
//       newErrors.email = "Email harus valid.";
//     }

//     if (password.length < 6) {
//       newErrors.password = "Password harus memiliki setidaknya 6 karakter.";
//     }

//     setErrors(newErrors);

//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (validateForm()) {
//       // Lakukan tindakan setelah validasi berhasil
//       console.log("Form berhasil divalidasi dan dikirim.");
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-4 p-4 border">
//       <h2 className="text-xl font-semibold mb-4">Form Validasi</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="block mb-1 font-medium">Nama</label>
//           <InputForm label= />
//           <input
//             type="text"
//             className={`w-full p-2 border rounded ${
//               errors.name ? "border-red-500" : ""
//             }`}
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//           {errors.name && (
//             <p className="text-red-500 text-sm mt-1">{errors.name}</p>
//           )}
//         </div>
//         <div className="mb-4">
//           <label className="block mb-1 font-medium">Email</label>
//           <input
//             type="email"
//             className={`w-full p-2 border rounded ${
//               errors.email ? "border-red-500" : ""
//             }`}
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           {errors.email && (
//             <p className="text-red-500 text-sm mt-1">{errors.email}</p>
//           )}
//         </div>
//         <div className="mb-4">
//           <label className="block mb-1 font-medium">Password</label>
//           <input
//             type="password"
//             className={`w-full p-2 border rounded ${
//               errors.password ? "border-red-500" : ""
//             }`}
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           {errors.password && (
//             <p className="text-red-500 text-sm mt-1">{errors.password}</p>
//           )}
//         </div>
//         <button
//           type="submit"
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ValidationForm;

//----------------------------------------------------------------------------------------------------------------------------------

// import React, { useState } from "react";

// const ValidationForm = () => {
//   const [formData, setFormData] = useState({
//     input1: "",
//     input2: "",
//     // ... tambahkan input hingga input15
//   });

//   const [errors, setErrors] = useState({});

//   const validateForm = () => {
//     const newErrors = {};

//     // Validasi input1
//     if (formData.input1.trim() === "") {
//       newErrors.input1 = "Input 1 harus diisi.";
//     }

//     // Validasi input2
//     if (formData.input2.trim() === "") {
//       newErrors.input2 = "Input 2 harus diisi.";
//     }

//     // ... lakukan validasi untuk input hingga input15

//     setErrors(newErrors);

//     return Object.keys(newErrors).length === 0;
//   };

//   const handleInputChange = (inputName, value) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       [inputName]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (validateForm()) {
//       // Lakukan tindakan setelah validasi berhasil
//       console.log("Form berhasil divalidasi dan dikirim.");
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-4 p-4 border">
//       <h2 className="text-xl font-semibold mb-4">Form Validasi</h2>
//       <form onSubmit={handleSubmit}>
//         {/* Input 1 */}
//         <div className="mb-4">
//           <label className="block mb-1 font-medium">Input 1</label>
//           <input
//             type="text"
//             className={`w-full p-2 border rounded ${
//               errors.input1 ? "border-red-500" : ""
//             }`}
//             value={formData.input1}
//             onChange={(e) => handleInputChange("input1", e.target.value)}
//           />
//           {errors.input1 && (
//             <p className="text-red-500 text-sm mt-1">{errors.input1}</p>
//           )}
//         </div>

//         {/* Input 2 */}
//         <div className="mb-4">
//           <label className="block mb-1 font-medium">Input 2</label>
//           <input
//             type="text"
//             className={`w-full p-2 border rounded ${
//               errors.input2 ? "border-red-500" : ""
//             }`}
//             value={formData.input2}
//             onChange={(e) => handleInputChange("input2", e.target.value)}
//           />
//           {errors.input2 && (
//             <p className="text-red-500 text-sm mt-1">{errors.input2}</p>
//           )}
//         </div>

//         {/* ... render input dan validasi untuk input hingga input15 */}

//         <button
//           type="submit"
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ValidationForm;

// ---------------------------------------------------------------------------------------------------------------------------------

// import React, { useState } from 'react';

// const BirthdayForm = () => {
//   const [formData, setFormData] = useState({
//     birthdate: '',
//   });

//   const [errors, setErrors] = useState({});

//   const validateForm = () => {
//     const newErrors = {};

//     const currentDate = new Date();
//     const selectedDate = new Date(formData.birthdate);

//     // Validasi tanggal lahir tidak boleh kosong
//     if (formData.birthdate.trim() === '') {
//       newErrors.birthdate = 'Tanggal lahir harus diisi.';
//     } else if (selectedDate >= currentDate) {
//       newErrors.birthdate = 'Tanggal lahir tidak boleh melebihi tanggal saat ini.';
//     } else {
//       const minAge = 18; // Umur minimum yang diperlukan
//       const yearDiff = currentDate.getFullYear() - selectedDate.getFullYear();

//       if (yearDiff < minAge) {
//         newErrors.birthdate = `Umur harus setidaknya ${minAge} tahun.`;
//       }
//     }

//     setErrors(newErrors);

//     return Object.keys(newErrors).length === 0;
//   };

//   const handleInputChange = (inputName, value) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       [inputName]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (validateForm()) {
//       console.log('Data berhasil divalidasi dan dikirim:', formData);
//       // Lakukan tindakan selanjutnya, misalnya pengiriman data ke server
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-4 p-4 border">
//       <h2 className="text-xl font-semibold mb-4">Form Tanggal Lahir</h2>
//       <form onSubmit={handleSubmit}>
//         {/* Tanggal Lahir */}
//         <div className="mb-4">
//           <label className="block mb-1 font-medium">Tanggal Lahir</label>
//           <input
//             type="date"
//             className={`w-full p-2 border rounded ${errors.birthdate ? 'border-red-500' : ''}`}
//             value={formData.birthdate}
//             onChange={(e) => handleInputChange('birthdate', e.target.value)}
//           />
//           {errors.birthdate && <p className="text-red-500 text-sm mt-1">{errors.birthdate}</p>}
//         </div>

//         <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default BirthdayForm;
//-----------------------------------------------------------------------------------------------------------------------------------

import React, { useState } from "react";

const OnlineYtb2 = () => {
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

export default OnlineYtb2;
