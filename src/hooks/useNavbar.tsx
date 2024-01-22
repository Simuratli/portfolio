import { useState } from "react";

export const useNavbar = () => {
  const [openNavbar, setOpenNavbar] = useState<boolean>(false);

  return {
    openNavbar,
    setOpenNavbar,
  };
};
