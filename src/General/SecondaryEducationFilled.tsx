import type React from "react";

export const SecondaryEducationFilled = (
  props: React.SVGProps<SVGSVGElement>,
) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    data-testid="SecondaryEducationFilledIcon"
    {...props}
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.0289 2H14.6884V4H12.9486V5C14.6912 5.32926 16.6236 6.47549 17 8H22V22H2V8H7C7.37635 6.47549 9.28633 5.32926 11.0289 5V2ZM6 14V12H8V14H6ZM11 14H13V12H11V14ZM16 14V12H18V14H16ZM6 16V18H8V16H6ZM13 20H11V17H13V20ZM16 18H18V16H16V18Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
