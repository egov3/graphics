import type React from "react";

export const Book = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    data-testid="BookIcon"
    {...props}
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.5 2.5H8C9.6356 2.5 11.0878 3.28534 12 4.49951C12.9122 3.28534 14.3644 2.5 16 2.5H22.5V19H15C13.8954 19 13 19.8954 13 21H11C11 19.8954 10.1046 19 9 19H1.5V2.5ZM11 17.5351C10.4117 17.1948 9.72857 17 9 17H3.5V4.5H8C9.65687 4.5 11 5.84313 11 7.5V17.5351ZM13 7.5V17.5351C13.5883 17.1948 14.2714 17 15 17H20.5V4.5H16C14.3431 4.5 13 5.84313 13 7.5Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
