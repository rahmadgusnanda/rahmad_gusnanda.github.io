import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const BawahIcon = (props) => {
  const { ukuran } = props;
  return <FontAwesomeIcon icon={faChevronDown} className={` ${ukuran} `} />;
};

export default BawahIcon;
