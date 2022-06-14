import React from "react";
import useInputState from "./hooks/useInputState";

import { TextField } from "@material-ui/core";

function EditTodoForm({ editTodo, id, task, toggleEdit }) {
  const [value, handleChange, reset] = useInputState(task);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        editTodo(id, value);
        reset();
        toggleEdit();
      }}
      style={{
        marginLeft: "1rem",
        width: "50%",
      }}
    >
      <TextField
        margin="normal"
        value={value}
        onChange={handleChange}
        style={{
          width: "100%",
        }}
        autoFocus
      ></TextField>
    </form>
  );
}

export default EditTodoForm;
