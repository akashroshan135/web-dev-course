import React from "react";

function App() {
  const [headingText, setHeading] = React.useState("");
  const [name, setName] = React.useState("");
  const [isMouseOver, setMouseOver] = React.useState(false);

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  function handleChange(event) {
    setName(`${event.target.value}`);
  }

  function handleClick(event) {
    setHeading(name);
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
        />
        <button
          style={{
            backgroundColor: isMouseOver ? "black" : "white",
          }}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
