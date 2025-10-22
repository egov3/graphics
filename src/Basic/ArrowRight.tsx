import type React from "react";

export const ArrowRight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    fill="none"
  >
    <path
      d="M14.9468 16.125L16.1252 17.3033L21.4277 12L16.1252 6.69667L14.9468 7.875L18.2377 11.1667H2.8335V12.8333H18.2377L14.9468 16.125Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
