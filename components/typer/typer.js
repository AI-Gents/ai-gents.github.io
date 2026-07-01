import { useEffect, useRef } from "react";
import Typed from "typed.js";

const defaultSlogans = [
  "are exploited.",
  "become incidents.",
  "reach production.",
  "escape your perimeter.",
  "find you.",
  "become someone else's 0-day.",
];

export const Typer = ({
  strings = defaultSlogans,
  typeSpeed = 90,
  backSpeed = 90,
  backDelay = 1200,
  cursorChar = "_",
  className = undefined,
}) => {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings,
      typeSpeed,
      backSpeed,
      backDelay,
      loop: true,
      cursorChar,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, [backDelay, backSpeed, cursorChar, strings, typeSpeed]);

  return <span className={className} ref={el} />;
};
