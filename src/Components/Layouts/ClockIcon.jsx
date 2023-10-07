import React from "react";

const ClockIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-clock"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="6" x2="12" y2="12"></line>
      <line x1="12" y1="12" x2="9" y2="15"></line>
    </svg>
  );
};

export default ClockIcon;
