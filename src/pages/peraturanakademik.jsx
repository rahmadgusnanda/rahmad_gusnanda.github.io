import Footer from "../Components/Layouts/Footer";
import SasaranStrategiPencapaian from "../Components/Fragments/SasaranStrategiPencapaian";
import NavbarPortal from "../Components/Layouts/NavbarPortal";
import PeraturanAkademik from "../Components/Fragments/PeraturanAkademik";

const PeraturanAkademikPage = () => {
  return (
    <div>
      <NavbarPortal />
      <PeraturanAkademik />
      <Footer />
    </div>
  );
};

export default PeraturanAkademikPage;
