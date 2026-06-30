import { useEffect, useRef } from "react";
import Typed from "typed.js";

const slogans = [
  "are exploited.",
  "become incidents.",
  "reach production.",
  "escape your perimeter.",
  "find you.",
  "become someone else's 0-day.",
];

export const Typer = () => {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: slogans,
      typeSpeed: 90,
        backSpeed: 90,
        backDelay: 1200,
        loop: true,
        cursorChar: "_",

    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return <span ref={el} />;
};
