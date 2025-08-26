import React from "react";

export const InstructionsFilled = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    fill="none"
  >
    <path
      d="M7 21H17V3H7V21ZM2 19H5V5H2V19ZM19 5V19H22V5H19Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
