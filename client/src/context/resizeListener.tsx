import React, { createContext, useEffect } from "react";
import { CustomProvider } from "@types/customProvider";

const ResizeListenerContext = createContext<{
  width: number;
  height: number;
} | null>(null);

export const ResizeListenerProvider = ({ children }: CustomProvider) => {
  const [windowSize, setWindowSize] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ResizeListenerContext.Provider value={windowSize}>
      {children}
    </ResizeListenerContext.Provider>
  );
};

export const useResizeListener = () => React.useContext(ResizeListenerContext);
