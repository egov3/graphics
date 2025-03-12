import React from "react";

export const FlagFilled = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    fill="none"
  >
    <path
      d="M14.4 6L14 4H5V21H7V14H12.6L13 16H20V6H14.4Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
