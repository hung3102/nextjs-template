import * as React from "react";
import type { SVGProps } from "react";
const SvgSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <path
      fill="#009FB9"
      d="M0 8a8 8 0 0 1 8-8h24a8 8 0 0 1 8 8v24a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8z"
    />
    <path
      stroke="#F5F5F5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.6}
      d="m26 26-2.9-2.9m1.567-3.767a5.333 5.333 0 1 1-10.667 0 5.333 5.333 0 0 1 10.667 0"
    />
  </svg>
);
export default SvgSearch;
