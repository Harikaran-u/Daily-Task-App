"use client";

import { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { ThreeDots } from "react-loader-spinner";

const TaskList = () => {
  const [taskList, updateTaskList] = useState([]);
  const router = useRouter();

  const getTaskDetails = async () => {
    const response = await fetch("http://localhost:3000/api/tasks");
    const data = await response.json();
    if (!response.ok) {
      console.log("Data not available");
    } else {
      console.log(data.topics);
      updateTaskList(data.topics);
    }
  };

  useEffect(() => {
    getTaskDetails();
  }, []);

  const deleteTask = async (id) => {
    const response = await fetch(`http://localhost:3000/api/tasks?id=${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    if (response.ok) {
      // router.refresh()
      getTaskDetails();
      console.log(data);
    }
  };

  const dateString = (currentDate) => {
    const date = new Date(currentDate);
    const fullDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
    console.log(fullDate);
    return fullDate;
  };

  const renderTaskList = () => {
    return (
      <ul className="task-list-container">
        {taskList.map((eachTask) => (
          <li key={eachTask._id} className="task-list">
            <div className="display-details-container">
              <h1 className="task-title">{eachTask.title}</h1>
              <br />
              <p className="task-description">{eachTask.description}</p>
            </div>
            <div className="actions-main-container">
              <div className="action-icons-container">
                <button className="action-btn" type="button">
                  <FaEdit size={25} className="action-icon" />
                </button>
                <button
                  className="action-btn"
                  type="button"
                  onClick={() => deleteTask(eachTask._id)}
                >
                  <AiOutlineDelete size={25} className="action-icon" />
                </button>
              </div>
              <br />
              <p className="task-date">{dateString(eachTask.createdAt)}</p>
            </div>
          </li>
        ))}
      </ul>
    );
  };

  const renderLoader = () => {
    return (
      <div className="loader">
        <ThreeDots
          height="80"
          width="120"
          radius="9"
          color="#00ff91"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </div>
    );
  };

  const displayDetails = () => {
    if (taskList.length !== 0) {
      return renderTaskList();
    }
    return renderLoader();
  };

  return displayDetails();
};

export default TaskList;
