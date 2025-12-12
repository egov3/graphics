import type React from "react";

export const ArrowUp = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    data-testid="ArrowUpIcon"
    {...props}
    fill="none"
  >
    <path
      d="M2.80798 9.87901L4.22198 11.293L11 4.51501V23H13V4.51501L19.778 11.293L21.192 9.87901L12 0.687012L2.80798 9.87901Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
