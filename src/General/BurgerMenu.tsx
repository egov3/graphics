import type React from "react";

export const BurgerMenu = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    data-testid="BurgerMenuIcon"
    {...props}
    fill="none"
  >
    <path
      d="M5 5V7H19V5H5ZM5 13H19V11H5V13ZM5 19H19V17H5V19Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
