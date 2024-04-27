import { React, useState } from "react";

import './App.css';
import Checkbox from './components/Checkbox';
import Phrase from './components/Phrase';
import Rerender from './components/Rerender';
import { User } from './components/User';
import WordCount from './components/WordCount';
import { PureCat } from "./components/Cat";

function App() {
  const [cats, setCats] = useState(["Biscuit", "Jungle", "Outlaw"]);
  return (
    <div className="App">
      <header className="App-header">
        <Rerender />
        <WordCount>You are not going to believe this but ...</WordCount>
        <Checkbox />
        <Phrase />
        <User />
        {cats.map((cat, i) => (
          <PureCat
            key={i}
            name={cat}
            meow={cat => console.log(`${cat} has meowed`)}
          />
        ))}
        <button onClick={() => setCats([...cats, prompt("Name a cat")])}>
          Add a cat
        </button>
      </header>
    </div>
  );
}

export default App;
