import type React from "react";

export const MailReadFilledIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    data-testid="MailReadFilledIcon"
    {...props}
    fill="none"
  >
    <path
      d="M12 1.78894L2 7.56244V20.9999H22V7.56244L12 1.78894ZM12 12.604L4.0254 7.99994H19.9747L12 12.604Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
