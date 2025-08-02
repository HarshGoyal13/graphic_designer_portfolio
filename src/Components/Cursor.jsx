import React, { useEffect, useRef, useState } from "react";


const CustomCursor = () => {
  const mainCursorRef = useRef(null);
  const idleTimeoutRef = useRef(null);
  const [isIdle, setIsIdle] = useState(false);

  useEffect(() => {
    const mainCursor = mainCursorRef.current;

    const moveCursor = (e) => {
      const { clientX, clientY } = e;

      // Move main cursor bubble
      mainCursor.style.left = `${clientX}px`;
      mainCursor.style.top = `${clientY}px`;

      // Reset idle state
      setIsIdle(false);
      clearTimeout(idleTimeoutRef.current);
      idleTimeoutRef.current = setTimeout(() => setIsIdle(true), 1200);

      // Create burst bubble
      const trailBubble = document.createElement("div");
      trailBubble.className = "cursor-bubble trail";
      trailBubble.style.left = `${clientX}px`;
      trailBubble.style.top = `${clientY}px`;
      document.body.appendChild(trailBubble);

      setTimeout(() => trailBubble.remove(), 400); // shorter lifespan
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      clearTimeout(idleTimeoutRef.current);
    };
  }, []);

  return (
    <>
      <div
        ref={mainCursorRef}
        className={`cursor-bubble main ${isIdle ? "idle" : ""}`}
      />
    </>
  );
};

export default CustomCursor;
