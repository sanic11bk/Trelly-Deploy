import { useState } from "react";

export const useText = (initialText: string = "") => {
  const [text, setText] = useState(initialText);

  const clear = () => setText("");

  const toUpperCase = () => setText((prev) => prev.toUpperCase());

  const toLowerCase = () => setText((prev) => prev.toLowerCase());

  return {
    text,
    clear,
    toUpperCase,
    toLowerCase,
    setText,
  };
};
