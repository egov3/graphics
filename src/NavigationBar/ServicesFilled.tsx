import React from "react";

export const ServicesFilled = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    fill="none"
  >
    <path
      d="M19 3H5V5H19V3ZM3 7V21H21V7H3ZM13 16.95H8V15.05H13V16.95ZM16 12.95H8V11.05H16V12.95Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
