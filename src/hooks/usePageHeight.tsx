import { useState, useEffect } from "react";

export const usePageHeight = () => {
  const [pageHeight, setPageHeight] = useState({
    scrollHeight: 0,
    clientHeight: 0,
  });

  useEffect(() => {
    const updatePageHeight = () => {
      setPageHeight({
        scrollHeight: document.documentElement.scrollHeight,
        clientHeight: document.documentElement.clientHeight,
      });
    };

    updatePageHeight();
    window.addEventListener("resize", updatePageHeight);
    return () => {
      window.removeEventListener("resize", updatePageHeight);
    };
  }, []);

  return pageHeight.scrollHeight - pageHeight.clientHeight;
};
