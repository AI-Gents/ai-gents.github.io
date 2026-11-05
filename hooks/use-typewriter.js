import { useEffect, useState } from 'react';
export function useTypewriter(words) {
 const [text, setText] = useState(words[0]);
 const key = JSON.stringify(words);
 useEffect(() => {
  const values = JSON.parse(key);
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  let timer, word = 0, count = values[0].length, deleting = true;
  function tick() {
   if (deleting) { count--; if (count <= 0) { deleting = false; word = (word + 1) % values.length; } }
   else { count++; if (count >= values[word].length) deleting = true; }
   setText(values[word].slice(0, count));
   timer = setTimeout(tick, count === values[word].length ? 1800 : deleting ? 45 : 100);
  }
  timer = setTimeout(tick, 1800);
  return () => clearTimeout(timer);
 }, [key]);
 return text;
}
