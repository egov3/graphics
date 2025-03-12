import React from "react";

export const Permits = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M7.5 15.5H16.5V17.5H7.5V15.5Z"
      fill={props.fill ?? "black"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.4142 8L11 13.4142L7.58579 10L9 8.58579L11 10.5858L15 6.58579L16.4142 8Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
