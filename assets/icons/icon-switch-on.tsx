import type { SVGProps } from "react";

export default function IconSwitchOn({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 150"
      className={className}
      fill="none"
      stroke="#111827"
      strokeWidth="4.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Plate */}
      <rect x="18" y="6" width="64" height="138" rx="12" fill="white" />
      {/* Top-right screw */}
      <circle cx="72" cy="22" r="6" />
      {/* Bottom screw */}
      <circle cx="50" cy="132" r="6" />
      {/* Vertical rail right side */}
      <line x1="72" y1="38" x2="72" y2="108" />
      {/* Mechanism top border */}
      <line x1="18" y1="38" x2="72" y2="38" />
      {/* Mechanism bottom border */}
      <line x1="18" y1="108" x2="72" y2="108" />
      {/* Paddle top face */}
      <rect x="4" y="30" width="62" height="12" rx="3" fill="white" />
      {/* Paddle front face */}
      <polygon points="4,42 66,42 72,60 10,60" fill="white" />
      {/* Pivot cylinder top arc */}
      <path d="M 22,60 C 22,52 78,52 78,60" fill="white" stroke="#111827" strokeWidth="4.5" />
      {/* Pivot body */}
      <rect x="22" y="60" width="56" height="22" rx="8" fill="white" />
      {/* Bottom bar */}
      <rect x="28" y="88" width="44" height="14" rx="3" fill="white" />
    </svg>
  );
}
