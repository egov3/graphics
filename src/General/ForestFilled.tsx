import type React from "react";

export const ForestFilled = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    data-testid="ForestFilledIcon"
    {...props}
    fill="none"
  >
    <path
      d="M20.362 18.149L15.189 10.157H17.927L12 1L6.073 10.157H8.811L3.638 18.149H11V22H13V18.149H20.362Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
