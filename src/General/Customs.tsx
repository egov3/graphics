import type React from "react";

export const Customs = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    fill="none"
  >
    <path
      d="M22 11V5H10C9 3 7.65414 3 6.5 3C4 3 3 4.61496 3 6.6V19H2V21H11.375V19H10V11H22ZM13.2641 9L14.0454 7H16.9859L16.2046 9H13.2641ZM20.4375 9H17.9516L18.7329 7H20.4375V9ZM12.2984 7L11.5171 9H10V7H12.2984ZM5.125 19L5 6.6C5 5.60748 5.63844 5 6.5 5C7.36156 5 8 5.60748 8 6.6V19H5.125Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
