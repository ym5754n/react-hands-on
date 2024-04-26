import React, { useState, useEffect } from "react";

export default function Phrase() {
  const [val, set] = useState("");
  const [phrase, setPhrase] = useState("example phrase");

  const createPhrase = () => {
    setPhrase(val);
    set("");
  };

  useEffect(() => {
    console.log(`typing ${val}`);
  }, [val]);

  useEffect(() => {
    console.log(`phrase: ${phrase}`);
  }, [phrase]);

  return (
    <div>
      <label>Favorite phrase:</label>
      <input
        value={val}
        placeholder={phrase}
        onChange={e => set(e.target.value)}
      />
      <button onClick={createPhrase}>send</button>
    </div>
  );
}