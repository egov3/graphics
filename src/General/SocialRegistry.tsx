import React from "react";

export const SocialRegistry = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M2 2H11V22H2V3.00004V2ZM4 4V20H9V4H4Z"
      fill={props.fill ?? "black"}
    />
    <path
      d="M6.5 18.5C7.05228 18.5 7.5 18.0523 7.5 17.5C7.5 16.9477 7.05228 16.5 6.5 16.5C5.94772 16.5 5.5 16.9477 5.5 17.5C5.5 18.0523 5.94772 18.5 6.5 18.5Z"
      fill={props.fill ?? "black"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.5 5.5L7.5 15H5.5L5.5 5.5H7.5Z"
      fill={props.fill ?? "black"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13 2H22V22H13V3.00004V2ZM15 4V20H20V4H15Z"
      fill={props.fill ?? "black"}
    />
    <path
      d="M17.5 18.5C18.0523 18.5 18.5 18.0523 18.5 17.5C18.5 16.9477 18.0523 16.5 17.5 16.5C16.9477 16.5 16.5 16.9477 16.5 17.5C16.5 18.0523 16.9477 18.5 17.5 18.5Z"
      fill={props.fill ?? "black"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.5 5.5V15H16.5V5.5H18.5Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
