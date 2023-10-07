import Footer from "../Components/Layouts/Footer";

import NavbarPortal from "../Components/Layouts/NavbarPortal";
import DaftarBeasiswa from "../Components/Fragments/DaftarBeasiswa";

const DaftarBeasiswaPage = () => {
  return (
    <div>
      <NavbarPortal />
      <DaftarBeasiswa />
      <Footer />
    </div>
  );
};

export default DaftarBeasiswaPage;
