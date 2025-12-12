import type React from "react";

export const MedicineBriefcaseFilled = (
  props: React.SVGProps<SVGSVGElement>,
) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    data-testid="MedicineBriefcaseFilledIcon"
    {...props}
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.5 4H9.5C9.22385 4 9 4.22386 9 4.5V6.99996L15 6.99998V4.5C15 4.22386 14.7761 4 14.5 4ZM17 6.99998V4.5C17 3.11929 15.8807 2 14.5 2H9.5C8.1193 2 7 3.11929 7 4.5V6.99995L2 6.99993V8V21.9999L22 22V7L17 6.99998ZM12.803 11H11.203V13.6471H8.56274V15.2471H11.203V17.8939H12.803V15.2471H15.4565V13.6471H12.803V11Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
