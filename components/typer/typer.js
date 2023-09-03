import { useEffect, useRef } from "react";
import Typed from "typed.js";

export const Typer = () => {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);

  const slogans = [
    "get to production!",
    "find you!",
    "are exploited!",
    "endanger your data!",
    "it's too late!",
    "turn into threats!",
  ];

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
