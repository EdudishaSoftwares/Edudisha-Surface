import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const environment = import.meta.env.VITE_APP_ENV
  const [count, setCount] = useState(0);
  switch (environment) {
    case 'dev':
      document.title = 'Edudisha-Dev';
      break;
    case 'stage':
      document.title = 'Edudisha-Stage';
      break;
    case 'production':
      document.title = 'Edudisha';
      break;
    default:
      document.title = 'Edudisha';
  }
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
