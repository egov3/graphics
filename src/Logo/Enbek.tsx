import type React from "react";

export const Enbek = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    data-testid="EnbekIcon"
    {...props}
    fill="none"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15.1113 17.7778C20.0204 17.7778 24 13.7981 24 8.88891C24 3.97969 20.0204 0 15.1113 0C10.2019 0 6.22222 3.97969 6.22222 8.88891H15.1113V17.7778Z"
      fill="url(#paint0_radial_4418_4198)"
    />
    <path
      d="M12.3873 16.0921C12.1977 14.5032 11.6695 13.391 11.0356 12.6474C10.9455 12.5409 10.8492 12.4409 10.7498 12.3423C10.714 12.3058 10.6767 12.2693 10.641 12.2359L10.5773 12.1755C10.3651 11.9811 10.1376 11.8052 9.89675 11.6496C8.84693 10.9867 7.63309 10.6459 6.3995 10.6676C2.63189 10.6645 0 13.4259 0 17.3505C0 21.2751 2.6148 24 6.40261 24C8.32134 24 9.9869 23.3056 11.1584 22.0377L9.51144 20.3011C8.84805 21.1861 7.74499 21.7311 6.47095 21.7311C4.38131 21.7311 2.66607 20.2725 2.47963 18.3277H12.423C12.4607 17.5825 12.4487 16.8356 12.3873 16.0921ZM6.32806 12.9397C7.07694 12.9277 7.81401 13.1314 8.45497 13.5276C8.95466 13.8477 9.34836 14.3145 9.5845 14.867C9.77672 15.3217 9.89886 15.8041 9.94651 16.297H2.48895C2.71734 14.2935 4.26323 12.9397 6.33427 12.9397H6.32806Z"
      fill="black"
    />
    <defs>
      <radialGradient
        id="paint0_radial_4418_4198"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(12.0003 12) rotate(90) scale(12.0001 12)"
      >
        <stop stop-color="#FFBC7F" />
        <stop offset="0.40109" stop-color="#FFBD81" />
        <stop offset="0.760417" stop-color="#FF9D40" />
        <stop offset="0.9999" stop-color="#FF7E00" />
      </radialGradient>
    </defs>
  </svg>
);
