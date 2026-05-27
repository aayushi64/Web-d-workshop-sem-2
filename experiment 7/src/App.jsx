import "./App.css";
import Props from "./assets/components/Props";

function App() {
  return (
    <>
    <div className="main-box">
      <h1>Student Results</h1>
      <div className="container">
        <Props name="Aayushi Sharma" course="Computer Science" marks="95" />
        <Props name="Pihu Sharma" course="Computer Science" marks="92" />
        <Props name="Girish" course="Computer Science" marks="98" />
      </div>
      <div className="footer-info">
          <h3>Aayushi Sharma</h3>
          <h4>Roll Number: 2503201000022</h4>
        </div>
    </div>
   </>
  );
}

export default App;
