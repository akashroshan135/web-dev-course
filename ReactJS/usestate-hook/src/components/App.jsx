import React from "react";

function App() {
  const [count, setState] = React.useState(0);

  function decrementCount() {
    setState(count - 1);
  }

  function incrementCount() {
    setState(count + 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={decrementCount}>-</button>
      <button onClick={incrementCount}>+</button>
    </div>
  );
}

export default App;
