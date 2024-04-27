import React, { useEffect, useReducer } from "react";

export default function Checkbox() {
  const [checked, toggle] = useReducer(checked => !checked, false);

  useEffect(() => {
    console.log(checked ? "checked" : "not checked");
  });

  return (
    <div>
      <input
        type="checkbox"
        value={checked}
        onChange={toggle}
      />
      {checked ? "checked" : "not checked"}
    </div>
  )
}