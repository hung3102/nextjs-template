import * as React from "react";
import type { SVGProps } from "react";
const SvgBlackRightArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={16}
    fill="none"
    {...props}
  >
    <path
      stroke="#1E1E1E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.6}
      d="M3.667 8H13m0 0L8.334 3.333M13 8l-4.666 4.666"
    />
  </svg>
);
export default SvgBlackRightArrow;
