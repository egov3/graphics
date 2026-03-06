import type React from "react";

export const Divider = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="12"
    height="2"
    viewBox="0 0 12 2"
    xmlns="http://www.w3.org/2000/svg"
    data-testid="DividerIcon"
    {...props}
    fill="none"
  >
    <path
      d="M0 1H12"
      stroke="var(--default-black-color, #000)"
      fill={props.fill ?? "black"}
    />
  </svg>
);
