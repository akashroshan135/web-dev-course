import React from "react";
import Card from "./Card";
import Contacts from "../contacts";
import Avatar from "./Avatar";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/VAN_CAT.png/1024px-VAN_CAT.png" />
      {Contacts.map((contact) => (
        <Card {...contact} />
      ))}
    </div>
  );
}

export default App;
