import React from "react";
import { IIcon } from "../../types";

export const TF: React.FC<IIcon> = (attrs) => {
  return (
    <svg
      {...attrs}
      viewBox="0 0 337 333"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_484_1239)">
        <circle
          cx="169.728"
          cy="167.723"
          r="93.2584"
          transform="rotate(-40 169.728 167.723)"
          stroke="#293757"
          strokeWidth="1.04785"
        />
        <g filter="url(#filter0_d_484_1239)">
          <path
            d="M140.674 88.8284L137.008 89.4657L129.926 81.0258L128.012 86.2878L125.339 83.0835L128.55 74.3799L140.674 88.8284ZM129.104 73.9148L141.228 88.3634L142.492 84.8634L139.082 80.7987L141.846 80.3125L139.501 77.5418L136.765 78.0376L135.41 76.4235L140.924 75.4541L138.232 72.2649L129.104 73.9148Z"
            fill="#FF6F00"
            fillOpacity="0.5"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_484_1239"
          x="120.205"
          y="68.0859"
          width="29.3665"
          height="29.3665"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1.39713" />
          <feGaussianBlur stdDeviation="0.698565" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_484_1239"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_484_1239"
            result="shape"
          />
        </filter>
        <clipPath id="clip0_484_1239">
          <rect
            width="252.182"
            height="221.794"
            fill="white"
            transform="translate(0.372925 162.327) rotate(-40)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
