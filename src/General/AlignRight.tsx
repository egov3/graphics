import type React from "react";

export const AlignRight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    data-testid="AlignRightIcon"
    {...props}
    fill="none"
  >
    <path
      d="M19 3V21H21V3H19ZM13 11H3V13H13V16L17 12L13 8V11Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
