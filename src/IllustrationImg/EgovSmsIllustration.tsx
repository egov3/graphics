import type React from "react";

import EgovSmsIllustrationSrc from "./EgovSmsIllustration.webp";

export const EgovSmsIllustration = (
  props: React.ImgHTMLAttributes<HTMLImageElement>,
) => (
  <img
    src={EgovSmsIllustrationSrc}
    width={364}
    height={292}
    alt=""
    data-testid="EgovSmsIllustration"
    {...props}
  />
);
