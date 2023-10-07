import KurikulumManajemen from "../Components/Fragments/KurikulumManajemen";
import Footer from "../Components/Layouts/Footer";
import NavbarPortal from "../Components/Layouts/NavbarPortal";

const KurikulumManajemenPage = () => {
  return (
    <div>
      <NavbarPortal />
      <KurikulumManajemen />
      <Footer />
    </div>
  );
};

export default KurikulumManajemenPage;
