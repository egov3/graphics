import type React from "react";

export const Licenses = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    data-testid="LicensesIcon"
    {...props}
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 2H21V22H3V3.00029V2ZM5 4V20H19V4H5Z"
      fill={props.fill ?? "black"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.5 9.5C8.5 7.56701 10.067 6 12 6C13.933 6 15.5 7.56701 15.5 9.5C15.5 11.433 13.933 13 12 13C10.067 13 8.5 11.433 8.5 9.5ZM12 7.75C11.0335 7.75 10.25 8.53351 10.25 9.5C10.25 10.4665 11.0335 11.25 12 11.25C12.9665 11.25 13.75 10.4665 13.75 9.5C13.75 8.53351 12.9665 7.75 12 7.75Z"
      fill={props.fill ?? "black"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.2426 12.1213L9.12132 14.2426L8.76777 12.4749L7 12.1213L9.12132 10L11.2426 12.1213Z"
      fill={props.fill ?? "black"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13 12.1213L15.1213 14.2427L15.4749 12.4749L17.2426 12.1213L15.1213 10L13 12.1213Z"
      fill={props.fill ?? "black"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 16H16V18H8V16Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
