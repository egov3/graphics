import React from "react";

export const News = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    fill="none"
  >
    <path
      d="M18 8H12V9.7H18V8ZM18 14.3H12V16H18V14.3ZM18 11.15H12V12.85H18V11.15ZM6 9.455V14.545L10.408 12L6 9.455ZM2 4V20H22V4H2ZM20 18H4V6H20V18Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
