import type React from "react";

export const StarFilled = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    fill="none"
  >
    <g clipPath="url(#clip0_2066_3093)">
      <path
        d="M24 8.99997H14.8328L12 0.281372L9.1672 8.99997H0L7.4164 14.3883L4.5836 23.1068L12 17.7184L19.4164 23.1068L16.5836 14.3882L24 8.99997Z"
        fill={props.fill ?? "black"}
      />
    </g>
    <defs>
      <clipPath id="clip0_2066_3093">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
