import React from "react";

export const DocumentTable = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    fill="none"
  >
    <path
      d="M15.4141 2H4V22H20V6.5859L15.4141 2ZM18 20H6V4H14.5856L18 7.4144V20ZM8 16H16V8H8V16ZM12.65 9.35H14.65V11.35H12.65V9.35ZM12.65 12.65H14.65V14.65H12.65V12.65ZM9.35 9.35H11.35V11.35H9.35V9.35ZM9.35 12.65H11.35V14.65H9.35V12.65Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
