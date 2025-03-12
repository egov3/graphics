import React from "react";

export const ChevronUpSmall = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    fill="none"
  >
    <path
      d="M17.0833 13.9167L15.9167 15.0833L12.0833 11.25L8.25001 15.0833L7.08334 13.9167L12.0833 8.91667L17.0833 13.9167Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
