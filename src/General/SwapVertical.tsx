import type React from "react";

export const SwapVertical = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    data-testid="SwapVerticalIcon"
    {...props}
    fill="none"
  >
    <path
      d="M3 6H6V18H8V6H11L7 2L3 6ZM18 18V6H16V18H13L17 22L21 18H18Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
