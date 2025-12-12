import type React from "react";

export const ChevronLeft = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    data-testid="ChevronLeftIcon"
    {...props}
    fill="none"
  >
    <path
      d="M14.8181 21.051L5.76807 12L14.8181 2.94897L16.2321 4.36297L8.59606 12L16.2321 19.637L14.8181 21.051Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
