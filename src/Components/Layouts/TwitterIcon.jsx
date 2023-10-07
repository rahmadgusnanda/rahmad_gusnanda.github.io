import React from "react";
import { FaTwitter } from "react-icons/fa";

const TwitterIcon = (props) => {
  const { children } = props;
  return (
    <div className="flex items-center space-x-2">
      <FaTwitter className="text-white text-2xl" />
      <label className="text-gray-700 text-lg">{children}</label>
    </div>
  );
};

export default TwitterIcon;
