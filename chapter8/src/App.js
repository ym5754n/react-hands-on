import { useState } from "react";

import './App.css';
import GitHubUser from './components/GitHubUser';
import RepositoryReadme from './components/RepositoryReadme';
import UserRepositories from './components/UserRepositories';
import SearchForm from "./components/SearchFrom";

function App() {
  const [login, setLogin] = useState("ym5754n");
  const [repo, ] = useState("react-hands-on");
  return (
    <div className="">
      <header className="App-header">
        <SearchForm value={login} onSearch={setLogin} />
        <GitHubUser login={login} />
        <UserRepositories login={login} />
        <RepositoryReadme login={login} repo={repo} />
      </header>
    </div>
  );
}

export default App;
