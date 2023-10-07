import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PbiPage from "./pages/pbi";
import UmtPage from "./pages/umt";
import LoginForm from "./Components/Fragments/LoginForm";
import KataSambutanKetuaPage from "./pages/kata-sambutan-ketua";
import SejarahPage from "./pages/sejarah";
import DetailPendaftarPage from "./pages/detailpendaftar";
import VisiMisiTujuanPage from "./pages/vmt";
import SasaranStrategiPencapaianPage from "./pages/sasaranstrategipencapaian";
import ListPendaftarPage from "./pages/listpendaftar";
import DaftarBeasiswaPage from "./pages/daftarbeasiswa";
import PeraturanAkademikPage from "./pages/peraturanakademik";
import WebKampus from "./pages/home";
import PendaftaranOnlinePage from "./pages/pendaftaranonline";
import FasilitasPage from "./pages/fasilitas";
import KataSambutanKaprodiAkuntansiPage from "./pages/kata-sambutan-kaprodi-akuntansi";
import KataSambutanKaprodiManajemenPage from "./pages/katasambutankaprodimanajemen";
import DosenPengajarPage from "./pages/dosen-pengajar";
import KurikulumAkuntansiPage from "./pages/kurikulum-akuntansi";
import KurikulumManajemenPage from "./pages/kurikulum-manajemen";
import TabloidPage from "./pages/arsip-tabloid";
import PengumumanPage from "./pages/arsip-pengumuman";
import VlogCompetitionPage from "./pages/vlog-competition";
import TiktokCompetitionPage from "./pages/tiktok-competition";
import TurnamenFutsalPage from "./pages/turnamen-futsal";
import KalenderAkademikPage from "./pages/kalender-akademik";
import Berita2Page from "./pages/arsip-berita2";
import Berita3Page from "./pages/arsip-berita3";
import Berita4Page from "./pages/arsip-berita4";
import PengabdianMasyarakatBerbasisPenelitianPage from "./pages/pengabdian-masyarakat-berbasis-penelitian";
import AgendaPage from "./pages/arsip-agenda";
import BeritaPage from "./pages/arsip-berita";
import PelaksanaanSertifikasiKompetensiKerjaBNSPBidangTeknisiAkuntansiYuniorPage from "./pages/pelaksanaan-sertifikasi-kompetensi-kerja-pskk-bnsp-bidang-teknisi-akuntansi-yunior.jsx";
import STAMIDanPBIJalinMoUDenganLembagaMultiKompetensiUtamaPage from "./pages/stami-dan-pbi-jalin-mou-dengan-lembaga-multi-kompetensi-utama";
import PertemuanPersahabatanSTAMIPBIDenganTimSTIELMIIMedanPage from "./pages/pertemuan-persahabatan-stami-pbi-dengan-tim-stie-lmii-medan";
import STAMIMenerimaPenghargaanSMARTCAMPUSAWARDS2020DalamKategoriBestIndonesianSmartCampusInCreatingQualityGraduatesPage from "./pages/stami-menerima-penghargaan-smart-campus-awards-2020-dalam-kategori-best-indonesian-smart-campus-in-creating-quality-graduates";
import STAMIPBIDanAlumniKalamKudus83MelakukanAksiPeduliPencegahanCovid19Page from "./pages/stami-pbi-dan-alumni-kalam-kudus-83-melakukan-aksi-peduli-pencegahan-covid-19";
import Berita5Page from "./pages/arsip-berita5";
import Berita6Page from "./pages/arsip-berita6";
import Berita7Page from "./pages/arsip-berita7";
import STAMIDanPBITurutBerpartipasiDalamPencegahanPenyebaranCovid19Page from "./pages/stami-dan-pbi-turut-berpartipasi-dalam-pencegahan-penyebaran-covid-19";
import FutsalPBIDanSTAMICUP2020SuksesDiselenggarakanPage from "./pages/futsal-pbi-dan-stami-cup-2020-sukses-diselenggarakan";
import MahasiswaPBIDanSTAMIHadiriPelatihanDigitalMarketingCaraCerdasDanStrategiMenggunakanSmarthphoneDalamBerbisnisPage from "./pages/mahasiswa-pbi-dan-stami-hadiri-pelatihan-digital-marketing-cara-cerdas-dan-strategi-menggunakan-smarthphone-dalam-berbisnis";
import PembukaanTurnamenFutsalPBIDanSTAMICUP2020AntarSMASMKPage from "./pages/pembukaan-turnamen-futsal-pbi-dan-stami-cup-2020-antar-sma-smk";
import PBIDanSTAMIHadiriSeminarPeluangDanTantanganEkonomiSiantarSimalungunTahun2020Page from "./pages/pbi-dan-stami-hadiri-seminar-peluang-dan-tantangan-ekonomi-siantar-simalungun-tahun-2020";
import MahasiswaSTAMIIkutSeleksiCalonRelawanPajakPematangsiantarPage from "./pages/mahasiswa-stami-ikut-seleksi-calon-relawan-pajak-pematangsiantar";
import PBIDanSTAMIHadiriSeminar21stCenturyPedagogicalTeachingSkillsDiPoliteknikWilmarBisnisIndonesiaPage from "./pages/pbi-dan-stami-hadiri-seminar-21st-century-pedagogical-teaching-skills-di-politeknik-wilmar-bisnis-indonesia";
import PBIDanSTAMIGelarSeminarSPEAKINGCONFIDENCEWITHPUBLICSPEAKINGPage from "./pages/pbi-dan-stami-gelar-seminar-speaking-confidence-with-public-speaking";
import PerayaanNatalBersamaPage from "./pages/perayaan-natal-bersama";
import STAMIHadiriPelaksanaanMonitoringDanEvaluasiPemetaanMutuPelaksanaaanTridharmaPerguruanTinggiPage from "./pages/stami-hadiri-pelaksanaan-monitoring-dan-evaluasi-pemetaan-mutu-pelaksanaaan-tridharma-perguruan-tinggi";
import STAMIDanPBIHadiriAcaraInklusiSadarPajakPage from "./pages/stami-dan-pbi-hadiri-acara-inklusi-sadar-pajak";
import MahasiswaSTAMIDanPBIMelakukanStudiTourKeGundalingFarmPage from "./pages/mahasiswa-stami-dan-pbi-melakukan-studi-tour-ke-gundaling-farm";
import PBIDanSTAMIGelarAcaraTalkshowGetReadyToBeAYoungEntrepreneurPage from "./pages/pbi-dan-stami-gelar-acara-talkshow-get-ready-to-be-a-young-entrepreneur";
import UjiKompetensiBNSPPage from "./pages/uji-kompetensi-bnsp";
import MahasiswaSTAMIRaihJuara2PuteriPariwisataPematangsiantarPage from "./pages/mahasiswa-stami-raih-juara-2-puteri-pariwisata-pematangsiantar";
import STAMIPBIDanUSIBerkolaborasiDalamMeningkatkanMutuPendidikanPematangsiantarDanSimalungunPage from "./pages/stami-pbi-dan-usi-berkolaborasi-dalam-meningkatkan-mutu-pendidikan-pematangsiantar-dan-simalungun";
import PengenalanKehidupanKampusKepadaMahasiswaBaruPage from "./pages/pengenalan-kehidupan-kampus-kepada-mahasiswa-baru";
import BadanEksekutifMahasiswaHadiriFestivalBeasiswaPage from "./pages/badan-eksekutif-mahasiswa-hadiri-festival-beasiswa";
import LDP2PRODanLSPPARASBNSPBersamaSTAMIDanPBISUKSESMelaksanakanSertifikasiKompetensiPage from "./pages/ldp2pro-dan-lsp-paras-bnsp-bersama-stami-dan-pbi-sukses-melaksanakan-sertifikasi-kompetensi";
import BerbukaPuasaBersamaPage from "./pages/berbuka-puasa-bersama";
import BerbagiBerkahRamadhanDenganSebarTakjilGratisPage from "./pages/berbagi-berkah-ramadhan-dengan-sebar-takjil-gratis";
import PBIDanSTAMIGelarSeminarTentangMenjadiGenerasiMilenialYangCerdasDanKritisPage from "./pages/pbi-dan-stami-gelar-seminar-tentang-menjadi-generasi-milenial-yang-cerdas-dan-kritis";
import BerbukaPuasaBersamaAnakPantiAsuhanPage from "./pages/berbuka-puasa-bersama-anak-panti-asuhan";
import STAMIDanPBIGelarSeminarIlmiahPage from "./pages/stami-dan-pbi-gelar-seminar-ilmiah";
import PBIDanLP2PROJalinMoUDalamPenyelenggaraanTempatUjiKompetensiPage from "./pages/pbi-dan-lp2pro-jalin-mou-dalam-penyelenggaraan-tempat-uji-kompetensi";
import PBIDanSTAMISelenggarakanFUTSALPBICUP2019Page from "./pages/pbi-dan-stami-selenggarakan-futsal-pbi-cup-2019";
import MahasiswaPBITurutHadirDalamMillennialRoadSafetyFestivalPematangsiantarPage from "./pages/mahasiswa-pbi-turut-hadir-dalam-millennial-road-safety-festival-pematangsiantar";
import PBISelenggarakanPelatihanHIDROPONIKPage from "./pages/pbi-selenggarakan-pelatihan-hidroponik";
import PBITurutHadirDalamHUTPRAMUKAKeIIGUGUSDEPAN325326Page from "./pages/pbi-turut-hadir-dalam-hut-pramuka-ke-ii-gugus-depan-325-326";

const handleRefresh = () => {
  window.location.reload();
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <LoginForm />
      </div>
    ),
  },
  {
    path: "/home",
    element: (
      <div>
        <WebKampus />
      </div>
    ),
  },

  {
    path: "/pbi",
    element: (
      <div>
        <PbiPage />
      </div>
    ),
  },
  {
    path: "/umt",
    element: (
      <div>
        <UmtPage />
      </div>
    ),
  },
  {
    path: "/lisrpendaftar",
    element: (
      <div>
        <ListPendaftarPage />
      </div>
    ),
  },
  {
    path: "/detailpendaftar",
    element: (
      <div>
        <DetailPendaftarPage />
      </div>
    ),
  },
  {
    path: "/kata-sambutan-ketua",
    element: (
      <div>
        <KataSambutanKetuaPage />
      </div>
    ),
  },
  {
    path: "/sejarah",
    element: (
      <div>
        <SejarahPage />
      </div>
    ),
  },
  {
    path: "/vmt",
    element: (
      <div>
        <VisiMisiTujuanPage />
      </div>
    ),
  },
  {
    path: "/sasaranstrategipencapaian",
    element: (
      <div>
        <SasaranStrategiPencapaianPage />
      </div>
    ),
  },

  {
    path: "/pendaftaranonline",
    element: (
      <div>
        <PendaftaranOnlinePage />
      </div>
    ),
  },
  {
    path: "/daftarbeasiswa",
    element: (
      <div>
        <DaftarBeasiswaPage />
      </div>
    ),
  },
  {
    path: "/kalender-akademik",
    element: (
      <div>
        <KalenderAkademikPage />
      </div>
    ),
  },
  {
    path: "/peraturanakademik",
    element: (
      <div>
        <PeraturanAkademikPage />
      </div>
    ),
  },
  {
    path: "/fasilitas",
    element: (
      <div>
        <FasilitasPage />
      </div>
    ),
  },
  {
    path: "/kata-sambutan-kaprodi-akuntansi",
    element: (
      <div>
        <KataSambutanKaprodiAkuntansiPage />
      </div>
    ),
  },
  {
    path: "/katasambutankaprodimanajemen",
    element: (
      <div>
        <KataSambutanKaprodiManajemenPage />
      </div>
    ),
  },

  {
    path: "/prodi-akuntansi/dosen-pengajar",
    element: (
      <div>
        <DosenPengajarPage />
      </div>
    ),
  },

  {
    path: "/prodi-manajemen/dosen-pengajar",
    element: (
      <div>
        <DosenPengajarPage />
      </div>
    ),
  },

  {
    path: "/kurikulum-akuntansi",
    element: (
      <div>
        <KurikulumAkuntansiPage />
      </div>
    ),
  },
  {
    path: "/kurikulum-manajemen",
    element: (
      <div>
        <KurikulumManajemenPage />
      </div>
    ),
  },

  // {/* --------------------------------->>>>>>>>>> BERITA PAGE <<<<<<<<<<--------------------------------- */}
  {
    path: "/arsip-berita",
    element: (
      <div>
        <BeritaPage />
      </div>
    ),
  },
  {
    path: "/arsip-berita/2",
    element: (
      <div>
        <Berita2Page />
      </div>
    ),
  },
  {
    path: "/arsip-berita/3",
    element: (
      <div>
        <Berita3Page />
      </div>
    ),
  },
  {
    path: "/arsip-berita/4",
    element: (
      <div>
        <Berita4Page />
      </div>
    ),
  },
  {
    path: "/arsip-berita/5",
    element: (
      <div>
        <Berita5Page />
      </div>
    ),
  },
  {
    path: "/arsip-berita/6",
    element: (
      <div>
        <Berita6Page />
      </div>
    ),
  },
  {
    path: "/arsip-berita/7",
    element: (
      <div>
        <Berita7Page />
      </div>
    ),
  },

  // {/* --------------------------------->>>>>>>>>> BERITA 1 <<<<<<<<<<--------------------------------- */}
  {
    path: "/arsip-berita/pengabdian-masyarakat-berbasis-penelitian",
    element: (
      <div>
        <PengabdianMasyarakatBerbasisPenelitianPage />
      </div>
    ),
  },
  {
    path: "/arsip-berita/pelaksanaan-sertifikasi-kompetensi-kerja-pskk-bnsp-bidang-teknisi-akuntansi-yunior",
    element: (
      <div>
        <PelaksanaanSertifikasiKompetensiKerjaBNSPBidangTeknisiAkuntansiYuniorPage />
      </div>
    ),
  },
  {
    path: "/arsip-berita/stami-dan-pbi-jalin-mou-dengan-lembaga-multi-kompetensi-utama",
    element: (
      <div>
        <STAMIDanPBIJalinMoUDenganLembagaMultiKompetensiUtamaPage />
      </div>
    ),
  },
  {
    path: "/arsip-berita/pertemuan-persahabatan-stami-pbi-dengan-tim-stie-lmii-medan",
    element: (
      <div>
        <PertemuanPersahabatanSTAMIPBIDenganTimSTIELMIIMedanPage />
      </div>
    ),
  },

  {
    path: "/arsip-berita/stami-menerima-penghargaan-smart-campus-awards-2020-dalam-kategori-best-indonesian-smart-campus-in-creating-quality-graduates",
    element: (
      <div>
        <STAMIMenerimaPenghargaanSMARTCAMPUSAWARDS2020DalamKategoriBestIndonesianSmartCampusInCreatingQualityGraduatesPage />
      </div>
    ),
  },

  // {/* --------------------------------->>>>>>>>>> BERITA 2 <<<<<<<<<<--------------------------------- */}
  {
    path: "/arsip-berita/stami-pbi-dan-alumni-kalam-kudus-83-melakukan-aksi-peduli-pencegahan-covid-19",
    element: (
      <div>
        <STAMIPBIDanAlumniKalamKudus83MelakukanAksiPeduliPencegahanCovid19Page />
      </div>
    ),
  },
  {
    path: "/arsip-berita/stami-dan-pbi-turut-berpartipasi-dalam-pencegahan-penyebaran-covid-19",
    element: (
      <div>
        <STAMIDanPBITurutBerpartipasiDalamPencegahanPenyebaranCovid19Page />
      </div>
    ),
  },
  {
    path: "/arsip-berita/futsal-pbi-dan-stami-cup-2020-sukses-diselenggarakan",
    element: (
      <div>
        <FutsalPBIDanSTAMICUP2020SuksesDiselenggarakanPage />
      </div>
    ),
  },
  {
    path: "/arsip-berita/mahasiswa-pbi-dan-stami-hadiri-pelatihan-digital-marketing-cara-cerdas-dan-strategi-menggunakan-smarthphone-dalam-berbisnis",
    element: (
      <div>
        <MahasiswaPBIDanSTAMIHadiriPelatihanDigitalMarketingCaraCerdasDanStrategiMenggunakanSmarthphoneDalamBerbisnisPage />
      </div>
    ),
  },
  {
    path: "/arsip-berita/pembukaan-turnamen-futsal-pbi-dan-stami-cup-2020-antar-sma-smk",
    element: (
      <div>
        <PembukaanTurnamenFutsalPBIDanSTAMICUP2020AntarSMASMKPage />
      </div>
    ),
  },

  // {/* --------------------------------->>>>>>>>>> BERITA 3 <<<<<<<<<<--------------------------------- */}
  {
    path: "/arsip-berita/pbi-dan-stami-hadiri-seminar-peluang-dan-tantangan-ekonomi-siantar-simalungun-tahun-2020",
    element: (
      <div>
        <PBIDanSTAMIHadiriSeminarPeluangDanTantanganEkonomiSiantarSimalungunTahun2020Page />
      </div>
    ),
  },
  {
    path: "/arsip-berita/mahasiswa-stami-ikut-seleksi-calon-relawan-pajak-pematangsiantar",
    element: (
      <div>
        <MahasiswaSTAMIIkutSeleksiCalonRelawanPajakPematangsiantarPage />
      </div>
    ),
  },
  {
    path: "/arsip-berita/pbi-dan-stami-hadiri-seminar-21st-century-pedagogical-teaching-skills-di-politeknik-wilmar-bisnis-indonesia",
    element: (
      <div>
        <PBIDanSTAMIHadiriSeminar21stCenturyPedagogicalTeachingSkillsDiPoliteknikWilmarBisnisIndonesiaPage />
      </div>
    ),
  },
  {
    path: "/arsip-berita/pbi-dan-stami-gelar-seminar-speaking-confidence-with-public-speaking",
    element: (
      <div>
        <PBIDanSTAMIGelarSeminarSPEAKINGCONFIDENCEWITHPUBLICSPEAKINGPage />
      </div>
    ),
  },

  {
    path: "/arsip-berita/perayaan-natal-bersama",
    element: (
      <div>
        <PerayaanNatalBersamaPage />
      </div>
    ),
  },

  // {/* --------------------------------->>>>>>>>>> BERITA 4 <<<<<<<<<<--------------------------------- */}

  {
    path: "/arsip-berita/stami-hadiri-pelaksanaan-monitoring-dan-evaluasi-pemetaan-mutu-pelaksanaaan-tridharma-perguruan-tinggi",
    element: (
      <div>
        <STAMIHadiriPelaksanaanMonitoringDanEvaluasiPemetaanMutuPelaksanaaanTridharmaPerguruanTinggiPage />
      </div>
    ),
  },

  {
    path: "/arsip-berita/stami-dan-pbi-hadiri-acara-inklusi-sadar-pajak",
    element: (
      <div>
        <STAMIDanPBIHadiriAcaraInklusiSadarPajakPage />
      </div>
    ),
  },
  {
    path: "/arsip-berita/mahasiswa-stami-dan-pbi-melakukan-studi-tour-ke-gundaling-farm",
    element: (
      <div>
        <MahasiswaSTAMIDanPBIMelakukanStudiTourKeGundalingFarmPage />
      </div>
    ),
  },

  {
    path: "/arsip-berita/pbi-dan-stami-gelar-acara-talkshow-get-ready-to-be-a-young-entrepreneur",
    element: (
      <div>
        <PBIDanSTAMIGelarAcaraTalkshowGetReadyToBeAYoungEntrepreneurPage />
      </div>
    ),
  },

  {
    path: "/arsip-berita/uji-kompetensi-bnsp",
    element: (
      <div>
        <UjiKompetensiBNSPPage />
      </div>
    ),
  },

  // {/* --------------------------------->>>>>>>>>> BERITA 5 <<<<<<<<<<--------------------------------- */}

  {
    path: "/arsip-berita/mahasiswa-stami-raih-juara-2-puteri-pariwisata-pematangsiantar",
    element: (
      <div>
        <MahasiswaSTAMIRaihJuara2PuteriPariwisataPematangsiantarPage />
      </div>
    ),
  },

  {
    path: "/arsip-berita/stami-pbi-dan-usi-berkolaborasi-dalam-meningkatkan-mutu-pendidikan-pematangsiantar-dan-simalungun",
    element: (
      <div>
        <STAMIPBIDanUSIBerkolaborasiDalamMeningkatkanMutuPendidikanPematangsiantarDanSimalungunPage />
      </div>
    ),
  },

  {
    path: "/arsip-berita/pengenalan-kehidupan-kampus-kepada-mahasiswa-baru",
    element: (
      <div>
        <PengenalanKehidupanKampusKepadaMahasiswaBaruPage />
      </div>
    ),
  },

  {
    path: "/arsip-berita/badan-eksekutif-mahasiswa-hadiri-festival-beasiswa",
    element: (
      <div>
        <BadanEksekutifMahasiswaHadiriFestivalBeasiswaPage />
      </div>
    ),
  },

  {
    path: "/arsip-berita/ldp2pro-dan-lsp-paras-bnsp-bersama-stami-dan-pbi-sukses-melaksanakan-sertifikasi-kompetensi",
    element: (
      <div>
        <LDP2PRODanLSPPARASBNSPBersamaSTAMIDanPBISUKSESMelaksanakanSertifikasiKompetensiPage />
      </div>
    ),
  },

  // {/* --------------------------------->>>>>>>>>> BERITA 6 <<<<<<<<<<--------------------------------- */}

  {
    path: "/arsip-berita/berbuka-puasa-bersama",
    element: (
      <div>
        <BerbukaPuasaBersamaPage />
      </div>
    ),
  },

  {
    path: "/arsip-berita/berbagi-berkah-ramadhan-dengan-sebar-takjil-gratis",
    element: (
      <div>
        <BerbagiBerkahRamadhanDenganSebarTakjilGratisPage />
      </div>
    ),
  },

  {
    path: "/arsip-berita/pbi-dan-stami-gelar-seminar-tentang-menjadi-generasi-milenial-yang-cerdas-dan-kritis",
    element: (
      <div>
        <PBIDanSTAMIGelarSeminarTentangMenjadiGenerasiMilenialYangCerdasDanKritisPage />
      </div>
    ),
  },

  {
    path: "/arsip-berita/berbuka-puasa-bersama-anak-panti-asuhan",
    element: (
      <div>
        <BerbukaPuasaBersamaAnakPantiAsuhanPage />
      </div>
    ),
  },

  {
    path: "/arsip-berita/stami-dan-pbi-gelar-seminar-ilmiah",
    element: (
      <div>
        <STAMIDanPBIGelarSeminarIlmiahPage />
      </div>
    ),
  },

  // {/* --------------------------------->>>>>>>>>> BERITA 7 <<<<<<<<<<--------------------------------- */}

  {
    path: "/arsip-berita/pbi-dan-lp2pro-jalin-mou-dalam-penyelenggaraan-tempat-uji-kompetensi",
    element: (
      <div>
        <PBIDanLP2PROJalinMoUDalamPenyelenggaraanTempatUjiKompetensiPage />
      </div>
    ),
  },

  {
    path: "/arsip-berita/pbi-dan-stami-selenggarakan-futsal-pbi-cup-2019",
    element: (
      <div>
        <PBIDanSTAMISelenggarakanFUTSALPBICUP2019Page />
      </div>
    ),
  },

  {
    path: "/arsip-berita/mahasiswa-pbi-turut-hadir-dalam-millennial-road-safety-festival-pematangsiantar",
    element: (
      <div>
        <MahasiswaPBITurutHadirDalamMillennialRoadSafetyFestivalPematangsiantarPage />
      </div>
    ),
  },

  {
    path: "/arsip-berita/pbi-selenggarakan-pelatihan-hidroponik",
    element: (
      <div>
        <PBISelenggarakanPelatihanHIDROPONIKPage />
      </div>
    ),
  },

  {
    path: "/arsip-berita/pbi-turut-hadir-dalam-hut-pramuka-ke-ii-gugus-depan-325-326",
    element: (
      <div>
        <PBITurutHadirDalamHUTPRAMUKAKeIIGUGUSDEPAN325326Page />
      </div>
    ),
  },

  // {/* --------------------------------->>>>>>>>>> AGENDA <<<<<<<<<<--------------------------------- */}

  {
    path: "/arsip-agenda",
    element: (
      <div>
        <AgendaPage />
      </div>
    ),
  },
  {
    path: "/arsip-agenda/vlog-competition",
    element: (
      <div>
        <VlogCompetitionPage />
      </div>
    ),
  },
  {
    path: "/arsip-agenda/tiktok-competition",
    element: (
      <div>
        <TiktokCompetitionPage />
      </div>
    ),
  },

  {
    path: "/arsip-agenda/turnamen-futsal",
    element: (
      <div>
        <TurnamenFutsalPage />
      </div>
    ),
  },

  // {/* --------------------------------->>>>>>>>>> PENGUMUMAN PAGE <<<<<<<<<<--------------------------------- */}
  {
    path: "/arsip-pengumuman",
    element: (
      <div>
        <PengumumanPage />
      </div>
    ),
  },

  // {/* --------------------------------->>>>>>>>>> TABLOID <<<<<<<<<<--------------------------------- */}
  {
    path: "/arsip-tabloid",
    element: (
      <div>
        <TabloidPage />
      </div>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
