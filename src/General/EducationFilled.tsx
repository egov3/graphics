import React from "react";

export const EducationFilled = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    fill="none"
  >
    <path
      d="M12 18.272L10.9966 17.69L5 14.212V16.3094C5 16.836 5.13861 17.3533 5.40192 17.8094C5.66522 18.2655 6.04394 18.6442 6.5 18.9075L12 22.0829L17.5 18.9075C17.9561 18.6442 18.3348 18.2655 18.5981 17.8094C18.8614 17.3533 19 16.836 19 16.3094V14.212L13.0034 17.69L12 18.272ZM12 2.03998L0 8.99998L12 15.96L22 10.16V16H24V8.99998L12 2.03998Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
