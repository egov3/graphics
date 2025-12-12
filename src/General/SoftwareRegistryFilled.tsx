import type React from "react";

export const SoftwareRegistryFilled = (
  props: React.SVGProps<SVGSVGElement>,
) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    data-testid="SoftwareRegistryFilledIcon"
    {...props}
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 3H20C20.5304 3 21.0391 3.21071 21.4142 3.58579C21.7893 3.96086 22 4.46957 22 5V14C22 14.5304 21.7893 15.0391 21.4142 15.4142C21.0391 15.7893 20.5304 16 20 16H4C3.46957 16 2.96086 15.7893 2.58579 15.4142C2.21071 15.0391 2 14.5304 2 14V5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3ZM16 6H8V8H16V6ZM16 10H8V12H16V10Z"
      fill={props.fill ?? "black"}
    />
    <path d="M9 17H15V19.1H17V21H7V19.1H9V17Z" fill={props.fill ?? "black"} />
  </svg>
);
