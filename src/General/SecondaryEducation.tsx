import type React from "react";

export const SecondaryEducation = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M11.0289 2H14.6884V4H12.9486V5C14.6912 5.32926 16.6236 6.47549 17 8H22V22H2V8H7C7.37635 6.47549 9.28633 5.32926 11.0289 5V2ZM4 20H20V10H15V9.13812C15 7.86987 13.4384 6.82873 11.9888 6.82873C10.5391 6.82873 9 7.86987 9 9.13812V10H4V20Z"
      fill={props.fill ?? "black"}
    />
    <path d="M8 14H6V12H8V14Z" fill={props.fill ?? "black"} />
    <path d="M13 14H11V12H13V14Z" fill={props.fill ?? "black"} />
    <path d="M18 14H16V12H18V14Z" fill={props.fill ?? "black"} />
    <path d="M8 18H6V16H8V18Z" fill={props.fill ?? "black"} />
    <path d="M13 20H11V17H13V20Z" fill={props.fill ?? "black"} />
    <path d="M18 18H16V16H18V18Z" fill={props.fill ?? "black"} />
  </svg>
);
