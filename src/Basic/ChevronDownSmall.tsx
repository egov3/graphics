import React from "react";

export const ChevronDownSmall = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    fill="none"
  >
    <path
      d="M7.08334 10.0833L8.25001 8.91667L12.0833 12.75L15.9167 8.91667L17.0833 10.0833L12.0833 15.0833L7.08334 10.0833Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
