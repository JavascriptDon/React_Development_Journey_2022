import React from "react";
import BackspaceOutlinedIcon from "@material-ui/icons/BackspaceOutlined";
function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <BackspaceOutlinedIcon />
      </button>
    </div>
  );
}

export default Note;
