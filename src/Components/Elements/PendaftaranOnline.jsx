import { Link } from "react-router-dom";

const PendaftaranOnline = () => {
  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24">
      <h2 className="text-2xl mt-5">Pendaftaran Secara Online</h2>

      <div className="pl-5 mb-10">
        <ol style={{ listStyleType: "decimal" }}>
          <li>
            <Link to="/ytb" className="text-blue-500 hover:text-indigo-700/100">
              Pendaftaran Online YTB
            </Link>
          </li>
          <li>
            <Link
              to="/stami"
              className="text-blue-500 hover:text-indigo-700/100"
            >
              Pendaftaran Online UMT
            </Link>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default PendaftaranOnline;
