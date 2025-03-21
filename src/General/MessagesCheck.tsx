import React from "react";

export const MessagesCheck = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...props}
    fill="none"
  >
    <path
      d="M20.9219 15.0293L17.3975 18.5522L15.2656 16.4209L14.0645 17.623L17.3975 20.9565L22.123 16.2314L20.9219 15.0293ZM19 11H5V13H19V11ZM19 5H5V7H19V5ZM5 19H12V17H5V19Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
