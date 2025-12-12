import type React from "react";

export const LicenseFilled = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    data-testid="LicenseFilledIcon"
    {...props}
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 2H23V19H16V17H21V4H3V17H14V19H1V3.00008V2Z"
      fill={props.fill ?? "black"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 6H19V8H5V6Z"
      fill={props.fill ?? "black"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 9.5H10V11.5H5V9.5Z"
      fill={props.fill ?? "black"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 13H9V15H5V13Z"
      fill={props.fill ?? "black"}
    />
    <path
      d="M15 16.5C16.6568 16.5 18 15.1568 18 13.5C18 11.8432 16.6568 10.5 15 10.5C13.3432 10.5 12 11.8432 12 13.5C12 15.1568 13.3432 16.5 15 16.5Z"
      fill={props.fill ?? "black"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 13.5C11 11.2909 12.7909 9.5 15 9.5C17.2091 9.5 19 11.2909 19 13.5C19 15.7091 17.2091 17.5 15 17.5C12.7909 17.5 11 15.7091 11 13.5ZM15 11.5C13.8954 11.5 13 12.3954 13 13.5C13 14.6046 13.8954 15.5 15 15.5C16.1046 15.5 17 14.6046 17 13.5C17 12.3954 16.1046 11.5 15 11.5Z"
      fill={props.fill ?? "black"}
    />
    <path
      d="M15 20L17 21V15.7361C17 15.7361 16.4297 16.5 15 16.5C13.5703 16.5 13 15.75 13 15.75V21L15 20Z"
      fill={props.fill ?? "black"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 12.725V22.618L15 21.118L12 22.618V12.7828L13.778 15.1211C13.7812 15.1243 13.7857 15.1287 13.7915 15.134C13.8195 15.16 13.8771 15.2083 13.9679 15.2613C14.1427 15.3633 14.4697 15.5 15 15.5C15.5266 15.5 15.8511 15.3619 16.0252 15.2584C16.1157 15.2046 16.1735 15.1553 16.2018 15.1286C16.208 15.1227 16.2128 15.118 16.2161 15.1145L18 12.725ZM14 17.3924V19.382L15 18.882L16 19.382V17.3909C15.7042 17.4588 15.3713 17.5 15 17.5C14.6286 17.5 14.2957 17.4593 14 17.3924Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
