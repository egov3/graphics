import React from "react";

export const Card = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    fill="none"
  >
    <path
      d="M19 4H5C4.20435 4 3.44129 4.31607 2.87868 4.87868C2.31607 5.44129 2 6.20435 2 7V17C2 17.7956 2.31607 18.5587 2.87868 19.1213C3.44129 19.6839 4.20435 20 5 20H19C19.7956 20 20.5587 19.6839 21.1213 19.1213C21.6839 18.5587 22 17.7956 22 17V7C22 6.20435 21.6839 5.44129 21.1213 4.87868C20.5587 4.31607 19.7956 4 19 4ZM20 17C19.9997 17.2651 19.8943 17.5193 19.7068 17.7068C19.5193 17.8943 19.2651 17.9997 19 18H5C4.73487 17.9997 4.48069 17.8943 4.29321 17.7068C4.10574 17.5193 4.00029 17.2651 4 17V11H20V17ZM20 9H4V7C4.00029 6.73487 4.10574 6.48069 4.29321 6.29321C4.48069 6.10574 4.73487 6.00029 5 6H19C19.2651 6.00029 19.5193 6.10574 19.7068 6.29321C19.8943 6.48069 19.9997 6.73487 20 7V9Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
