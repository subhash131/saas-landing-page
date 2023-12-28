import React from "react";

const Thunder = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="#000000"
      className={className}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <defs>
          <polygon
            id="thunder-a"
            points="2.977 8.161 8.269 9.241 .218 18.519 1.882 19.604 12.128 8.161 5.893 6.809 8.821 .998 7.387 .185"
          ></polygon>
          <path
            id="thunder-c"
            d="M10.2577032,5.88540233 L13.3683613,6.4682972 C14.894984,6.75436548 15.5271239,8.59550311 14.4981974,9.75899885 L5.15432684,20.3249168 C3.62851509,22.0502834 0.875362777,20.253925 1.83997631,18.1623916 L4.9166534,11.4913543 L2.63023839,11.061225 C1.27422934,10.8061273 0.577759703,9.28698125 1.26946216,8.09308716 L5.3804761,0.997384038 C5.7381351,0.380056504 6.3975623,0 7.11101395,0 L10.1949866,0 C11.7353835,0 12.697534,1.66821829 11.9261411,3.00155082 L10.2577032,5.88540233 Z M10.1949866,2 L7.11101395,2 L3,9.09570312 L7.80692226,10 L3.65612945,19 L13,8.43408203 L7.11101395,7.33056641 L10.1949866,2 Z"
          ></path>
        </defs>
        <g fill="none" fillRule="evenodd" transform="translate(4 2)">
          <g transform="translate(2)">
            <mask id="thunder-b" fill="#ffffff">
              <use xlinkHref="#thunder-a"></use>
            </mask>
            <use fill="#D8D8D8" xlinkHref="#thunder-a"></use>
            <g fill="#ffffff" mask="url(#thunder-b)">
              <rect width="24" height="24" transform="translate(-6 -2)"></rect>
            </g>
          </g>
          <mask id="thunder-d" fill="#ffffff">
            <use xlinkHref="#thunder-c"></use>
          </mask>
          <use fill="#ffffff" fillRule="nonzero" xlinkHref="#thunder-c"></use>
          <g fill="#ffffff" mask="url(#thunder-d)">
            <rect width="24" height="24" transform="translate(-4 -2)"></rect>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Thunder;
