"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

/** Reset explicit page navigation; preserve anchors and Back/Forward restoration. */
export function NavigationScroll() {
  const pathname = usePathname();
  const destination = useRef<string | null>(null);

  useEffect(() => {
    function navigate(event: MouseEvent) {
      if (
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      )
        return;
      const link =
        event.target instanceof Element
          ? event.target.closest("a[href]")
          : null;
      if (
        !(link instanceof HTMLAnchorElement) ||
        link.hasAttribute("download") ||
        (link.target && link.target !== "_self")
      )
        return;
      const url = new URL(link.href);
      if (url.origin !== window.location.origin || url.hash) return;
      destination.current = url.pathname;
      if (url.pathname === window.location.pathname) {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        destination.current = null;
      }
    }
    function restore() {
      destination.current = null;
    }
    document.addEventListener("click", navigate, true);
    window.addEventListener("popstate", restore);
    return () => {
      document.removeEventListener("click", navigate, true);
      window.removeEventListener("popstate", restore);
    };
  }, []);

  useEffect(() => {
    if (destination.current !== pathname) return;
    // Run after Next's route commit and its automatic scroll handling.
    const frame = requestAnimationFrame(() => {
      if (destination.current === pathname && !window.location.hash) {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        destination.current = null;
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
}
