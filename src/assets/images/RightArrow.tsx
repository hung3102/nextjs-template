import * as React from "react";
import type { SVGProps } from "react";
const SvgRightArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      stroke="#0862BB"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.6}
      d="M3.333 8h9.334m0 0L8 3.333M12.667 8 8 12.667"
    />
  </svg>
);
export default SvgRightArrow;
