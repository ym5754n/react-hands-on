import './App.css';
import GitHubUser from './components/GitHubUser';
import { bigList } from './data/bigList';
import { FixedSizeList } from "react-window";

function App() {
  const renderRow = ({ index, style }) => (
    <div style={{ ...style, ...{ display: "flex" } }}>
      <img
        src={bigList[index].avatar}
        alt={bigList[index].name}
        width={50}
      />
      <p>{bigList[index].name} - {bigList[index].email}</p>
    </div>
  );

  return (
    <div className="">
      <header className="App-header">
        <GitHubUser login="ym5754n" />
        <FixedSizeList
          height={window.innerHeight}
          width={window.innerWidth - 20}
          itemCount={bigList.length}
          itemSize={50}
        >
          {renderRow}
        </FixedSizeList>
      </header>
    </div>
  );
}

export default App;
