import type { SVGProps } from "react";

export default function IconSwitchOff({ className, ...props }: SVGProps<SVGSVGElement>) {
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
      {/* Top bar */}
      <rect x="28" y="44" width="44" height="14" rx="3" fill="white" />
      {/* Pivot body */}
      <rect x="22" y="62" width="56" height="22" rx="8" fill="white" />
      {/* Pivot cylinder bottom arc */}
      <path d="M 22,84 C 22,92 78,92 78,84" fill="white" stroke="#111827" strokeWidth="4.5" />
      {/* Paddle front face */}
      <polygon points="10,86 72,86 66,104 4,104" fill="white" />
      {/* Paddle top face */}
      <rect x="4" y="104" width="62" height="12" rx="3" fill="white" />
    </svg>
  );
}
