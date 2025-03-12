import React from "react";

export const Add = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    fill="none"
  >
    <path
      d="M22 11H13V2H11V11H2V13H11V22H13V13H22V11Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
