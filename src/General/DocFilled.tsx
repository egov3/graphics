import type React from "react";

export const DocFilled = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    data-testid="DocFilledIcon"
    {...props}
    fill="none"
  >
    <path
      d="M15.4141 2H4V22H20V6.5859L15.4141 2ZM13 14.95H8V13.05H13V14.95ZM16 10.95H8V9.05H16V10.95Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
