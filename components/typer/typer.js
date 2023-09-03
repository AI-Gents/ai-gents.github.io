import { useEffect, useRef } from "react";
import Typed from "typed.js";

export const Typer = () => {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);

  const slogans = [
    "become exploits.",
    "endanger your data.",
    "compromise your code.",
    "turn into threats.",
    "find you!",
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
