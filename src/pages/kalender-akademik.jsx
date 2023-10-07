import Footer from "../Components/Layouts/Footer";

import NavbarPortal from "../Components/Layouts/NavbarPortal";
import KalenderAkademik from "../Components/Fragments/KalenderAkademik";

const KalenderAkademikPage = () => {
  return (
    <div>
      <NavbarPortal />
      <KalenderAkademik />
      <Footer />
    </div>
  );
};

export default KalenderAkademikPage;
