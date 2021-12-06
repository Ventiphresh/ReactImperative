import React from "react";

function strike() {
  document.getElementById("root").style.textDecoration = "line-through";
}

function unstrike() {
  document.getElementById("root").style.textDecoration = null;
}

function App() {
  return (
    <div>
      <p>Buy milk</p>
      <button onClick={strike}>Change the strike</button>
      <button onClick={unstrike}>Undo the strike</button>
    </div>
  );
}

export default App;
