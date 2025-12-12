import type React from "react";

export const ApostilleFilled = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    data-testid="ApostilleFilledIcon"
    {...props}
    fill="none"
  >
    <path
      d="M2 4V20H22V4H2ZM10 17H7V15H10V17ZM17 17H12V15H17V17Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
