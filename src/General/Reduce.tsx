import type React from "react";

export const Reduce = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    data-testid="ReduceIcon"
    {...props}
    fill="none"
  >
    <path d="M22 11H13H11H2V13H11H13H22V11Z" fill={props.fill ?? "black"} />
  </svg>
);
