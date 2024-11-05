import React, { useEffect, useRef, MouseEvent, TouchEvent } from "react";
import { OutsideClickHandlerProps } from "./type";

const OutsideClickHandler: React.FC<OutsideClickHandlerProps> = ({
  onClickEvents,
  children,
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isTouch = useRef(false);

  useEffect(() => {
    const handle = (event: Event) => {
      if (event.type === "touchend") {
        isTouch.current = true;
      }
      if (event.type === "click" && isTouch.current) return;

      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        onClickEvents(event as unknown as MouseEvent | TouchEvent);
      }
    };

    document.addEventListener("touchend", handle, true);
    document.addEventListener("click", handle, true);

    return () => {
      document.removeEventListener("touchend", handle, true);
      document.removeEventListener("click", handle, true);
    };
  }, [onClickEvents]);

  return (
    <div {...props} ref={containerRef}>
      {children}
    </div>
  );
};

export default OutsideClickHandler;
