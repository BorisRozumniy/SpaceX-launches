import { useState } from "react";
import { createClient, Provider } from "urql";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Launches } from "./components/Launches";

const client = createClient({
  url: "https://api.spacex.land/graphql/",
});

console.log(client);

function App() {
  const [count, setCount] = useState(0);

  return (
    <Provider value={client}>
      <div className="App">
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <Launches />
        </div>
      </div>
    </Provider>
  );
}

export default App;
