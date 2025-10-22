import type React from "react";

export const ChevronLeftSmall = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    fill="none"
  >
    <path
      d="M14 7L15.1667 8.16667L11.3333 12L15.1667 15.8333L14 17L9 12L14 7Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
