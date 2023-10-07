import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const OnlinePbi = () => {
  return (
    <div>
      <form action="#">
        <InputForm label="Nama" type="text" />
        <InputForm label="No Telepon Yang Bisa Dihubungi" type="text" />
        <InputForm label="Upload File Formulir Yang Telah Diisi" type="file" />
        <InputForm
          label="Upload Foto Bukti Transfer Pembayaran Biaya Registrasi"
          type="file"
        />
      </form>
      <Button bg="bg-blue-500">Simpan</Button>
    </div>
  );
};

export default OnlinePbi;
