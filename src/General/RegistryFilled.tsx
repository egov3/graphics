import type React from "react";

export const RegistryFilled = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    data-testid="RegistryFilledIcon"
    {...props}
    fill="none"
  >
    <path
      d="M2 20H9V4H2V20ZM11 4V20H22V4H11ZM17 14H14V12H17V14ZM19 10H14V8H19V10Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
