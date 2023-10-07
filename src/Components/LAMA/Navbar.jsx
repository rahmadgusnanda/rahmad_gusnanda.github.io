import { Link } from "react-router-dom";
import Button from "../Elements/Button";

const Navbar = () => {
  return (
    <div className="flex justify-center h-12 bg-sky-700 items-center">
      <div>
        <Link to="/" className="text-white mr-80 font-semibold">
          Pendaftaran STAMI & PBI
        </Link>
      </div>
      <Button bg="bg-yellow-500">
        <Link to="/pbi">Pendaftaran PBI</Link>
      </Button>

      <Button bg="bg-yellow-500">
        <Link to="/stami">Pendaftaran STAMI</Link>
      </Button>
    </div>
  );
};

export default Navbar;
