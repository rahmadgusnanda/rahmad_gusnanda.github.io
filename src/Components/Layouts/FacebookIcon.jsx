import { FaFacebook } from "react-icons/fa";

const FacebookIcon = (props) => {
  const { children, warna } = props;
  return (
    <div className="flex items-center space-x-2">
      <FaFacebook className={` ${warna} text-2xl`} />
      <label className="text-gray-700 text-lg">{children}</label>
    </div>
  );
};

export default FacebookIcon;
