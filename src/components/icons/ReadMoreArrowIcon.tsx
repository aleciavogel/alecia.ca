import React, { FC } from "react";

const ReadMoreArrowIcon: FC = () => (
  <div className="read-more-arrow">
    <svg
      className="animate-bounce"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 14l-7 7m0 0l-7-7m7 7V3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      ></path>
    </svg>
  </div>
);

export default ReadMoreArrowIcon;
