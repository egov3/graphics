import React from "react";

export const OnlineRegistryFilled = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 21V3H21V21H3ZM11.0054 7H13.0054V6H11.0054V7ZM14.0054 7H16.0054V5H14.0054V7ZM18.4951 7.0911L19.0962 6.49L18.6062 6L19.0962 5.51L18.4951 4.9089L18.0051 5.3989L17.5151 4.9089L16.9141 5.51L17.4041 6L16.9141 6.49L17.5151 7.0911L18.0051 6.6011L18.4951 7.0911ZM16 11H8V13H16V11ZM16 15H8V17H16V15Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
