import React from "react";

export const Accreditation = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 2H21V22H3V3.00029V2ZM5 4V20H19V4H5Z"
      fill={props.fill ?? "black"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.5 2H15.5V10L12 7.55L8.5 10V2ZM10.5 4V6.15869L12 5.10869L13.5 6.15869V4H10.5Z"
      fill={props.fill ?? "black"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.5 12.5H15.5V14.5H8.5V12.5Z"
      fill={props.fill ?? "black"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 16H17V18H7V16Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
