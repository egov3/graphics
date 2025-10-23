import type React from "react";

export const ShieldSuccessFilled = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M3 4.48732L12 0.924316L21 4.48732V12.06C20.997 13.9903 20.4875 15.8859 19.5223 17.5576C18.5572 19.2292 17.1702 20.6183 15.5 21.5859L12 23.6064L8.5 21.5863C6.82976 20.6186 5.44275 19.2295 4.47759 17.5578C3.51243 15.8861 3.00293 13.9903 3 12.06V4.48732ZM8.06451 11.3231L9.26561 10.1209L11.3975 12.2523L14.9219 8.72931L16.123 9.93151L11.3975 14.6566L8.06451 11.3231Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
