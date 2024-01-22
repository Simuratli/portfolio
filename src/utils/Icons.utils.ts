export const sizeHandlerForStarIcon = (size: number | undefined) => {
  if (typeof size === "number") {
    return size;
  } else {
    return "initial";
  }
};
