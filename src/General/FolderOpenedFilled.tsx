import type React from "react";

export const FolderOpenedFilled = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    fill="none"
  >
    <path
      d="M1 10L3 21H21L23 10H1ZM21 5H10.9584L8.9584 3H3V8H21V5Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
