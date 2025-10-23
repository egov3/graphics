import type React from "react";

export const HomeFilled = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    fill="none"
  >
    <path
      d="M12 2.80383L3 8.00003V21H21V8.00003L12 2.80383ZM10 19V13H14V19H10Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
