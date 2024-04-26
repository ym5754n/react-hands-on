import React, { useEffect, useMemo, useCallback } from "react";
import { useAnyKeyToRender } from "../hooks/useAnyKeyToRender";

export default function WordCount({ children = "" }) {
  useAnyKeyToRender();

  const words = useMemo(() => children.split(" "), [children]);

  useEffect(() => {
    console.log("word count");
  }, [words]);

  const fn = useCallback(() => {
    console.log("hello");
    console.log("world");
  }, []);

  useEffect(() => {
    console.log("fn");
    fn();
  }, [fn]);

  return (
    <>
      <p>{children}</p>
      <p>
        <strong>{words.length} - words</strong>
      </p>
    </>
  )
} 