import React from "react";

export const BankFolder = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    fill="none"
  >
    <path
      d="M8.13 5L10.13 7H20V19H4V5H8.13ZM8.9584 3H2V21H22V5H10.9583L8.9584 3Z"
      fill={props.fill ?? "black"}
    />
    <path
      d="M13 17H11V13.5H9V11.6471H15V13.5H13V17ZM9 9.5H15V10.902H9V9.5Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
