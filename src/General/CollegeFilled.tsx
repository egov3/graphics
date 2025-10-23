import type React from "react";

export const CollegeFilled = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M22 8V21.0001H2V8H6V10L12 13L18 10V8H22ZM12 16V18H6V16L12 16ZM9 13L6 13V15H9V13ZM16 18C17.1046 18 18 17.1046 18 16C18 14.8954 17.1046 14 16 14C14.8954 14 14 14.8954 14 16C14 17.1046 14.8954 18 16 18Z"
      fill={props.fill ?? "black"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 11L16 8.99995V4.99994H14H10H8V8.99995L12 11Z"
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
