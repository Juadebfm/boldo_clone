import { useEffect, useRef, useCallback } from "react";
import { useLocation } from "react-router-dom";

export const useScrollPosition = () => {
  const { pathname } = useLocation();
  const scrollPositions = useRef({});

  const saveScrollPosition = useCallback(() => {
    scrollPositions.current[pathname] = window.scrollY;
  }, [pathname]);

  const restoreScrollPosition = useCallback(() => {
    const savedPosition = scrollPositions.current[pathname];
    if (savedPosition !== undefined) {
      window.scrollTo(0, savedPosition);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  useEffect(() => {
    window.addEventListener("scroll", saveScrollPosition);
    return () => window.removeEventListener("scroll", saveScrollPosition);
  }, [saveScrollPosition]);

  useEffect(() => {
    if (document.readyState === "complete") {
      restoreScrollPosition();
    } else {
      window.addEventListener("load", restoreScrollPosition);
      return () => window.removeEventListener("load", restoreScrollPosition);
    }
  }, [pathname, restoreScrollPosition]);

  return { saveScrollPosition, restoreScrollPosition };
};
