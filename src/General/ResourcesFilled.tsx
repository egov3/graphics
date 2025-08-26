import React from "react";

export const ResourcesFilled = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    fill="none"
  >
    <path
      d="M22 7L17 2L12 7L17 12L22 7ZM3 11H11V3H3V11ZM13 21H21V13H13V21ZM3 21H11V13H3V21Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
