import React from "react";

export const State = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    fill="none"
  >
    <path
      d="M6.5 10H4.5V17H6.5V10ZM12.5 10H10.5V17H12.5V10ZM21 19H2V21H21V19ZM18.5 10H16.5V17H18.5V10ZM11.5 3.26L16.71 6H6.29L11.5 3.26ZM11.5 1L2 6V8H21V6L11.5 1Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
