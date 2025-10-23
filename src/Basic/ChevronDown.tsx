import type React from "react";

export const ChevronDown = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    fill="none"
  >
    <path
      d="M12 18.2319L2.94897 9.18194L4.36297 7.76794L12 15.4039L19.637 7.76794L21.051 9.18194L12 18.2319Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
