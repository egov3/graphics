import type React from "react";

export const MedicineFilled = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    data-testid="MedicineFilledIcon"
    {...props}
    fill="none"
  >
    <path
      d="M21 9H15V3H9V9H3V15H9V21H15V15H21V9Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
