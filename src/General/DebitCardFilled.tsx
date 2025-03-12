import React from "react";

export const DebitCardFilled = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M4.5 4H19.5C20.163 4 20.7989 4.26339 21.2678 4.73223C21.7366 5.20107 22 5.83696 22 6.5V17.5C22 18.163 21.7366 18.7989 21.2678 19.2678C20.7989 19.7366 20.163 20 19.5 20H4.5C3.83696 20 3.20107 19.7366 2.73223 19.2678C2.26339 18.7989 2 18.163 2 17.5V6.5C2 5.83696 2.26339 5.20107 2.73223 4.73223C3.20107 4.26339 3.83696 4 4.5 4ZM4 11H7V8H4V11ZM17 11H20V8H17V11ZM11 16H13V12.5H15V10.6471H9V12.5H11V16ZM15 8.5H9V9.90196H15V8.5Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
