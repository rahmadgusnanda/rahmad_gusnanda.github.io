import React, { useState } from "react";
import Button from "../Elements/Button";
import { Link } from "react-router-dom";

const NavbarPendaftaran = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-blue-800 w-full">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mx-auto py-3 px-4 md:px-6">
          {/* Logo and Hamburger Menu for Mobile */}
          <div className="flex-shrink-0">
            <Link
              to="/pendaftaranonline"
              className="text-white font-semibold hover:text-yellow-400"
            >
              Pendaftaran UMT & PBI
            </Link>
          </div>
          <div className="md:hidden">
            <button className="text-white p-2" onClick={toggleMobileMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-4">
            <Button bg="bg-yellow-500">
              <Link to="/pbi">Pendaftaran PBI</Link>
            </Button>
            <Button bg="bg-yellow-500">
              <Link to="/umt">Pendaftaran UMT</Link>
            </Button>
            <Button bg="bg-yellow-500" className="block">
              <Link to="#">Login</Link>
            </Button>
            <Button bg="bg-yellow-500" className="block">
              <Link to="/home">Kembali</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"} `}>
          <Button bg="bg-yellow-500" className="block my-2">
            <Link to="/pbi">Pendaftaran PBI</Link>
          </Button>
          <Button bg="bg-yellow-500" className="block my-2">
            <Link to="/umt">Pendaftaran UMT</Link>
          </Button>
          <Button bg="bg-yellow-500" className="block my-2">
            <Link to="/">Login</Link>
          </Button>
          <Button bg="bg-yellow-500" className="block">
            <Link to="/home">Kembali</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarPendaftaran;
