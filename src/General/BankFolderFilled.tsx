import type React from "react";

export const BankFolderFilled = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M22 21V5H9.958L7.958 3H2V21H22ZM11 17H13V13.5H15V11.6471H9V13.5H11V17ZM15 9.5H9V10.902H15V9.5Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
