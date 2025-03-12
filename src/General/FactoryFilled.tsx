import React from "react";

export const FactoryFilled = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M7 1H1V23H23V4.38197L15 8.38197V4.38197L7 8.38197V1ZM11 13H5V19H11V13ZM19 13H13V19H19V13Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
