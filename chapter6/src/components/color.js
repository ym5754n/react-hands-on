import React from "react";
import StarRating from "./starRating";
import { FaTrash } from "react-icons/fa";

export default function Color({
  id,
  title,
  color,
  rating,
  onRemove = f => f,
  onRate = f => f
}) {
  return (
    <section>
      <h1>{title}</h1>
      <button onClick={() => onRemove(id)}>
        <FaTrash />
      </button>
      <div style={{ backgroundColor: color, height: 50 }} />
      <StarRating selectedStars={rating} onRate={rating => onRate(id, rating)} />
    </section>
  )
}