import Berita from "../Layouts/Berita";

const ArsipBerita = () => {
  return (
    <div className="flex flex-col justify-center items-center px-4 md:px-8 lg:px-16">
      <div className="my-20 mt-36 max-w-screen-lg mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-5xl font-semibold">Arsip Berita</h1>
          <hr className="border-blue-500 border-b-4 w-1/4 mx-auto mt-3" />
        </div>

        {/* --------------------------------------->>>>>    BERITA     <<<<<--------------------------------------- */}
        <div className="flex flex-col justify-center md:flex-row">
          <div className="border border-gray-400 mb-6 md:mr-6 md:w-4/6">
            {/* Konten */}
            <Berita />
          </div>

          <div className="w-full md:w-2/6 md:mx-2"></div>
        </div>
      </div>
    </div>
  );
};

export default ArsipBerita;
