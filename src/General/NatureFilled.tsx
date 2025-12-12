import type React from "react";

export const NatureFilled = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    data-testid="NatureFilledIcon"
    {...props}
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.95941 22H22.0011V20.9443C22.0011 18.2091 19.7838 15.9918 17.0485 15.9918C16.9808 15.9918 16.9134 15.9931 16.8463 15.9959C15.7405 14.5299 13.9813 14 12 14C10.0991 14 8.10039 14.5242 7.07643 16.0319C6.40156 16.066 5.6868 16.2013 5.01317 16.4731C4.25718 16.7782 3.51754 17.2698 2.95544 18.0206C2.38863 18.7776 2.04701 19.7388 2.00189 20.9035L1.95941 22Z"
      fill={props.fill ?? "black"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 11C11.0546 8.81959 7.5 5.5 6 6C5.5 7.5 8.55457 11.3196 11 11ZM4.37636 5.28247C4.37636 9.49646 7.78712 12.9072 12.0011 12.9072H13V12C13 7.78602 9.64601 4.2268 5.43203 4.2268H4.37636V5.28247Z"
      fill={props.fill ?? "black"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 11L12.0011 10.6804C16.2151 10.6804 19.6258 7.26965 19.6258 3.05567V2H18.5702C14.3562 2 11 5.41076 11 9.62474V11ZM18 3.5C16 3.5 12.5 6.5 12.5 9C16 8.5 18 5.5 18 3.5Z"
      fill={props.fill ?? "black"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13 14.635V9.62474H11V14.635H13Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
