import { useState, useEffect } from "react";

function useMagicColor() {
  const [state, setState] = useState("red");
  useEffect(() => {
    const interval = setInterval(() => {
      // Random tu 0 den 999999

      const newColor = Math.floor(Math.random() * 999999);
      setState(`#${newColor}`);

      return () => {
        clearInterval(interval);
      };
    }, 1000);
  }, []);

  return state;
}

export { useMagicColor };
