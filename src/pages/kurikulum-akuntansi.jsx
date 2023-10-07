import KurikulumAkuntansi from "../Components/Fragments/KurikulumAkuntansi";
import Footer from "../Components/Layouts/Footer";
import NavbarPortal from "../Components/Layouts/NavbarPortal";

const KurikulumAkuntansiPage = () => {
  return (
    <div>
      <NavbarPortal />
      <KurikulumAkuntansi />
      <Footer />
    </div>
  );
};

export default KurikulumAkuntansiPage;
