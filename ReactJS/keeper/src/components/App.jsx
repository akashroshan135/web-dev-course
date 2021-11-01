import React from "react";
import Header from "./Header";
import CreateArea from "./CreateArea";
import Note from "./Note";
import Footer from "./Footer";

function App() {
  const [notes, setNotes] = React.useState([]);

  function addNewNote(newNote) {
    setNotes([...notes, newNote]);
  }

  function deleteNote(id) {
    setNotes(() => {
      return notes.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNewNote} />
      {notes.map((note, index) => (
        <Note
          noteId={index}
          title={note.title}
          content={note.content}
          deleteFn={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
