import NavbarPortal from "../Components/Layouts/NavbarPortal";
import Footer from "../Components/Layouts/Footer";
import STAMIDanPBITurutBerpartipasiDalamPencegahanPenyebaranCovid19 from "../Components/Layouts/BERITA2/STAMIDanPBITurutBerpartipasiDalamPencegahanPenyebaranCovid19";
import STAMIHadiriPelaksanaanMonitoringDanEvaluasiPemetaanMutuPelaksanaaanTridharmaPerguruanTinggi from "../Components/Layouts/BERITA4/STAMIHadiriPelaksanaanMonitoringDanEvaluasiPemetaanMutuPelaksanaaanTridharmaPerguruanTinggi";

const STAMIHadiriPelaksanaanMonitoringDanEvaluasiPemetaanMutuPelaksanaaanTridharmaPerguruanTinggiPage =
  () => {
    return (
      <div>
        <NavbarPortal />
        <STAMIHadiriPelaksanaanMonitoringDanEvaluasiPemetaanMutuPelaksanaaanTridharmaPerguruanTinggi />
        <Footer />
      </div>
    );
  };

export default STAMIHadiriPelaksanaanMonitoringDanEvaluasiPemetaanMutuPelaksanaaanTridharmaPerguruanTinggiPage;
