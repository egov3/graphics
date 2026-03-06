import type React from "react";

export const Filter = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    data-testid="FilterIcon"
    {...props}
    fill="none"
  >
    <path
      d="M20 5V6.0184L13.5861 12.43L13 13.0157V19.03L11 19.758V13.0157L10.4139 12.4299L4 6.0184V5H20ZM22 3H2V6.8471L9 13.8444V22.6144L15 20.4306V13.8444L22 6.8471V3Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
