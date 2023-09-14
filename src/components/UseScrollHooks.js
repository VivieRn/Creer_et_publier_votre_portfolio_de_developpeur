import React, { useMemo, useRef, useCallback, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";

export default function useScrollHooks() {
  const sectionRefs = useMemo(
    () => [
      React.createRef(),
      React.createRef(),
      React.createRef(),
      React.createRef(),
    ],
    []
  );

  const currentSection = useRef(0);

  const handleWheel = useCallback(
    (e) => {
      if (Math.abs(e.deltaY) < 50) return;

      if (e.deltaY > 0) {
        currentSection.current = Math.min(
          currentSection.current + 1,
          sectionRefs.length - 1
        );
      } else {
        currentSection.current = Math.max(currentSection.current - 1, 0);
      }

      scroll.scrollTo(sectionRefs[currentSection.current].current.offsetTop, {
        duration: 800,
        smooth: "easeInOutQuart",
      });
    },
    [sectionRefs]
  );

  const initialTouchY = useRef(0);

  const handleTouchStart = useCallback((e) => {
    initialTouchY.current = e.touches[0].clientY;
  }, []);

  const handleTouchEnd = useCallback(
    (e) => {
      const touchEndY = e.changedTouches[0].clientY;
      const threshold = 30;
      const diffY = initialTouchY.current - touchEndY;

      setTimeout(() => {
        if (Math.abs(diffY) > threshold) {
          if (diffY > 0) {
            currentSection.current = Math.min(
              currentSection.current + 1,
              sectionRefs.length - 1
            );
          } else {
            currentSection.current = Math.max(currentSection.current - 1, 0);
          }

          scroll.scrollTo(
            sectionRefs[currentSection.current].current.offsetTop,
            {
              duration: 800,
              smooth: "easeInOutQuart",
            }
          );
        }

        initialTouchY.current = 0;
      }, 100);
    },
    [sectionRefs]
  );

  useEffect(() => {
    window.addEventListener("wheel", handleWheel);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [handleWheel, handleTouchStart, handleTouchEnd]);

  return {
    sectionRefs,
    handleWheel,
    handleTouchStart,
    handleTouchEnd,
  };
}
