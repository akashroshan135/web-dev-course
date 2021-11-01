import React from "react";
import Zoom from "@mui/material/Zoom";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

function CreateArea(props) {
  const [note, setNote] = React.useState({
    title: "",
    content: "",
  });
  const [isExpanded, setIsExpanded] = React.useState(false);

  function handleChange(event) {
    const { value, name } = event.target;
    setNote(() => ({
      ...note,
      [name]: value,
    }));
  }

  function expand() {
    setIsExpanded(true);
  }

  function submitNote(event) {
    event.preventDefault();
    props.addNote(note);
    setNote({ title: "", content: "" });
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            placeholder="Title"
            onChange={handleChange}
            value={note.title}
          />
        )}
        <textarea
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          onChange={handleChange}
          onClick={expand}
          value={note.content}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
