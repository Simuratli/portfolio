import { useEffect, useState } from "react";
import { MotionValue } from "framer-motion";

export const useNavbar = () => {
  const [openNavbar, setOpenNavbar] = useState<boolean>(false);

  const mapRange = (
    inputLower: number,
    inputUpper: number,
    outputLower: number,
    outputUpper: number,
  ) => {
    const INPUT_RANGE = inputUpper - inputLower;
    const OUTPUT_RANGE = outputUpper - outputLower;
    return (value: number) =>
      outputLower + (((value - inputLower) / INPUT_RANGE) * OUTPUT_RANGE || 0);
  };

  const setTransform = (
    item: HTMLElement & EventTarget,
    event: React.PointerEvent,
    x: MotionValue,
    y: MotionValue,
  ) => {
    console.log(item, event, x, y);
    const bounds = item.getBoundingClientRect();
    const relativeX = event.clientX - bounds.left;
    const relativeY = event.clientY - bounds.top;
    const xRange = mapRange(0, bounds.width, -1, 1)(relativeX);
    const yRange = mapRange(0, bounds.height, -1, 1)(relativeY);

    x.set(xRange * 10);
    y.set(yRange * 10);
  };

  const NavURLs = [
    {
      text: "About",
      link: "/about",
    },
    {
      text: "Portfolio",
      link: "/portfolio",
    },
    {
      text: "Blog",
      link: "/blog",
    },
  ];

  useEffect(() => {
    if (openNavbar) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
    }
  }, [openNavbar]);

  return {
    openNavbar,
    setOpenNavbar,
    NavURLs,
    setTransform,
  };
};
