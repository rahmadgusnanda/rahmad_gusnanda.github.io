import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import KananIcon from "./KananIcon";
import BawahIcon from "./BawahIcon";

const NavbarPortal = () => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    /**
     * Close all submenus when clicking outside
     */
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        closeAllSubMenus();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTentangKamiSubMenuOpen, setIsTentangKamiSubMenuOpen] =
    useState(false);
  const [isProgramStudiSubMenuOpen, setIsProgramStudiSubMenuOpen] =
    useState(false);
  const [isMahasiswaSubMenuOpen, setIsMahasiswaSubMenuOpen] = useState(false);
  const [isUnitPendukungSubMenuOpen, setIsUnitPendukungSubMenuOpen] =
    useState(false);
  const [isSaranaPrasaranaSubMenuOpen, setIsSaranaPrasaranaSubMenuOpen] =
    useState(false);
  const [isInfoSubMenuOpen, setIsInfoSubMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleTentangKamiSubMenu = () => {
    setIsTentangKamiSubMenuOpen(!isTentangKamiSubMenuOpen);
    setIsProgramStudiSubMenuOpen(false);
    setIsMahasiswaSubMenuOpen(false);
    setIsUnitPendukungSubMenuOpen(false);
    setIsSaranaPrasaranaSubMenuOpen(false);
    setIsInfoSubMenuOpen(false);
  };

  const toggleProgramStudiSubMenu = () => {
    setIsProgramStudiSubMenuOpen(!isProgramStudiSubMenuOpen);
    setIsTentangKamiSubMenuOpen(false);
    setIsMahasiswaSubMenuOpen(false);
    setIsUnitPendukungSubMenuOpen(false);
    setIsSaranaPrasaranaSubMenuOpen(false);
    setIsInfoSubMenuOpen(false);
  };

  const toggleMahasiswaSubMenu = () => {
    setIsMahasiswaSubMenuOpen(!isMahasiswaSubMenuOpen);
    setIsTentangKamiSubMenuOpen(false);
    setIsProgramStudiSubMenuOpen(false);
    setIsUnitPendukungSubMenuOpen(false);
    setIsSaranaPrasaranaSubMenuOpen(false);
    setIsInfoSubMenuOpen(false);
  };

  const toggleUnitPendukungSubMenu = () => {
    setIsUnitPendukungSubMenuOpen(!isUnitPendukungSubMenuOpen);
    setIsTentangKamiSubMenuOpen(false);
    setIsProgramStudiSubMenuOpen(false);
    setIsMahasiswaSubMenuOpen(false);
    setIsSaranaPrasaranaSubMenuOpen(false);
    setIsInfoSubMenuOpen(false);
  };

  const toggleSaranaPrasaranaSubMenu = () => {
    setIsSaranaPrasaranaSubMenuOpen(!isSaranaPrasaranaSubMenuOpen);
    setIsTentangKamiSubMenuOpen(false);
    setIsProgramStudiSubMenuOpen(false);
    setIsMahasiswaSubMenuOpen(false);
    setIsUnitPendukungSubMenuOpen(false);
    setIsInfoSubMenuOpen(false);
  };

  const toggleInfoSubMenu = () => {
    setIsInfoSubMenuOpen(!isInfoSubMenuOpen);
    setIsTentangKamiSubMenuOpen(false);
    setIsProgramStudiSubMenuOpen(false);
    setIsMahasiswaSubMenuOpen(false);
    setIsUnitPendukungSubMenuOpen(false);
    setIsSaranaPrasaranaSubMenuOpen(false);
  };

  const closeAllSubMenus = () => {
    setIsTentangKamiSubMenuOpen(false);
    setIsProgramStudiSubMenuOpen(false);
    setIsMahasiswaSubMenuOpen(false);
    setIsUnitPendukungSubMenuOpen(false);
    setIsSaranaPrasaranaSubMenuOpen(false);
    setIsInfoSubMenuOpen(false);
  };

  const triangleTentangKamiClass = isTentangKamiSubMenuOpen
    ? "text-cyan-400"
    : "text-black";
  const triangleProgramStudiClass = isProgramStudiSubMenuOpen
    ? "text-cyan-400"
    : "text-black";
  const triangleMahasiswaClass = isMahasiswaSubMenuOpen
    ? "text-cyan-400"
    : "text-black";
  const triangleUnitPendukungClass = isUnitPendukungSubMenuOpen
    ? "text-cyan-400"
    : "text-black";
  const triangleSaranaPrasaranaClass = isSaranaPrasaranaSubMenuOpen
    ? "text-cyan-400"
    : "text-black";
  const triangleInfoClass = isInfoSubMenuOpen ? "text-cyan-400" : "text-black";

  return (
    <nav className="bg-blue-800 fixed w-full z-50" ref={wrapperRef}>
      <div className="container mx-auto">
        <div className="flex justify-between items-center lg:mr-20">
          <Link to={"/home"}>
            <img
              src="/public/images/logo2.png"
              alt="Logo"
              className="w-40 h-auto rounded-md hover:scale-110 md:ml-7 mr-24"
            />
          </Link>

          {/* Hamburger Menu */}
          <div className="md:hidden">
            <button className="text-white py-4" onClick={toggleMobileMenu}>
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

          <ul className="hidden md:flex space-x-4">
            <li className="relative group">
              <button
                className="text-white hover:text-gray-300 py-4 text-lg"
                onClick={toggleTentangKamiSubMenu}
              >
                Tentang Kami
                <span
                  className={`ml-1 hover:text-cyan-400 text-md ${triangleTentangKamiClass}`}
                >
                  {isTentangKamiSubMenuOpen ? (
                    <BawahIcon ukuran="text-sm" font="font-bold" />
                  ) : (
                    <KananIcon ukuran="text-sm" font="font-bold" />
                  )}
                </span>
              </button>
              <div
                className={`border-b-2 border-transparent h-1 absolute inset-x-0 bottom-0 transform translate-y-1 scale-x-0 transition-transform origin-center bg-yellow-500 ${
                  isTentangKamiSubMenuOpen ? "scale-x-100" : ""
                }`}
              ></div>
              <ul
                className={`absolute left-0 mt-1 space-y-2 text-black bg-white p-4 w-64 ${
                  isTentangKamiSubMenuOpen ? "block" : "hidden"
                }`}
              >
                <li>
                  <Link to={"/kata-sambutan-ketua"}>Kata Sambutan Ketua</Link>
                </li>

                <li>
                  <Link to={"/sejarah"}>Sejarah</Link>
                </li>

                <li>
                  <Link to={"/vmt"}>Visi, Misi & Tujuan</Link>
                </li>

                <li>
                  <Link to={"/sasaranstrategipencapaian"}>
                    Sasaran & Startegi Pencapaian
                  </Link>
                </li>
              </ul>
            </li>
          </ul>

          <ul className="hidden md:flex">
            <li className="relative group">
              <button
                className="text-white hover:text-gray-300 py-4 text-lg"
                onClick={toggleProgramStudiSubMenu}
              >
                Program Studi
                <span
                  className={`ml-1 hover:text-cyan-400 text-md ${triangleProgramStudiClass}`}
                >
                  {isProgramStudiSubMenuOpen ? (
                    <BawahIcon ukuran="text-sm" font="font-bold" />
                  ) : (
                    <KananIcon ukuran="text-sm" font="font-bold" />
                  )}
                </span>
              </button>
              <div
                className={`border-b-2 border-transparent h-1 absolute inset-x-0 bottom-0 transform translate-y-1 scale-x-0 transition-transform origin-center bg-yellow-500 ${
                  isProgramStudiSubMenuOpen ? "scale-x-100" : ""
                }`}
              ></div>
              <ul
                className={`absolute mt-1 w-max h-max text-black bg-white  ${
                  isProgramStudiSubMenuOpen ? "block" : "hidden"
                }`}
              >
                <div className="flex justify-between h-48 items-start mx-auto">
                  <li className="mx-6">
                    S1 Akuntansi
                    <hr className="border-blue-500 border-b-2 w-1/2" />
                    <ul className="mt-3">
                      <li className="my-1">
                        <Link to={"/kata-sambutan-kaprodi-akuntansi"}>
                          Kata Sambutan Kaprod
                        </Link>
                      </li>
                      <li className="my-1">
                        <Link to={"/vmt"}>Visi, Misi & Tujuan</Link>
                      </li>
                      <li className="my-1">
                        <Link to={"/sasaranstrategipencapaian"}>
                          Sasaran & Startegi Pencapaian
                        </Link>
                      </li>
                      <li className="my-1">
                        <Link to={"/prodi-akuntansi/dosen-pengajar"}>
                          Dosen Pengajar
                        </Link>
                      </li>
                      <li className="my-1">
                        <Link to={"/kurikulum-akuntansi"}>Kurikulum</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="mx-6">
                    S1 Manajemen
                    <hr className="border-blue-500 border-b-2 w-1/2" />
                    <ul className="mt-3">
                      <Link to={"/katasambutankaprodimanajemen"}>
                        Kata Sambutan Kaprodi{" "}
                      </Link>
                      <li>
                        <Link to={"/vmt"}>Visi, Misi & Tujuan</Link>
                      </li>
                      <li>
                        <Link to={"/sasaranstrategipencapaian"}>
                          Sasaran & Startegi Pencapaian
                        </Link>
                      </li>
                      <li className="my-1">
                        <Link to={"/prodi-manajemen/dosen-pengajar"}>
                          Dosen Pengajar
                        </Link>
                      </li>
                      <li className="my-1">
                        <Link to={"/kurikulum-manajemen"}>Kurikulum</Link>
                      </li>
                    </ul>
                  </li>
                </div>
              </ul>
            </li>
          </ul>

          <ul className="hidden md:flex space-x-4">
            <li className="relative group">
              <button
                className="text-white hover:text-gray-300 py-4 text-lg"
                onClick={toggleMahasiswaSubMenu}
              >
                Mahasiswa
                <span
                  className={`ml-1 hover:text-cyan-400 text-md ${triangleMahasiswaClass}`}
                >
                  {isMahasiswaSubMenuOpen ? (
                    <BawahIcon ukuran="text-sm" font="font-bold" />
                  ) : (
                    <KananIcon ukuran="text-sm" font="font-bold" />
                  )}
                </span>
              </button>
              <div
                className={`border-b-2 border-transparent h-1 absolute inset-x-0 bottom-0 transform translate-y-1 scale-x-0 transition-transform origin-center bg-yellow-500 ${
                  isMahasiswaSubMenuOpen ? "scale-x-100" : ""
                }`}
              ></div>
              <ul
                className={`absolute left-0 mt-1 space-y-2 text-black bg-white p-4 w-64 ${
                  isMahasiswaSubMenuOpen ? "block" : "hidden"
                }`}
              >
                <li>
                  <Link to={"/pendaftaranonline"}>Pendaftaran Online</Link>
                </li>

                <li>
                  <Link to={"/daftarbeasiswa"}>Daftar Beasiswa</Link>
                </li>

                <li>
                  <Link to={"/kalender-akademik"}>Kalender Akademik</Link>
                </li>

                <li>
                  <Link to={"/peraturanakademik"}>Peraturan Akademik</Link>
                </li>
              </ul>
            </li>
          </ul>

          <ul className="hidden md:flex space-x-4">
            <li className="relative group">
              <button
                className="text-white hover:text-gray-300 py-4 text-lg"
                onClick={toggleUnitPendukungSubMenu}
              >
                Unit Pendukung
                <span
                  className={`ml-1 hover:text-cyan-400 text-md ${triangleUnitPendukungClass}`}
                >
                  {isUnitPendukungSubMenuOpen ? (
                    <BawahIcon ukuran="text-sm" font="font-bold" />
                  ) : (
                    <KananIcon ukuran="text-sm" font="font-bold" />
                  )}
                </span>
              </button>
              <div
                className={`border-b-2 border-transparent h-1 absolute inset-x-0 bottom-0 transform translate-y-1 scale-x-0 transition-transform origin-center bg-yellow-500 ${
                  isUnitPendukungSubMenuOpen ? "scale-x-100" : ""
                }`}
              ></div>
              <ul
                className={`absolute left-0 mt-1 space-y-2 text-black bg-white p-4 w-64 ${
                  isUnitPendukungSubMenuOpen ? "block" : "hidden"
                }`}
              >
                <li>
                  <Link to={""}>LPPM</Link>
                </li>

                <li>
                  <Link to={""}>LPM</Link>
                </li>

                <li>
                  <Link to={""}>Pusat Sistem Informasi</Link>
                </li>

                <li>
                  <Link to={""}>Laboratorium</Link>
                </li>
              </ul>
            </li>
          </ul>

          <ul className="hidden md:flex space-x-4">
            <li className="relative group">
              <button
                className="text-white hover:text-gray-300 py-4 text-lg"
                onClick={toggleSaranaPrasaranaSubMenu}
              >
                Sarana & Prasarana
                <span
                  className={`ml-1 hover:text-cyan-400 text-md ${triangleSaranaPrasaranaClass}`}
                >
                  {isSaranaPrasaranaSubMenuOpen ? (
                    <BawahIcon ukuran="text-sm" font="font-bold" />
                  ) : (
                    <KananIcon ukuran="text-sm" font="font-bold" />
                  )}
                </span>
              </button>
              <div
                className={`border-b-2 border-transparent h-1 absolute inset-x-0 bottom-0 transform translate-y-1 scale-x-0 transition-transform origin-center bg-yellow-500 ${
                  isSaranaPrasaranaSubMenuOpen ? "scale-x-100" : ""
                }`}
              ></div>
              <ul
                className={`absolute left-0 mt-1 space-y-2 text-black bg-white p-4 w-64 ${
                  isSaranaPrasaranaSubMenuOpen ? "block" : "hidden"
                }`}
              >
                <li>
                  <Link to={"/fasilitas"}>Fasilitas</Link>
                </li>

                <li>
                  <Link to={""}>E-learning</Link>
                </li>

                <li>
                  <Link to={""}>E-library</Link>
                </li>

                <li>
                  <Link to={""}>E-jurnal</Link>
                </li>
                <li>
                  <Link to={""}>Sistem Informasi Keuangan</Link>
                </li>
                <li>
                  <Link to={"/"}>Sistem Informasi Akademik</Link>
                </li>
              </ul>
            </li>
          </ul>

          <ul className="hidden md:flex space-x-4">
            <li className="relative group">
              <button
                className="text-white hover:text-gray-300 py-4 text-lg"
                onClick={toggleInfoSubMenu}
              >
                Info
                <span
                  className={`ml-1 hover:text-cyan-400 text-md ${triangleInfoClass}`}
                >
                  {isInfoSubMenuOpen ? (
                    <BawahIcon ukuran="text-sm" font="font-bold" />
                  ) : (
                    <KananIcon ukuran="text-sm" font="font-bold" />
                  )}
                </span>
              </button>
              <div
                className={`border-b-2 border-transparent h-1 absolute inset-x-0 bottom-0 transform translate-y-1 scale-x-0 transition-transform origin-center bg-yellow-500 ${
                  isInfoSubMenuOpen ? "scale-x-100" : ""
                }`}
              ></div>
              <ul
                className={`absolute left-0 mt-1 space-y-2 text-black bg-white p-4 w-auto ${
                  isInfoSubMenuOpen ? "block" : "hidden"
                }`}
              >
                <li>
                  <Link to={"/arsip-berita"}>Berita</Link>
                </li>

                <li>
                  <Link to={"/arsip-agenda"}>Agenda</Link>
                </li>
                <li>
                  <Link to={"/arsip-pengumuman"}>Pengumuman</Link>
                </li>
                <li>
                  <Link to={"/arsip-tabloid"}>Tabloid</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="md:hidden pl-3 mt-1 space-y-2 text-black bg-white">
          <li className="relative group">
            <button
              className="text-black py-4"
              onClick={toggleTentangKamiSubMenu}
            >
              Tentang Kami
              <span
                className={`ml-1 hover:text-cyan-400 text-xs ${triangleTentangKamiClass}`}
              >
                {isTentangKamiSubMenuOpen ? (
                  <BawahIcon ukuran="text-sm" font="font-bold" />
                ) : (
                  <KananIcon ukuran="text-sm" font="font-bold" />
                )}
              </span>
            </button>
            <div className=""></div>
            <ul
              className={` p-4 space-y-2 text-black bg-white ml-5 ${
                isTentangKamiSubMenuOpen ? "block" : "hidden"
              }`}
            >
              <li>
                <Link to={"/kata-sambutan-ketua"}>Kata Sambutan Ketua</Link>
              </li>

              <li>
                <Link to={"/sejarah"}>Sejarah</Link>
              </li>

              <li>
                <Link to={"/vmt"}>Visi, Misi & Tujuan</Link>
              </li>

              <li>
                <Link to={"/sasaranstrategipencapaian"}>
                  Sasaran & Startegi Pencapaian
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      )}

      {isMobileMenuOpen && (
        <ul className="md:hidden pl-3 text-black bg-white">
          <li className="relative group">
            <button
              className="text-black py-4"
              onClick={toggleProgramStudiSubMenu}
            >
              Program Studi
              <span
                className={`ml-1 hover:text-cyan-400 text-xs ${triangleProgramStudiClass}`}
              >
                {isProgramStudiSubMenuOpen ? (
                  <BawahIcon ukuran="text-sm" font="font-bold" />
                ) : (
                  <KananIcon ukuran="text-sm" font="font-bold" />
                )}
              </span>
            </button>
            <div className=""></div>
            <ul
              className={` p-4 space-y-2 text-black bg-white ml-5 ${
                isProgramStudiSubMenuOpen ? "block" : "hidden"
              }`}
            >
              <li className="mx-6">
                S1 Akuntansi
                <hr className="border-blue-500 border-b-2 w-1/2" />
                <ul className="mt-3">
                  <li className="my-1">
                    <Link to={"/kata-sambutan-kaprodi-akuntansi"}>
                      Kata Sambutan Kaprod
                    </Link>
                  </li>
                  <li className="my-1">
                    <Link to={"/vmt"}>Visi, Misi & Tujuan</Link>
                  </li>
                  <li className="my-1">
                    <Link to={"/sasaranstrategipencapaian"}>
                      Sasaran & Startegi Pencapaian
                    </Link>
                  </li>
                  <li className="my-1">
                    <Link to={"/prodi-akuntansi/dosen-pengajar"}>
                      Dosen Pengajar
                    </Link>
                  </li>
                  <li className="my-1">
                    <Link to={"/kurikulum-akuntansi"}>Kurikulum</Link>
                  </li>
                </ul>
              </li>
              <li className="mx-6">
                S1 Manajemen
                <hr className="border-blue-500 border-b-2 w-1/2" />
                <ul className="mt-3">
                  <Link to={"/katasambutankaprodimanajemen"}>
                    Kata Sambutan Kaprodi{" "}
                  </Link>
                  <li>
                    <Link to={"/vmt"}>Visi, Misi & Tujuan</Link>
                  </li>
                  <li>
                    <Link to={"/sasaranstrategipencapaian"}>
                      Sasaran & Startegi Pencapaian
                    </Link>
                  </li>
                  <li className="my-1">
                    <Link to={"/prodi-manajemen/dosen-pengajar"}>
                      Dosen Pengajar
                    </Link>
                  </li>
                  <li className="my-1">
                    <Link to={"/kurikulum-manajemen"}>Kurikulum</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      )}

      {isMobileMenuOpen && (
        <ul className="md:hidden pl-3 text-black bg-white">
          <li className="relative group">
            <button
              className="text-black py-4"
              onClick={toggleMahasiswaSubMenu}
            >
              Mahasiswa
              <span
                className={`ml-1 hover:text-cyan-400 text-xs ${triangleMahasiswaClass}`}
              >
                {isMahasiswaSubMenuOpen ? (
                  <BawahIcon ukuran="text-sm" font="font-bold" />
                ) : (
                  <KananIcon ukuran="text-sm" font="font-bold" />
                )}
              </span>
            </button>
            <div className=""></div>
            <ul
              className={` p-4 space-y-2 text-black bg-white ml-5 ${
                isMahasiswaSubMenuOpen ? "block" : "hidden"
              }`}
            >
              <li>
                <Link to={"/pendaftaranonline"}>Pendaftaran Online</Link>
              </li>

              <li>
                <Link to={"/daftarbeasiswa"}>Daftar Beasiswa</Link>
              </li>

              <li>
                <Link to={"/kalender-akademik"}>Kalender Akademik</Link>
              </li>

              <li>
                <Link to={"/peraturanakademik"}>Peraturan Akademik</Link>
              </li>
            </ul>
          </li>
        </ul>
      )}

      {isMobileMenuOpen && (
        <ul className="md:hidden pl-3 text-black bg-white">
          <li className="relative group">
            <button
              className="text-black py-4"
              onClick={toggleUnitPendukungSubMenu}
            >
              Unit Pendukung
              <span
                className={`ml-1 hover:text-cyan-400 text-xs ${triangleUnitPendukungClass}`}
              >
                {isUnitPendukungSubMenuOpen ? (
                  <BawahIcon ukuran="text-sm" font="font-bold" />
                ) : (
                  <KananIcon ukuran="text-sm" font="font-bold" />
                )}
              </span>
            </button>
            <div className=""></div>
            <ul
              className={` p-4 space-y-2 text-black bg-white ml-5 ${
                isUnitPendukungSubMenuOpen ? "block" : "hidden"
              }`}
            >
              <li>
                <Link to={""}>LPPM</Link>
              </li>

              <li>
                <Link to={""}>LPM</Link>
              </li>

              <li>
                <Link to={""}>Pusat Sistem Informasi</Link>
              </li>

              <li>
                <Link to={""}>Laboratorium</Link>
              </li>
            </ul>
          </li>
        </ul>
      )}

      {isMobileMenuOpen && (
        <ul className="md:hidden pl-3 text-black bg-white">
          <li className="relative group">
            <button
              className="text-black py-4"
              onClick={toggleSaranaPrasaranaSubMenu}
            >
              Sarana & Prasarana
              <span
                className={`ml-1 hover:text-cyan-400 text-xs ${triangleSaranaPrasaranaClass}`}
              >
                {isSaranaPrasaranaSubMenuOpen ? (
                  <BawahIcon ukuran="text-sm" font="font-bold" />
                ) : (
                  <KananIcon ukuran="text-sm" font="font-bold" />
                )}
              </span>
            </button>
            <div className=""></div>
            <ul
              className={` p-4 space-y-2 text-black bg-white ml-5 ${
                isSaranaPrasaranaSubMenuOpen ? "block" : "hidden"
              }`}
            >
              <li>
                <Link to={"/fasilitas"}>Fasilitas</Link>
              </li>

              <li>
                <Link to={""}>E-learning</Link>
              </li>

              <li>
                <Link to={""}>E-library</Link>
              </li>

              <li>
                <Link to={""}>E-jurnal</Link>
              </li>
              <li>
                <Link to={""}>Sistem Informasi Keuangan</Link>
              </li>
              <li>
                <Link to={""}>Sistem Informasi Akademik</Link>
              </li>
            </ul>
          </li>
        </ul>
      )}

      {isMobileMenuOpen && (
        <ul className="md:hidden pl-3 text-black bg-white">
          <li className="relative group">
            <button className="text-black py-4" onClick={toggleInfoSubMenu}>
              Info
              <span
                className={`ml-1 hover:text-cyan-400 text-xs ${triangleInfoClass}`}
              >
                {isInfoSubMenuOpen ? (
                  <BawahIcon ukuran="text-sm" font="font-bold" />
                ) : (
                  <KananIcon ukuran="text-sm" font="font-bold" />
                )}
              </span>
            </button>
            <div className=""></div>
            <ul
              className={` p-4 space-y-2 text-black bg-white ml-5 ${
                isInfoSubMenuOpen ? "block" : "hidden"
              }`}
            >
              <li>
                <Link to={"/arsip-berita"}>Berita</Link>
              </li>

              <li>
                <Link to={"/arsip-agenda"}>Agenda</Link>
              </li>
              <li>
                <Link to={"/arsip-pengumuman"}>Pengumuman</Link>
              </li>
              <li>
                <Link to={"/arsip-tabloid"}>Tabloid</Link>
              </li>
            </ul>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavbarPortal;
