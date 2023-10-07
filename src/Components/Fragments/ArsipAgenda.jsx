import Agenda from "../Layouts/Agenda";
import BeritaTerbaru from "../Layouts/BeritaTerbaru";
import Tabloid from "../Layouts/Tabloid";

const ArsipAgenda = () => {
  return (
    <div className="flex flex-col justify-center items-center px-4 md:px-8 lg:px-16">
      <div className="my-20 mt-36 max-w-screen-lg mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-5xl font-semibold">Arsip Agenda</h1>
          <hr className="border-blue-500 border-b-4 w-1/4 mx-auto mt-3" />
        </div>

        <div className="flex flex-col md:flex-row mx-2 md:mx-0">
          {/* --------------------------------------->>>>>    AGENDA     <<<<<--------------------------------------- */}
          <div className="border border-gray-400 mb-6 md:mr-6 md:w-4/6 h-full">
            <Agenda />
          </div>

          {/* ---------------------------------->>>>>     BERITA TERBARU     <<<<<---------------------------------- */}
          <div className="border border-gray-400 w-full md:w-2/6 md:mx-2">
            <BeritaTerbaru />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArsipAgenda;
