import { useEffect, useState } from "react";

import './App.css';
// import GitHubUser from './components/GitHubUser';
// import RepositoryReadme from './components/RepositoryReadme';
// import UserRepositories from './components/UserRepositories';
import SearchForm from "./components/SearchFrom";

import { GraphQLClient } from "graphql-request";

const query = `
  query findRepos($login:String!) {
    user(login:$login) {
      login
      name
      avatar_url: avatarUrl
      repositories(first:100) {
        totalCount
        nodes {
          name
        }
      }
    }
  }  
`;

const client = new GraphQLClient(
  "https://api.github.com/graphql",
  {
    headers: {
      Authorization: `Bearer hogehoge`
    }
  }
);

const UserDetails = data => {
  return (
    <div className="githubUser">
      <img src={data.avatar_url} alt={data.login} style={{ width: 200 }} />
      <div>
        <h1>{data.login}</h1>
        {data.name && <p>{data.name}</p>}
        {data.location && <p>{data.location}</p>}
      </div>
    </div>
  );
}

const List = ({ data = [], renderItem, renderEmpty }) => {
  return !data.length ? (
    renderEmpty
  ) : (
    <ul>
      {data.map((item, i) => (
        <li key={i}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}

function App() {
  const [login, setLogin] = useState("ym5754n");
  const [userData, setUserData] = useState();

  useEffect(() => {
    client
      .request(query, { login })
      .then(({ user }) => user)
      .then(setUserData)
      .catch(console.error);
  }, [login]);

  if (!userData) return <p>Loading...</p>;

  return (
    <div className="">
      <header className="App-header">
        <SearchForm value={login} onSearch={setLogin} />
        <UserDetails {...userData} />
        <List data={userData.repositories.nodes} renderItem={repo => <span>{repo.name}</span>} />
        {/* {login && <GitHubUser login={login} />}
        {login && <UserRepositories login={login} repo={repo} onSelect={setRepo} />}
        {login && repo && <RepositoryReadme login={login} repo={repo} />} */}
      </header>
    </div>
  );
}

export default App;
