import type React from "react";

export const ViewGrid = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    data-testid="ViewGridIcon"
    {...props}
    fill="none"
  >
    <path
      d="M3 11H11V3H3V11ZM5 5H9V9H5V5ZM13 3V11H21V3H13ZM19 9H15V5H19V9ZM3 21H11V13H3V21ZM5 15H9V19H5V15ZM13 21H21V13H13V21ZM15 15H19V19H15V15Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
