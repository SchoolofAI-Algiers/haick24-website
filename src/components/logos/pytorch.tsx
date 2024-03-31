import React from "react";
import { IIcon } from "../../types";

export const Pytorch: React.FC<IIcon> = (attrs) => {
  return (
    <svg
      {...attrs}
      viewBox="0 0 342 319"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_484_1227)">
        <circle
          cx="161.768"
          cy="156.699"
          r="102.153"
          transform="rotate(20 161.768 156.699)"
          stroke="#293757"
          strokeWidth="0.810734"
        />
        <g filter="url(#filter0_i_484_1227)">
          <path
            d="M258.017 110.157L256.448 110.888C257.649 113.463 256.543 116.5 253.978 117.675C251.404 118.876 248.366 117.77 247.191 115.205C245.991 112.631 247.096 109.594 249.661 108.418L253.753 106.51L254.332 106.24L255.156 103.978L248.984 106.855C245.558 108.453 244.079 112.515 245.673 115.955C247.266 119.394 251.333 120.86 254.722 119.248C258.153 117.638 259.622 113.601 258.017 110.157Z"
            fill="#EE4C2C"
            fillOpacity="0.5"
          />
          <path
            d="M257.001 108.541C257.178 108.082 256.949 107.566 256.49 107.389C256.03 107.212 255.515 107.441 255.338 107.901C255.161 108.36 255.39 108.876 255.849 109.052C256.308 109.229 256.824 109 257.001 108.541Z"
            fill="#EE4C2C"
            fillOpacity="0.5"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_i_484_1227"
          x="241.425"
          y="100.816"
          width="21.8218"
          height="22.9959"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1.17417" />
          <feGaussianBlur stdDeviation="0.587084" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_484_1227"
          />
        </filter>
        <clipPath id="clip0_484_1227">
          <rect
            width="276.19"
            height="238.086"
            fill="white"
            transform="translate(81.4769 0.793213) rotate(20)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
