import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { updateTask } from "../slices/taskSlice";

const EditTaskPage = () => {
  const { id } = useParams();
  const task = useSelector((state) => state.tasks.tasks.find((task) => task.id === +id));
  const [title, setTitle] = useState(task ? task.title : "");
  const [completed, setCompleted] = useState(task ? task.completed : false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateTask({ id: +id, title, completed }));
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Edit Task</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
        />
        Completed
      </label>
      <button type="submit">Save</button>
    </form>
  );
};

export default EditTaskPage;
