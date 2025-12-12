import type React from "react";

export const MessageListFilled = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    data-testid="MessageListFilledIcon"
    {...props}
    fill="none"
  >
    <path
      d="M19 2H5C4.20435 2 3.44129 2.31607 2.87868 2.87868C2.31607 3.44129 2 4.20435 2 5V21.5858C2 22.4767 3.07714 22.9229 3.70711 22.2929L8 18H19C19.7956 18 20.5587 17.6839 21.1213 17.1213C21.6839 16.5587 22 15.7956 22 15V5C22 4.20435 21.6839 3.44129 21.1213 2.87868C20.5587 2.31607 19.7956 2 19 2ZM13 13H8V11H13V13ZM16 9H8V7H16V9Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
