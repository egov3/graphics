import type React from "react";

export const ShieldFilled = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M8.5 21.5859L12 23.6064L15.5 21.5863C17.1702 20.6186 18.5573 19.2295 19.5224 17.5578C20.4876 15.8861 20.9971 13.9903 21 12.06V4.48732L12 0.924316L3 4.48732V12.06C3.003 13.9903 3.51253 15.8859 4.47769 17.5576C5.44284 19.2292 6.82982 20.6183 8.5 21.5859ZM13.016 10.9482L12.058 8L11.1 10.9482H8L10.508 12.7704L9.55 15.7188L12.0581 13.8966L14.5661 15.7188L13.6081 12.7704L16.1162 10.9482H13.016Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
