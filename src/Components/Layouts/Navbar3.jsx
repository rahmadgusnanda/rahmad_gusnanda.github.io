import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveSubMenu(null);
  };

  const toggleSubMenu = (tentangKami) => {
    setActiveSubMenu(activeSubMenu === tentangKami ? null : program);
  };

  const closeAllSubMenus = () => {
    setActiveSubMenu(null);
  };

  return (
    <nav className="bg-blue-800">
      {/* ... Your logo and mobile menu button code ... */}

      <ul className="hidden md:flex space-x-4">
        <li className="relative group">
          <button
            className="text-white hover:text-gray-300 py-4"
            onClick={() => toggleSubMenu("tentangKami")}
          >
            Tentang Kami
            <span
              className={`ml-1 hover:text-cyan-400 text-xs ${
                activeSubMenu === "tentangKami" ? "text-cyan-400" : "text-black"
              }`}
            >
              {activeSubMenu === "tentangKami" ? "▲" : "▼"}
            </span>
          </button>
          <ul
            className={`absolute left-0 mt-1.5 space-y-2 text-black bg-white p-4 w-64 ${
              activeSubMenu === "tentangKami" ? "block" : "hidden"
            }`}
          >
            <li>
              <NavLink to="/katasambutanketua" activeClassName="text-cyan-400">
                Kata Sambutan Ketua
              </NavLink>
            </li>
            <li>
              <Link to="/visimisi">Visi Misi</Link>
            </li>
          </ul>
        </li>

        <li className="relative group">
          <button
            className="text-white hover:text-gray-300 py-4"
            onClick={() => toggleSubMenu("program")}
          >
            Program
            <span
              className={`ml-1 hover:text-cyan-400 text-xs ${
                activeSubMenu === "program" ? "text-cyan-400" : "text-black"
              }`}
            >
              {activeSubMenu === "program" ? "▲" : "▼"}
            </span>
          </button>
          <ul
            className={`absolute left-0 mt-1.5 space-y-2 text-black bg-white p-4 w-64 ${
              activeSubMenu === "program" ? "block" : "hidden"
            }`}
          >
            <li>
              <NavLink to="/katasambutanketua" activeClassName="text-cyan-400">
                Kata Sambutan Ketua
              </NavLink>
            </li>
            <li>
              <Link to="/visimisi">Visi Misi</Link>
            </li>
          </ul>
        </li>
        {/* Add more menu items following the same pattern */}
      </ul>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="md:hidden pl-3 mt-2 space-y-2 text-black bg-gray-500">
          <li className="relative group">
            <button
              className="text-black py-4"
              onClick={() => toggleSubMenu("tentangKami")}
            >
              Tentang Kami
              <span
                className={`ml-1 hover:text-cyan-400 text-xs ${
                  activeSubMenu === "tentangKami"
                    ? "text-cyan-400"
                    : "text-black"
                }`}
              >
                {activeSubMenu === "tentangKami" ? "▲" : "▼"}
              </span>
            </button>
            <ul
              className={`p-4 space-y-2 text-black bg-gray-500 ml-5 ${
                activeSubMenu === "tentangKami" ? "block" : "hidden"
              }`}
            >
              <li>
                <Link to="/tentang1">Tentang 1</Link>
              </li>
            </ul>
          </li>
          {/* Add more mobile menu items following the same pattern */}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
