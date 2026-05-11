"use client";

import { useState } from "react";
import { IconSwitchOn, IconSwitchOff } from "@/assets/icons";

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

function LightSwitch() {
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
      className="w-16 h-16 rounded-full bg-white border border-gray-200 shadow-md hover:scale-105 active:scale-95 transition-transform flex items-center justify-center"
    >
      {on ? (
        <IconSwitchOn className="w-8 h-10" />
      ) : (
        <IconSwitchOff className="w-8 h-10" />
      )}
    </button>
  );
}

export default function FloatingOrb() {
  return <LightSwitch />;
}
