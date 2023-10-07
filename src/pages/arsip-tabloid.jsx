import NavbarPortal from "../Components/Layouts/NavbarPortal";
import Footer from "../Components/Layouts/Footer";
import Tabloid from "../Components/Fragments/ArsipTabloid";
import ArsipTabloid from "../Components/Fragments/ArsipTabloid";

const TabloidPage = () => {
  return (
    <div>
      <NavbarPortal />

      <ArsipTabloid />

      <Footer />
    </div>
  );
};

export default TabloidPage;
