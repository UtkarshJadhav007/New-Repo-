import React, { useState } from "react";
import './App.css';

function App() {
    
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

    function handleLogin(e){
      e.preventDefault();
      if(userName === "" || password === ""){
        alert("Please fill all fields");
      }
      else if (password.length < 6) {
        alert("Password must be at least 6 characters");
      }
      else {
        alert("Login Successful");
      }
    }

    return (
    <div className="container">
      <h1>Login Form</h1>
      <form onSubmit={handleLogin}>
        <label>Username : </label>
        <input type="text" value={userName} onChange={(e) => setUsername(e.target.value)} placeholder="Enter UserName"/>
        <label>Password : </label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password"/>
        <button type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default App;
