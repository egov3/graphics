import type React from "react";

export const ViewListFilled = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    data-testid="ViewListFilledIcon"
    {...props}
    fill="none"
  >
    <path d="M3 21H21V13H3V21ZM3 3V11H21V3H3Z" fill={props.fill ?? "black"} />
  </svg>
);
