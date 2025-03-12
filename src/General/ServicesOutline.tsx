import React from "react";

export const ServicesOutline = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    fill="none"
  >
    <path
      d="M3 7V21H21V7H3ZM19 19H5V9H19V19ZM19 3H5V5H19V3ZM13 15.05H8V16.95H13V15.05ZM16 11.05H8V12.95H16V11.05Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
