import React from "react";

export const ArrowLeft = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    fill="none"
  >
    <path
      d="M9.31433 7.87499L8.13599 6.69666L2.8335 12L8.13599 17.3033L9.31433 16.125L6.0235 12.8333H21.4277V11.1667H6.0235L9.31433 7.87499Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
