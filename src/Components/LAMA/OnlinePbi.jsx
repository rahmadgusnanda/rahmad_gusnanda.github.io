import React from "react";
import InputForm from "../Elements/Input";
import GenderSelection from "./gender";
import ComboBox from "./combo";
import Button from "../Elements/Button";
import ValidationForm from "./Validasi";

const Kiri = () => {
  return (
    <div>
      <form action="#">
        <InputForm
          label="Nama Lengkap"
          type="text"
          placeholder="(ISI NAMA SESUAI IJAZAH TERAKHIR : TIDAK BOLEH BEDA BAHKAN JIKA ADA TANDA BACA, SPASI DAN SINGKATAN)"
        />
        <InputForm label="Asal Sekolah (SMA/SMK/MA)" type="text" />
        <InputForm label="NISN" type="text" />
        <InputForm
          label="Tempat Lahir"
          type="text"
          placeholder="(ISI TEMPAT LAHIR SESUAI YANG ADA DI IJAZAH SMA: HANYA TEMPAT JANGAN BUAT TANGGAL)"
        />
        <InputForm label="No HP" type="text" />
        <InputForm label="Agama" type="text" />
        <InputForm label="KECAMATAN" type="text" />
        <InputForm label="Nama Ayah" type="text" />
        <InputForm label="NIK KTP Ayah Kandung" type="text" />
        <InputForm label="Pendidikan Ayah" type="text" />
        <InputForm label="Pekerjaan Ayah" type="text" />
        <InputForm label="Nomor Handphone Ayah" type="text" />
      </form>
    </div>
  );
};

const Kanan = () => {
  return (
    <div>
      <form action="#">
        <GenderSelection />
        <InputForm
          label="Tingg Badan / Berat Badan"
          type="text"
          placeholder="150cm / 40kg"
        />
        <ComboBox />
        <InputForm
          label="Alamat Email Gmail"
          type="text"
          placeholder="𝑪𝒐𝒏𝒕𝒐𝒉: ...@𝒈𝒎𝒂𝒊𝒍.𝒄𝒐𝒎 Wajib diisi untuk pengumuman kelulusan"
        />
        <InputForm
          label="Anak Ke dari Jumlah Bersaudara"
          type="text"
          placeholder="Contoh : 2 dari 5"
        />
        <InputForm label="Alamat Lengkap sesuai KTP" type="text" />
        <InputForm label="DESA/KELURAHAN" type="text" />
        <InputForm label="Nama Ibu" type="text" />
        <InputForm label="NIK KTP Ibu Kandung" type="text" />
        <InputForm label="Pendidikan Ibu" type="text" />
        <InputForm label="Pekerjaan Ibu" type="text" />
        <InputForm label="Nomor Handphone Ibu" type="text" />
      </form>
    </div>
  );
};

const OnlinePbi = () => {
  return (
    // <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-32 p-7 mb-10 shadow shadow-offset-x-5 shadow-offset-y-2 shadow-gray-500">
    //   <Kiri />
    //   <Kanan />
    //   <div>
    //     <Button bg="bg-blue-500" textsize="text-sm">
    //       Simpan
    //     </Button>
    //   </div>
    // </div>
    <div>
      <ValidationForm />
    </div>
  );
};

export default OnlinePbi;
