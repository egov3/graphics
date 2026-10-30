import type React from "react";

export const DownloadIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    data-testid="DownloadIcon"
    {...props}
    fill="none"
  >
    <path
      d="M17.707 11.2856L16.293 9.8716L13 13.1646V2.5H11V13.1646L7.707 9.8716L6.293 11.2856L12 16.9927L17.707 11.2856ZM3 19.5V21.5H21V19.5H3Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
