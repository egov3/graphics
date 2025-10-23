import type React from "react";

export const College = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    fill="none"
  >
    <path
      d="M18 15C18 16.1046 17.1046 17 16 17C14.8954 17 14 16.1046 14 15C14 13.8954 14.8954 13 16 13C17.1046 13 18 13.8954 18 15Z"
      fill={props.fill ?? "black"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 12L6 12V14H9V12Z"
      fill={props.fill ?? "black"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 15L6 15V17H12V15Z"
      fill={props.fill ?? "black"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 21.0001H22V8H16V9L14 10H20V19H4V10H10L8 9V8H2V21.0001Z"
      fill={props.fill ?? "black"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 11L14 10L16 9L16 4.99994H14V7.99995L12 8.99995L10 7.99995V4.99994H8L8 9L10 10L12 11Z"
      fill={props.fill ?? "black"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 3H4L4 4.99994H20L20 3Z"
      fill={props.fill ?? "black"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 7V4.99992H17.026V7H19Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
