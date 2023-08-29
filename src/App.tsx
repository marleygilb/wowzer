import Wowzer from "./components/Wowzer";
import "./styles/App.css";

function App() {
  return (
    <>
      <div className="App-header">
        <h1 className="App-title">Wowzer App</h1>
      </div>
      <div className="App-subtitle">
        <p>
          Powered by{" "}
          <a href="https://owen-wilson-wow-api.onrender.com">
            The Owen Wilson Wow API
          </a>
        </p>
      </div>
      <Wowzer />
    </>
  );
}

export default App;
