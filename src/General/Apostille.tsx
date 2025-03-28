import React from "react";

export const Apostille = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    fill="none"
  >
    <path
      d="M2 4V20H22V4H2ZM20 18H4V6H20V18ZM17 14H12V16H17V14ZM10 14H7V16H10V14Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
