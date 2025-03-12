import React from "react";

export const HelpCenterArticleFilled = (
  props: React.SVGProps<SVGSVGElement>
) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    fill="none"
  >
    <path
      d="M1 17H11V7H1V17ZM14 7V9H23V7H14ZM14 13H23V11H14V13ZM14 17H23V15H14V17Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
