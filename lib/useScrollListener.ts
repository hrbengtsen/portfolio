import React from "react";

/**
 * Custom hook to add scroll listener and call handler each animation frame
 * @param handleScroll
 */
export function useScrollListener(handleScroll: () => void) {
  const listenToScroll = React.useCallback(() => {
    requestAnimationFrame(() => handleScroll());
  }, [handleScroll]);

  React.useEffect(() => {
    document.addEventListener("scroll", listenToScroll);
    return () => {
      document.removeEventListener("scroll", listenToScroll);
    };
  }, []);
}

/*
More sophisticated version, not really applicable to the Header's use-case
export function useScrollListener(handleScroll: () => void, throttle = 250) {
  const scrollingTimer = React.useRef<NodeJS.Timeout>();

  const listenToScroll = React.useCallback(() => {
    // Temporarily unregister scroll
    document.removeEventListener("scroll", listenToScroll);

    // Clear previous timeout
    if (scrollingTimer.current) clearTimeout(scrollingTimer.current);

    // Re-add scroll listener after throttle
    scrollingTimer.current = setTimeout(
      () => document.addEventListener("scroll", listenToScroll),
      throttle
    );

    handleScroll();
  }, [throttle, handleScroll]);

  // Set and remove initial listener
  React.useEffect(() => {
    document.addEventListener("scroll", listenToScroll);
    return () => {
      document.removeEventListener("scroll", listenToScroll);
      if (scrollingTimer.current) clearTimeout(scrollingTimer.current);
    };
  }, [listenToScroll]);
}*/
