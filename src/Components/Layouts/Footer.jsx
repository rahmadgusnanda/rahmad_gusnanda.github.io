import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="bg-gray-800 h-auto md:h-72 text-white p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:grid md:grid-cols-2 md:gap-4">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold mb-2">Kontak Kami</h2>
            <div className="mb-5 font-semibold text-lg">
              Pusat Informasi
              <span className="font-light block -mt-1 text-base">
                0813 6262 7008
              </span>
            </div>
            <div className="mb-5 font-semibold text-lg">
              Kampus PSDKU
              <span className="font-light block -mt-1 text-base">
                0812 6534 9497
              </span>
            </div>
          </div>

          <div className="md:col-span-1 md:text-center">
            <Link to="/home">
              <img
                src="/images/logo2.png"
                alt="Logo"
                className="w-48 rounded-md hover:scale-110 -mt-4"
              />
            </Link>
          </div>
        </div>

        <div className="md:border-r-4 md:border-l-4 border-gray-700 md:px-12">
          <div className="w-full">
            <h2 className="text-2xl font-bold mb-2">Alamat</h2>

            <p className="text-sm font-light mb-4">
              KAMPUS UTAMA: Jl. Kapten Batu Sihombing, Medan Estate
            </p>
            <p className="text-sm font-light">
              KAMPUS PSDKU: Jl. Sriwijaya NO. 9 C Pematangsiantar
            </p>
          </div>
        </div>

        <div className="md:mt-0">
          <h2 className="text-2xl font-bold mb-2">Lokasi Kami</h2>

          <iframe
            className="w-full h-52 md:h-5/6 mb-4"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.241308228168!2d99.06499849999998!3d2.962221100000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30318468d0149a17%3A0x3557d60a040367a!2sMurni%20Sadar%20Politeknik!5e0!3m2!1sen!2sid!4v1562758846869!5m2!1sen!2sid"
            title="Peta Lokasi"
          ></iframe>
        </div>
      </div>

      <div className="w-full bg-gray-900/90 text-center text-white p-8">
        © Copyright 2023 by WebDev. All Rights Reserved.
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="fixed bottom-9 right-10 p-4 bg-black bg-opacity-50 text-white rounded-full flex items-center hover:bg-blue-600 hover:opacity-100 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
