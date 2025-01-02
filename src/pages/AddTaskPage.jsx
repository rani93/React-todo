import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../slices/taskSlice";
import { useNavigate } from "react-router-dom";

const AddTaskPage = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask({ id: Date.now(), title, completed: false }));
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add Task</h1>
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTaskPage;
