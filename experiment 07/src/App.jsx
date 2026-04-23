import React from "react";
import "./App.css";
import Props from "./assets/components/Props";


function App() {
  return (
    <div className="big-box">
      <h1>Student Information</h1>
      <div className="container">
        <Props name="Aayushi Sharma" course="Computer Science" marks="95" />
        <Props name="Pihu Sharma" course="Computer Science" marks="92" />
        <Props name="Girish" course="Computer Science" marks="98" />
      </div>
      <h3>Aayushi Sharma</h3>
      <h3>Roll no: 2503201000022</h3>
    </div>
  );
}

export default App;

