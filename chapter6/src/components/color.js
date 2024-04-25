import React from "react";
import StarRating from "./starRating";
import { useColors } from "../providers/colorProvider";

export default function Color({ id, title, color, rating }) {
  const { rateColor, removeColor } = useColors();
  return (
    <section>
      <h1>{title}</h1>
      <button onClick={() => removeColor(id)}>X</button>
      <div style={{ backgroundColor: color, height: 50 }} />
      <StarRating selectedStars={rating} onRate={rating => rateColor(id, rating)} />
    </section>
  )
}