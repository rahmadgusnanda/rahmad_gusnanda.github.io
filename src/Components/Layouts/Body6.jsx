import { Link } from "react-router-dom";

const Body6 = () => {
  return (
    <div className="relative w-full h-96 md:h-screen bg-black">
      <img
        src="/images/maba.jpg"
        alt="Gambar Header"
        className="object-cover object-top w-full h-full absolute top-0 left-0 opacity-30"
      />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
        <h1 className="text-center text-5xl md:text-7xl font-bold p-8 md:mb-8 text-white">
          PENERIMAAN MAHASISWA BARU
        </h1>

        <div className="flex items-center justify-center">
          <button
            className="transition rounded-full py-2 px-5 md:py-4 md:px-8 ease-in-out delay-150 bg-blue-800
        hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-black duration-300 text-lg md:text-xl text-white font-semibold flex items-center justify-center"
          >
            <Link to={"/ytb"}>DAFTAR ONLINE</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Body6;
