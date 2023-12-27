import React from "react";

const Lock = ({ className, color }: { className?: string; color?: string }) => {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={className}
    >
      <path
        d="M30 4C22.2913 4 16 10.2913 16 18V22H12C9.79 22 8 23.79 8 26V50C8 52.21 9.79 54 12 54H48C50.21 54 52 52.21 52 50V26C52 23.79 50.21 22 48 22H44V18C44 10.5432 38.0732 4.53713 30.7109 4.14453C30.4847 4.05342 30.2438 4.00444 30 4ZM30 8C35.5473 8 40 12.4527 40 18V22H20V18C20 12.4527 24.4527 8 30 8Z"
        fill={color || "#6F62AF"}
      />
      <rect x="20" y="27" width="20" height="20" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_14_9" transform="scale(0.01)" />
        </pattern>
        <image
          id="image0_14_9"
          width="100"
          height="100"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default Lock;
