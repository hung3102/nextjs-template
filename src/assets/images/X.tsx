import * as React from "react";
import type { SVGProps } from "react";
const SvgX = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#303030"
      d="M14.284 10.164 23.212 0h-2.115l-7.756 8.823L7.151 0H.01l9.363 13.343L.01 24h2.115l8.185-9.32L16.85 24h7.141M2.888 1.562h3.25l14.958 20.953h-3.25"
    />
  </svg>
);
export default SvgX;
