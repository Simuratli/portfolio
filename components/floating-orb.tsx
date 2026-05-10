"use client";

import { useState } from "react";

function playClick() {
  try {
    const ctx = new AudioContext();
    const sr = ctx.sampleRate;

    // Two-stage mechanical click: sharp attack snap + body thud
    const snapDur = 0.012;
    const thudDur = 0.06;
    const totalDur = snapDur + thudDur;
    const buf = ctx.createBuffer(1, Math.ceil(sr * totalDur), sr);
    const data = buf.getChannelData(0);

    for (let i = 0; i < data.length; i++) {
      const t = i / sr;
      const noise = Math.random() * 2 - 1;

      if (t < snapDur) {
        // Sharp high-freq snap
        const env = Math.pow(1 - t / snapDur, 1.5);
        data[i] = noise * env * 0.9;
      } else {
        // Low thud / body resonance
        const t2 = t - snapDur;
        const env = Math.pow(1 - t2 / thudDur, 2.5);
        const tone =
          Math.sin(2 * Math.PI * 180 * t2) * 0.5 +
          Math.sin(2 * Math.PI * 90 * t2) * 0.3;
        data[i] = (noise * 0.15 + tone) * env * 0.7;
      }
    }

    // High-pass the snap, low-pass the thud via a biquad
    const src = ctx.createBufferSource();
    src.buffer = buf;

    const hipass = ctx.createBiquadFilter();
    hipass.type = "highpass";
    hipass.frequency.value = 80;

    const gain = ctx.createGain();
    gain.gain.value = 1.4;

    src.connect(hipass);
    hipass.connect(gain);
    gain.connect(ctx.destination);
    src.start();
  } catch {
    // AudioContext not available
  }
}

export default function LightSwitch() {
  const [on, setOn] = useState(false);

  const toggle = () => {
    playClick();
    setOn((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("fun-mode", next);
      return next;
    });
  };

  return (
    <button
      onClick={toggle}
      aria-label={on ? "Switch off" : "Switch on"}
      className="fixed bottom-6 right-6 z-[100] w-16 h-16 rounded-full bg-white border border-gray-200 shadow-md hover:scale-105 active:scale-95 transition-transform flex items-center justify-center"
    >
      {on ? (
        /* Switch ON — rocker flipped UP, paddle extends upper-left */
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 150"
          className="w-8 h-10"
          fill="none"
          stroke="#111827"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
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
          {/* Paddle top face (thin rect showing thickness, going upper-left) */}
          <rect x="4" y="30" width="62" height="12" rx="3" fill="white" />
          {/* Paddle front face (parallelogram, angled) */}
          <polygon points="4,42 66,42 72,60 10,60" fill="white" />
          {/* Pivot cylinder top arc */}
          <path
            d="M 22,60 C 22,52 78,52 78,60"
            fill="white"
            stroke="#111827"
            strokeWidth="4.5"
          />
          {/* Pivot body */}
          <rect x="22" y="60" width="56" height="22" rx="8" fill="white" />
          {/* Bottom bar */}
          <rect x="28" y="88" width="44" height="14" rx="3" fill="white" />
        </svg>
      ) : (
        /* Switch OFF — rocker flipped DOWN, paddle inside plate */
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 150"
          className="w-8 h-10"
          fill="none"
          stroke="#111827"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
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
          <path
            d="M 22,84 C 22,92 78,92 78,84"
            fill="white"
            stroke="#111827"
            strokeWidth="4.5"
          />
          {/* Paddle front face (parallelogram, angled DOWN) */}
          <polygon points="10,86 72,86 66,104 4,104" fill="white" />
          {/* Paddle top face (thin rect showing thickness) */}
          <rect x="4" y="104" width="62" height="12" rx="3" fill="white" />
        </svg>
      )}
    </button>
  );
}
