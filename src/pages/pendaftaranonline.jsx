import React from "react";
import NavbarPendaftaran from "../Components/Layouts/NavbarPendaftaran";
import GambarBrosur from "../Components/Fragments/GambarBrosur";
import WebPendaftaran from "../Components/Elements";

const PendaftaranOnlinePage = () => {
  return (
    <div>
      <NavbarPendaftaran />

      <div>
        <GambarBrosur />
      </div>

      <div className="flex justify-center min-h-screen items-center m-4">
        <WebPendaftaran />
      </div>
    </div>
  );
};

export default PendaftaranOnlinePage;
