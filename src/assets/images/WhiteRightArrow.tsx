import * as React from "react";
import type { SVGProps } from "react";
const SvgWhiteRightArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={11}
    height={12}
    fill="none"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.6}
      d="M.833 6h9.334m0 0L5.5 1.333M10.167 6 5.5 10.666"
    />
  </svg>
);
export default SvgWhiteRightArrow;
