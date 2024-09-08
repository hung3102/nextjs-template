import * as React from "react";
import type { SVGProps } from "react";
const SvgColorRightArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={17}
    fill="none"
    {...props}
  >
    <path
      stroke="#009FB9"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.6}
      d="M3.333 8.5h9.334m0 0L8 3.833M12.667 8.5 8 13.166"
    />
  </svg>
);
export default SvgColorRightArrow;
