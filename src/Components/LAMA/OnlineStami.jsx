import { Link } from "react-router-dom";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const OnlineStami = () => {
  return (
    <div className="w-full flex justify-center min-h-screen items-center m-6">
      <div>
        <div>
          <h1 className="text-3xl mb-2 font-semibold ">
            Pendaftaran Online Program Diploma (D3)
          </h1>
          <p className="text-1xl mb-4">
            Tata cara pendaftaran online untuk program Diploma (D3) adalah
            sebagai berikut:
          </p>
          <ol className="pl-4 -mt-5" style={{ listStyleType: "decimal" }}>
            <li>Unduh formulir pendaftaran:</li>
            <li>
              Isi formulir tersebut, jika ada yang kurang jelas silakan hubungi
              telp/whatsapp 081370327543
            </li>
            <li>
              Transfer biaya pendaftaran sebesar Rp 250.000 ke rekening Bank
              Mandiri
              <p>No. Rek: 107-00-0763140-3</p>
              <p>Atas Nama: Yayasan Pendidikan Bina Usaha Indonesia</p>
              <p>Rincian Biaya registrasi ulang sebagai berikut:</p>
              <div className="my-3">
                <table>
                  <tbody>
                    <tr className="border-b border-slate-400">
                      <td>
                        Biaya MOM, almamater, dan perlengkapan{" "}
                        <span className="ml-3 float-right">:</span>
                      </td>
                      <td className="text-right">
                        <span className="mx-3">Rp</span>
                        1.000.000
                      </td>
                    </tr>

                    <tr className="border-b border-slate-400">
                      <td>
                        Biaya BEM (3 Tahun)
                        <span className="ml-3 float-right">:</span>
                      </td>
                      <td className="text-right">
                        <span className="mx-3 float-left">Rp</span>
                        225.000
                      </td>
                    </tr>

                    <tr className="border-b border-slate-400">
                      <td>
                        Biaya Laboratorium dan Perpustakaan
                        <span className="ml-3 float-right">:</span>
                      </td>
                      <td className="text-right">
                        <span className="mx-3 float-left">Rp</span>
                        450.000
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </li>

            <li>Foto atau scan bukti transfer pembayaran</li>

            <li>Isi form di bawah ini</li>

            <li>
              Jika berhasil maka akan muncul notifikasi "Selamat! Anda berhasil
              melakukan pendaftaran."
            </li>

            <li>
              Setelah berhasil mendaftar, hubungi telp/whatsapp 081370327543
            </li>
          </ol>
        </div>

        <form action="#">
          <InputForm label="Nama" type="text" />
          <InputForm label="No Telepon Yang Bisa Dihubungi" type="text" />
          <InputForm
            label="Upload File Formulir Yang Telah Diisi"
            type="file"
          />
          <InputForm
            label="Upload Foto Bukti Transfer Pembayaran Biaya Registrasi"
            type="file"
          />
        </form>
        <Button bg="bg-blue-500">Simpan</Button>
      </div>
    </div>
  );
};

export default OnlineStami;
