import './App.css';
import SiteLayout from './components/SiteLayout';
import Callout from './components/Callout';
import ErrorBoundary from './components/ErrorBoundary';
import { BreakThings } from './components/BreakThings';

function App() {
  return (
    <SiteLayout
      menu={
        <ErrorBoundary>
          <p>Site Layout Menu</p>
          <BreakThings />
        </ErrorBoundary>
      }
    >
      <ErrorBoundary>
        <Callout>Callout<BreakThings /></Callout>
      </ErrorBoundary>
      <ErrorBoundary>
        <h1>Contents</h1>
        <p>This is the main part og the example layout</p>
      </ErrorBoundary>
    </SiteLayout>
  );
}

export default App;
