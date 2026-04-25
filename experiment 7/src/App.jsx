import "./App.css";
import Props from "./assets/components/Props";

function App() {
  return (
    <div className="main-box">
      <h1>Student Results</h1>
      <div className="container">
        <Props name="Aayushi Sharma" course="Computer Science" marks="95" />
        <Props name="Pihu Sharma" course="Computer Science" marks="92" />
        <Props name="Girish" course="Computer Science" marks="98" />
      </div>
    </div>
  );
}

export default App;
