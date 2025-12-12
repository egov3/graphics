import type React from "react";

export const ServerError = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="160"
    height="160"
    viewBox="0 0 160 160"
    fill="none"
    data-testid="ServerErrorIllustration"
    {...props}
  >
    <path
      d="M127.399 66.5644C127.703 64.9464 127.862 63.277 127.862 61.57C127.862 46.8958 116.122 35 101.641 35C92.7812 35 84.9473 39.4534 80.2014 46.272C75.6447 42.3956 69.7677 40.061 63.3528 40.061C49.0109 40.061 37.3585 51.7293 37.1362 66.2089H37.133C21.0431 66.2089 8 79.4263 8 95.7312C8 112.036 21.0431 125.254 37.133 125.254H122.867C138.957 125.254 152 112.036 152 95.7312C152 80.9883 141.336 68.7703 127.399 66.5644Z"
      fill="#CCD1D7"
    />
    <path d="M41.5 92.5H65M93 92.5H117" stroke="black" strokeWidth="3" />
    <rect x="44" y="94" width="18" height="31" fill="#758393" />
    <rect x="96" y="94" width="18" height="31" fill="#758393" />
  </svg>
);
