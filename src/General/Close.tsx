import type React from "react";

export const Close = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    data-testid="CloseIcon"
    {...props}
    fill="none"
  >
    <path
      d="M20.707 4.70697L19.293 3.29297L12 10.586L4.70697 3.29297L3.29297 4.70697L10.586 12L3.29297 19.293L4.70697 20.707L12 13.414L19.293 20.707L20.707 19.293L13.414 12L20.707 4.70697Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
