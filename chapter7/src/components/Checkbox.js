import React, { useState, useEffect } from "react";

export default function Checkbox() {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    console.log(checked ? "checked" : "not checked");
  });

  return (
    <div>
      <input
        type="checkbox"
        value={checked}
        onChange={() => setChecked(checked => !checked)}
      />
      {checked ? "checked" : "not checked"}
    </div>
  )
}