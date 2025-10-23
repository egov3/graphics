import type React from "react";

export const ChevronUp = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    fill="none"
  >
    <path
      d="M19.637 16.2319L12 8.59594L4.36297 16.2319L2.94897 14.8179L12 5.76794L21.051 14.8179L19.637 16.2319Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
