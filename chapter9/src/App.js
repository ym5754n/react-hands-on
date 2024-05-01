import { useState } from "react";
import './App.css';
import Agreement from './components/Agreement';
import Main from './components/Main';

function App() {
  const [agree, setAgree] = useState(false);

  if (!agree) return <Agreement onAgree={() => setAgree(true)} />;

  return <Main />;
}

export default App;
