import type React from "react";

export const Factory = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M1 1H7V8.38197L15 4.38197V8.38197L23 4.38197V23H1V1ZM3 3V21H21V7.61803L13 11.618V7.61803L5 11.618V3H3Z"
      fill={props.fill ?? "black"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 13H11V19H5V13ZM7 15V17H9V15H7Z"
      fill={props.fill ?? "black"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13 13H19V19H13V13ZM15 15V17H17V15H15Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
