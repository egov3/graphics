import React from "react";

export const PensionFilled = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    fill="none"
  >
    <path
      d="M21.1569 16.5657C20.0423 17.5284 18.7837 18.3105 17.4269 18.8836L15.9775 14H19V11.6C19 11.1757 18.8314 10.7687 18.5314 10.4686C18.2313 10.1686 17.8243 10 17.4 10H15.9894L15.9787 7.9841C15.9745 7.19121 15.6566 6.43223 15.0944 5.87305C14.5323 5.31388 13.7716 4.99999 12.9787 5H7.82693L7.07293 2.1859C6.98177 1.84568 6.7809 1.54505 6.50146 1.33063C6.22203 1.11622 5.87965 0.999997 5.52743 1H3.43743L5.73443 14H8.14503L6.80883 18.9865C5.36209 18.4045 4.02199 17.5865 2.84313 16.5657L1.53003 18.0806C4.43258 20.608 8.15136 22.0001 12 22.0001C15.8487 22.0001 19.5675 20.608 22.47 18.0806L21.1569 16.5657ZM12.9787 6.8C13.2956 6.80068 13.5995 6.92645 13.8242 7.14996C14.0489 7.37348 14.1763 7.67666 14.1787 7.9936L14.1894 10H9.16673L8.30933 6.8H12.9787ZM8.52173 19.5484L10.0084 14H14.101L15.731 19.4892C13.376 20.1496 10.8872 20.17 8.52173 19.5484Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
