import type React from "react";

export const OpenInNew = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    data-testid="OpenInNewIcon"
    {...props}
    fill="none"
  >
    <path
      d="M19 19H5V5H9V3H3V21H21V15H19V19ZM12 3V5H17.5864L9.293 13.293L10.707 14.707L19 6.4145V12H21V3H12Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
