import React from "react";

export const OnlineRegistry = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    fill="none"
  >
    <path
      d="M3 3V21H21V3H3ZM19 19H5V5H19V19ZM16.5405 8.1155L17.0068 7.649L17.4722 8.114L18.1196 7.4666L17.6543 7.0015L18.1211 6.535L17.4711 5.8845L17.0043 6.351L16.5395 5.886L15.892 6.5334L16.3568 6.9984L15.89 7.465L16.5405 8.1155ZM15.0054 6H13.0054V8H15.0054V6ZM12.0054 7H10.0054V8H12.0054V7Z"
      fill={props.fill ?? "black"}
    />
    <path d="M8 11H16V13H8V11Z" fill={props.fill ?? "black"} />
    <path d="M8 15H16V17H8V15Z" fill={props.fill ?? "black"} />
  </svg>
);
