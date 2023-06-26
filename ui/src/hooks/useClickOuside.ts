import { RefObject, useEffect } from "react";

export function useClickOutside<T extends HTMLElement>(
  ref: RefObject<T>,
  callback: (e: MouseEvent) => void
) {
  useEffect(() => {
    if (!ref) return;

    function handleClickOutside(event: MouseEvent) {
      if (event.defaultPrevented) return;
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback(event);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref, callback]);
}
