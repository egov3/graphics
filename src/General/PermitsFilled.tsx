import React from "react";

export const PermitsFilled = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M3 2H21V22H3V3.00029V2ZM7.5 15.5H16.5V17.5H7.5V15.5ZM11 13.4142L16.4142 8.00003L15 6.58582L11 10.5858L9.00003 8.58582L7.58582 10L11 13.4142Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
