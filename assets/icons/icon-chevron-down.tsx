import type { SVGProps } from "react";

export default function IconChevronDown({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}
