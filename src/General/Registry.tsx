import type React from "react";

export const Registry = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    fill="none"
  >
    <path
      d="M2 4V20H22V4H2ZM9 18H4V6H9V18ZM20 18H11V6H20V18ZM18 8H13V10H18V8ZM16 12H13V14H16V12Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
