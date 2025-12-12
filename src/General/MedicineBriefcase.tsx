import type React from "react";

export const MedicineBriefcase = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    data-testid="MedicineBriefcaseIcon"
    {...props}
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 6.99993L22 7V22L2 21.9999V8V6.99993ZM4 8.99993V19.9999L20 20V9L4 8.99993Z"
      fill={props.fill ?? "black"}
    />
    <path
      d="M9.5 4H14.5V2H9.5V4ZM15 4.5V8H17V4.5H15ZM9 8V4.5H7V8H9ZM14.5 4C14.7761 4 15 4.22386 15 4.5H17C17 3.11929 15.8807 2 14.5 2V4ZM9.5 2C8.1193 2 7 3.11929 7 4.5H9C9 4.22386 9.22385 4 9.5 4V2Z"
      fill={props.fill ?? "black"}
    />
    <path
      d="M11.203 11H12.803V13.6471H15.4566V15.2471H12.803V17.8939H11.203V15.2471H8.56276V13.6471H11.203V11Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
