import { useState, Suspense, lazy } from "react";
import './App.css';
import Agreement from './components/Agreement';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import ErrorBoundary from "./components/ErrorBoundary";

const Main = lazy(() => import("./components/Main"));

function App() {
  const [agree, setAgree] = useState(false);

  if (!agree) return <Agreement onAgree={() => setAgree(true)} />;

  return (
    <ErrorBoundary>
      <Suspense fallback={<ClimbingBoxLoader />}>
        <Main />
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
