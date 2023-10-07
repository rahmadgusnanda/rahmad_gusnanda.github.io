import NavbarPortal from "../Components/Layouts/NavbarPortal";
import Footer from "../Components/Layouts/Footer";
import STAMIDanPBIHadiriAcaraInklusiSadarPajak from "../Components/Layouts/BERITA4/STAMIDanPBIHadiriAcaraInklusiSadarPajak";
import STAMIDanPBIGelarSeminarIlmiah from "../Components/Layouts/BERITA6/STAMIDanPBIGelarSeminarIlmiah";

const STAMIDanPBIGelarSeminarIlmiahPage = () => {
  return (
    <div>
      <NavbarPortal />
      <STAMIDanPBIGelarSeminarIlmiah />
      <Footer />
    </div>
  );
};

export default STAMIDanPBIGelarSeminarIlmiahPage;
