import React from "react";

function InputArea(props) {
  const [inputText, setInput] = React.useState("");

  function handleChange(event) {
    const { value } = event.target;
    setInput(value);
  }

  return (
    <div className="form">
      <input type="text" onChange={handleChange} />
      <button onClick={() => props.addButton(inputText)}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
