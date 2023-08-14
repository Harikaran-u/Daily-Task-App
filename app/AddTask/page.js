"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "./addtask.css";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const route = useRouter();

  const collectTaskDetails = async (event) => {
    event.preventDefault();
    const newTask = { title, description };
    const configurations = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newTask),
    };
    const response = await fetch(
      "http://localhost:3000/api/tasks",
      configurations
    );
    const data = await response.json();
    if (response.ok) {
      route.replace("/");
    }
  };

  return (
    <div className="add-task-main-container">
      <form className="task-form-container" onSubmit={collectTaskDetails}>
        <input
          type="text"
          className="add-task"
          placeholder="Write your Task Title here...."
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="text"
          className="add-task"
          placeholder="Write your Description here...."
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <button type="submit" className="add-btn">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTask;
