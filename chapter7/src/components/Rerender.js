import React, { useEffect } from "react";
import { useAnyKeyToRender } from "../hooks/useAnyKeyToRender";
import { useWindowSize } from "../hooks/useWindowSize";

export default function Rerender() {
  useAnyKeyToRender();
  useWindowSize();

  const word = "gnar";
  useEffect(() => {
    console.log("Rerender");
  }, [word]);

  return <h1>Open the console.</h1>;
}