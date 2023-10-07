import React from "react";
import Footer from "../Components/Layouts/Footer";
import Body6 from "../Components/Layouts/Body6";
import Body5 from "../Components/Layouts/Body5";
import Body4 from "../Components/Layouts/Body4";
import Body3 from "../Components/Layouts/Body3";
import Body1 from "../Components/Layouts/Body1";
import Body2 from "../Components/Layouts/Body2";
import NavbarPortal from "../Components/Layouts/NavbarPortal";

const WebKampus = () => {
  return (
    <div>
      <div className="items-center justify-center">
        <NavbarPortal />
        {/* <GambarBrosur /> */}
      </div>

      {/* <div className="flex justify-center min-h-screen items-center m-4">
        <WebPendaftaran />
      </div> */}

      <div className="">
        <Body1 />
      </div>

      <div className="">
        <Body2 />
      </div>

      <div className="">
        <Body3 />
      </div>

      <div>
        <Body4 />
      </div>

      <div className="my-8">
        <Body5 />
      </div>

      <div>
        <Body6 />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default WebKampus;
