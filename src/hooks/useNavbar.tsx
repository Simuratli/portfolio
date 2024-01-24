import { useEffect, useState } from "react";

export const useNavbar = () => {
  const [openNavbar, setOpenNavbar] = useState<boolean>(false);

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
  };
};
