import type React from "react";

export const RealEstate = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    fill="none"
  >
    <path
      d="M12 2.80371L3 7.99991V20.9999H21V7.99991L12 2.80371ZM19 18.9999H5V9.15461L12 5.11311L19 9.15461V18.9999Z"
      fill={props.fill ?? "black"}
    />
    <path
      d="M13 17H11V13.5H9V11.6471H15V13.5H13V17ZM9 9.5H15V10.902H9V9.5Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
