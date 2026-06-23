import { useState } from "react";
import "./App.css";   // component styles

function App() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  const checkNumber = () => {
    if (number === "") {
      setResult("Please enter a number!");
      return;
    }

    if (number % 2 === 0) {
      setResult(`${number} is Even`);
    } else {
      setResult(`${number} is Odd`);
    }
  };

  return (
    <div className="container">
      <h2>Even & Odd Checker</h2>

      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Enter a number"
      />
      <br />
      <button onClick={checkNumber}>Check</button>

      <div className="result">{result}</div>
    </div>
  );
}

export default App;
