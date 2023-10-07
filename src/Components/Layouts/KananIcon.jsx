import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const KananIcon = (props) => {
  const { ukuran, font } = props;
  return (
    <FontAwesomeIcon icon={faChevronRight} className={` ${ukuran} ${font} `} />
  );
};

export default KananIcon;
