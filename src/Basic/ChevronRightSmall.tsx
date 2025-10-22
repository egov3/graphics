import type React from "react";

export const ChevronRightSmall = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    fill="none"
  >
    <path
      d="M10.1667 17L9 15.8333L12.8333 12L9 8.16667L10.1667 7L15.1667 12L10.1667 17Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
