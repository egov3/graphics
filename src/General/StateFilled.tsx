import type React from "react";

export const StateFilled = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    fill="none"
  >
    <path d="M7 10H4V17H7V10Z" fill={props.fill ?? "black"} />
    <path d="M13.5 10H10.5V17H13.5V10Z" fill={props.fill ?? "black"} />
    <path d="M22 19H2V22H22V19Z" fill={props.fill ?? "black"} />
    <path d="M20 10H17V17H20V10Z" fill={props.fill ?? "black"} />
    <path d="M12 1L2 6V8H22V6L12 1Z" fill={props.fill ?? "black"} />
  </svg>
);
