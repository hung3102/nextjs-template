import * as React from "react";
import type { SVGProps } from "react";
const SvgTrackApplication = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={180}
    height={180}
    fill="none"
    {...props}
  >
    <path
      fill="url(#track-application_svg__a)"
      d="M21.989 115.779A10 10 0 0 1 31.054 110h128.499c7.252 0 12.093 7.477 9.124 14.093l-14.804 33a10 10 0 0 1-9.124 5.907H15.687c-7.312 0-12.152-7.592-9.065-14.221z"
    />
    <path
      fill="#6188FF"
      d="M129.875 79v36.25a7.25 7.25 0 0 1-7.25 7.25H53.75a7.25 7.25 0 0 1-7.25-7.25V46.375a7.25 7.25 0 0 1 7.25-7.25H90a3.625 3.625 0 1 1 0 7.25H53.75v68.875h68.875V79a3.625 3.625 0 0 1 7.25 0m7.25-30.812a16.32 16.32 0 0 1-10.07 15.07 16.314 16.314 0 0 1-21.313-21.313 16.305 16.305 0 0 1 15.07-10.07 16.31 16.31 0 0 1 16.313 16.313m-7.25 0a9.066 9.066 0 0 0-15.471-6.408 9.07 9.07 0 0 0-1.964 9.876 9.06 9.06 0 0 0 8.372 5.594 9.065 9.065 0 0 0 9.063-9.062"
    />
    <path
      fill="#2AFADF"
      d="M129.875 48.188a9.066 9.066 0 0 0-15.471-6.408 9.07 9.07 0 0 0-1.964 9.876 9.06 9.06 0 0 0 8.372 5.594 9.065 9.065 0 0 0 9.063-9.062"
    />
    <defs>
      <linearGradient
        id="track-application_svg__a"
        x1={67.474}
        x2={67.474}
        y1={110}
        y2={163}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#C8E3FE" />
        <stop offset={0.965} stopColor="#93F6E6" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgTrackApplication;
