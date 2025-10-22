import type React from "react";

export const ChevronRight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    fill="none"
  >
    <path
      d="M9.182 21.051L7.76801 19.637L15.404 12L7.76801 4.36297L9.182 2.94897L18.232 12L9.182 21.051Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
