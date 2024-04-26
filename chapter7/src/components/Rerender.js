import React, { useEffect } from "react";
import { useAnyKeyToRender } from "../hooks/useAnyKeyToRender";

export default function Rerender() {
  useAnyKeyToRender();

  const word = "gnar";
  useEffect(() => {
    console.log("Rerender");
  }, [word]);

  return <h1>Open the console.</h1>;
}