import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const KiriIcon = (props) => {
  const { ukuran } = props;
  return <FontAwesomeIcon icon={faChevronLeft} className={` ${ukuran}`} />;
};

export default KiriIcon;
