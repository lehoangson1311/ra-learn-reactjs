import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState();
  const handleRandomeButton = () => {
    setNumber(Math.floor(Math.random() * 10));
  };
  return (
    <div className="App">
      <h1>Random number</h1>
      <p>Number:{number}</p>
      <button onClick={handleRandomeButton}>Random</button>
    </div>
  );
}

export default App;
