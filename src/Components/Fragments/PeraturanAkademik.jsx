const PeraturanAkademik = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center items-center">
        <div className="border border-solid border-black h-max my-20 mx-20 mt-36 p-12">
          <div className="mb-12 text-center">
            <h1 className="text-5xl font-semibold">Peraturan Akademik</h1>
            <hr className="border-blue-500 border-b-4 w-1/2 mx-auto mt-3" />
          </div>

          <div className="text-justify mt-5">
            <ol className="pl-4" style={{ listStyleType: "decimal" }}>
              <li>
                Mahasiswa PBIMS dilarang untuk melakukan kegiatan perjudian,
                minum, merokok, narkoba dan berkelahi di lingkungan kampus.
              </li>
              <li>
                Mahasiswa PBIMS dilarang membawa senjata tajam, senjata api dan
                benda lain yang dapat membahayakan kehidupan orang lain di
                lingkungan kampus.
              </li>
              <li>
                Mahasiswa PBIMS diharapkan untuk mengenakan pakaian yang layak
                dan selalu membawa kartu identitas.
              </li>

              <li>
                Kehadiran minimum 80% dari total kehadiran untuk setiap semester
                pada setiap mata kuliah. Mahasiswa harus hadir tidak kurang dari
                80 persen dari jumlah pertemuan yang ditentukan, kecuali izin
                diberikan secara tertulis oleh otoritas yang bersangkutan. Pada
                akhir setiap semester jika siswa gagal untuk mencapai minimal
                80% kehadiran, maka mahasiswa tidak akan diizinkan untuk
                mengikuti ujian dari mata kuliah yang absennya di bawah 80%.
              </li>

              <li>
                Setiap mahasiswa yang terlambat datang atau lebih awal pulang
                akan dinyatakan sebagai absen.
              </li>

              <li>
                Mahasiswa PBIMS harus bersikap sopan, hormat kepada otoritas
                PBIMS, dosen, staf dan karyawan, sesama mahasiswa dan setiap
                tamu resmi yang mengunjungi kampus.
              </li>

              <li>
                Mahasiswa PBIMS diharapkan untuk tidak membuang sampah dan
                membantu dalam menjaga kebersihan kampus. Mahasiswa PBIMS
                diharapkan tidak merusak, menghilangan atau mencuri properti
                sekolah atau barang-barang milik mahasiswa lain. Mahasiswa PBIMS
                tidak diperbolehkan untuk menggunakan Hand Phone selama jam
                pelajaran dan ujian/tes. Dalam kasus, bagi mereka yang bawa hand
                phone, mereka harus beralih mereka pergi selama waktu instruksi.
                Apabila ada panggilan mendadak maka mahasiswa harus minta ijin
                kepada dosen yang mengajar.
              </li>

              <li>
                Mahasiswa PBIMS dilarang untuk mengganggu proses belajar
                mengajar dan kegiatan lainnya dilingkungan Kampus. Mahasiswa
                PBIMS diharapkan menjaga disiplin di kampus dan menjaga hubungan
                harmonis antara orang-orang yang ada di kampus. Tindakan yang
                tepat akan diambil terhadap mahasiswa jika tidak mematuhi aturan
                dan peraturan. Manajemen akan mempertimbangkan, jika mahasiwa
                dapat masuk atau akan dikeluarkan kapan saja selama melanggar
                disiplin secara serius.
              </li>

              <li>
                Mahasiswa / Orang tua harus membayar uang kuliah dan biaya
                lainnya pada atau sebelum tanggal jatuh tempo secara penuh.
                Dalam hal pelanggaran ketentuan atau aturan dan prosedur,
                mahasiswa akan terkena sanksi administratif, denda atau sanksi
                akademik lainnya atau jika terjadi pelanggaran serius, mahasiswa
                akan dituntut atas hukum yang berlaku di Republik Indonesia.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeraturanAkademik;
