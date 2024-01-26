import React from "react";

export interface LinePropTypes {
  className?: string;
}
const Line = ({ className }: LinePropTypes) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="358"
      height="15"
      viewBox="0 0 358 15"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M355.698 8.90703C285.182 1.05767 213.473 5.39925 142.78 3.98596C96.0339 3.04038 49.2843 0.762796 2.57201 0.000228063C1.17151 -0.0201071 0.0196797 1.32197 0.000228214 3.00979C-0.0183775 4.69761 1.10303 6.08044 2.50269 6.10077C49.2099 6.86334 95.9544 9.14092 142.695 10.0865C213.262 11.4998 284.835 7.14802 355.224 14.9872C356.619 15.1397 357.854 13.9095 357.989 12.2318C358.116 10.5542 357.085 9.06971 355.698 8.90703Z"
        fill="black"
      />
    </svg>
  );
};

export default Line;
