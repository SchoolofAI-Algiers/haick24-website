import React from "react";

const Polygon = () => {
  return (
    <svg
      width="540"
      height="591"
      viewBox="0 0 540 591"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_bd_1029_520)">
        <path
          d="M249.733 11.9354C261.871 5.14111 276.668 5.1411 288.806 11.9354L508.306 134.796C520.943 141.869 528.77 155.219 528.77 169.7V413.299C528.77 427.781 520.943 441.131 508.307 448.204L288.807 571.065C276.668 577.859 261.871 577.859 249.733 571.065L30.2326 448.204C17.5963 441.131 9.76953 427.781 9.76953 413.3V169.7C9.76953 155.219 17.5963 141.869 30.2326 134.796L249.733 11.9354Z"
          fill="#A5A5A5"
          fillOpacity="0.2"
          shapeRendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_bd_1029_520"
          x="-30.2305"
          y="-33.1602"
          width="599"
          height="649.32"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="20" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_1029_520"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="1" dy="4" />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_backgroundBlur_1029_520"
            result="effect2_dropShadow_1029_520"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_1029_520"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Polygon;
