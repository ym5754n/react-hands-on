import { useState } from "react";

import './App.css';
import GitHubUser from './components/GitHubUser';
import RepositoryReadme from './components/RepositoryReadme';
import UserRepositories from './components/UserRepositories';

function App() {
  const [login, ] = useState("ym5754n");
  const [repo, ] = useState("react-hands-on");
  return (
    <div className="">
      <header className="App-header">
        <GitHubUser login={login} />
        <UserRepositories login={login} />
        <RepositoryReadme login={login} repo={repo} />
      </header>
    </div>
  );
}

export default App;
