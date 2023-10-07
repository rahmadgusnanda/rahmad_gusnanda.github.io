import { Link } from "react-router-dom";

const Agenda = () => {
  return (
    <div>
      <h1 className="text-left py-4 text-3xl font-semibold justify-start pl-8 border border-b-gray-400 border-l-4 border-l-blue-500">
        Agenda
      </h1>
      <div className="mt-5">
        <div className="border-solid border-gray-400 px-6 py-3 text-center flex">
          <div className="rounded-lg w-24 border border-black">
            <h1 className="bg-orange-500 rounded-t-md font-semibold text-xl text-white py-2">
              2020
            </h1>
            <p className="text-black text-3xl font-semibold">31</p>
            <p className="text-black font-semibold">Jul</p>
          </div>
          <div className="flex items-center">
            <h1 className="text-xl font-semibold p-2 hover:text-orange-300">
              <Link to={"/arsip-agenda/vlog-competition"}>
                VLOG Competition
              </Link>
            </h1>
          </div>
        </div>

        <div className="border-solid border-gray-400 px-6 py-3 text-center flex">
          <div className="rounded-lg w-24 border border-black">
            <h1 className="bg-orange-500 rounded-t-md font-semibold text-xl text-white py-2">
              2020
            </h1>
            <p className="text-black text-3xl font-semibold">31</p>
            <p className="text-black font-semibold">Jul</p>
          </div>
          <div className="flex items-center">
            <h1 className="text-xl font-semibold p-2 hover:text-orange-300">
              <Link to={"/arsip-agenda/vlog-competition"}>
                TikTok Competition
              </Link>
            </h1>
          </div>
        </div>

        <div className="border-solid border-gray-400 px-6 py-3 mb-5 text-center flex">
          <div className="rounded-lg w-24 border border-black">
            <h1 className="bg-orange-500 rounded-t-md font-semibold text-xl text-white py-2">
              2020
            </h1>
            <p className="text-black text-3xl font-semibold">12</p>
            <p className="text-black font-semibold">Mar</p>
          </div>
          <div className="flex items-center">
            <h1 className="text-xl font-semibold p-2 hover:text-orange-300">
              <Link to={"/arsip-agenda/turnamen-futsal"}>
                Turnamen Futsal Antar SMA/SMK
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agenda;
