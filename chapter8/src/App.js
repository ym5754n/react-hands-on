import { useState } from "react";

import './App.css';
import GitHubUser from './components/GitHubUser';
import RepositoryReadme from './components/RepositoryReadme';
import UserRepositories from './components/UserRepositories';
import SearchForm from "./components/SearchFrom";

function App() {
  const [login, setLogin] = useState();
  const [repo, setRepo] = useState();

  const handleSearch = login => {
    if (login) return setLogin(login);
    setLogin("");
    setRepo("");
  };

  if (!login) {
    return (
      <div>
        <header className="App-header">
          <SearchForm value={login} onSearch={handleSearch} />
        </header>
      </div>
    );
  }

  return (
    <div className="">
      <header className="App-header">
        <SearchForm value={login} onSearch={handleSearch} />
        {login && <GitHubUser login={login} />}
        {login && <UserRepositories login={login} repo={repo} onSelect={setRepo} />}
        {login && repo && <RepositoryReadme login={login} repo={repo} />}
      </header>
    </div>
  );
}

export default App;
