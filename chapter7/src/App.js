import './App.css';
import Checkbox from './components/Checkbox';
import Phrase from './components/Phrase';
import Rerender from './components/Rerender';
import WordCount from './components/WordCount';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Rerender />
        <WordCount>You are not going to believe this but ...</WordCount>
        <Checkbox />
        <Phrase />
      </header>
    </div>
  );
}

export default App;
