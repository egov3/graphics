import type React from "react";

export const AlignLeft = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    data-testid="AlignLeftIcon"
    {...props}
    fill="none"
  >
    <path
      d="M11 11V8L7 12L11 16V13H21V11H11ZM3 21H5V3H3V21Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
