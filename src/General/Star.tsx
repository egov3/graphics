import React from "react";

export const Star = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    fill="none"
  >
    <g clipPath="url(#clip0_2066_3092)">
      <path
        d="M12 6.75357L12.9307 9.61787L13.38 11H17.8451L15.4085 12.77L14.2329 13.6241L14.6819 15.0061L15.6126 17.8705L13.1755 16.1L12 15.2462L10.8245 16.1L8.3878 17.87L9.3185 15.0056L9.7675 13.6236L8.5919 12.77L6.1553 11H10.62L11.0689 9.61797L12 6.75357ZM12 0.281372L9.1672 8.99997H0L7.4164 14.3883L4.5836 23.1068L12 17.7184L19.4164 23.1068L16.5836 14.3882L24 8.99997H14.8328L12 0.281372Z"
        fill={props.fill ?? "black"}
      />
    </g>
    <defs>
      <clipPath id="clip0_2066_3092">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
