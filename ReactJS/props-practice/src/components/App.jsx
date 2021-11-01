import React from "react";
import Card from "./Card";
import Contacts from "../contacts";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {Contacts.map((contact) => (
        <Card {...contact} />
      ))}
    </div>
  );
}

export default App;
