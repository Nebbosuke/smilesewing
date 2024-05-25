import { useState, useLayoutEffect } from "react";

const useWindowSize = (s: number): boolean => {
  const [size, setSize] = useState(0);
  useLayoutEffect(() => {
    const updateSize = (): void => {
      setSize(window.innerWidth);
    };

    window.addEventListener("resize", updateSize);
    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, []);
  if (size > s) {
    return true;
  }
  return false;
};

export default useWindowSize;
