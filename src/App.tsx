import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import DropDown from "./atoms/DropDown";

function App() {
  const [count, setCount] = useState(0);

  let data = [];

  for (let i = 0; i < 20; i++) {
    data.push({
      label: `labeeeeeeeeeeeeeeel${i}`,
      value: `label${i}`,
    });
  }

  return (
    <>
      <div>
        <>COMPONENT LEFT</>
        <DropDown size="s" data={data} maxWidth="sm" multiSelect={true} />
        <>COMPONENT RIGHT</>
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
    </>
  );
}

export default App;
