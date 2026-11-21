import React, { useState } from "react";
import './App.css';

function App() {

  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const calculate = (operator) => {
      let answer;
      const a = Number(num1);
      const b = Number(num2);

      switch (operator) {
        case "+":
          answer = a + b;
          break;
      
        case "-":
          answer = a - b;
          break;
        case "*":
          answer = a * b;
          break;
        case "/":
          answer = b !== 0 ? a/ b : "Cannot divide by zero";
          break;
        default:
          answer = "Invalid Operation"
      }
      setResult(answer);

  };

  return (
    <div className="container">
      <h1>Simple Calculator</h1>
      <input
        type="number"
        placeholder="Enter First Number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}/>

        <input
        type="number"
        placeholder="Enter Second Number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}/>

        <div className="buttons">
            <button onClick={() => calculate("+")}> + </button>
            <button onClick={() => calculate("-")}> - </button>
            <button onClick={() => calculate("*")}> * </button>
            <button onClick={() => calculate("/")}> / </button>
        </div>
        <h2>
          Result: {result}
        </h2>
    </div>
  );
}

export default App;