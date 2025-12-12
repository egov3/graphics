import type React from "react";

export const DocumentDiagramFilled = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    data-testid="DocumentDiagramFilledIcon"
    {...props}
    fill="none"
  >
    <path
      d="M15.4141 2H4V22H20V6.5859L15.4141 2ZM9.6 16H8V12H9.6V16ZM12.8 16H11.2V8H12.8V16ZM16 16H14.4V10H16V16Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
