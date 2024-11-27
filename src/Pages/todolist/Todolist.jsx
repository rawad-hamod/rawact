import { useEffect, useState } from "react";

import "./Todolist.css";
import { FaPlus } from "react-icons/fa";

function Todolist() {
  function getTasksFromLocalStorage() {
    let data = localStorage.getItem("tasks");

    let tasksFromLocalStorage = JSON.parse(data);

    if (tasksFromLocalStorage) {
      console.log(tasksFromLocalStorage);
      return tasksFromLocalStorage;
    }
    return [];
  }

  const [tasks, setTasks] = useState(getTasksFromLocalStorage());
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask(newtask) {
    if (newtask !== "") {
      const copyTasks = [...tasks];
      setTasks((tasks) => [
        ...tasks,
        { id: copyTasks.length + 1, completed: false, text: newtask },
      ]);
      setNewTask("");
    }
  }

  function deleteTask(id) {
    let a = tasks.filter((item) => item.id !== id);
    setTasks(a);
  }
  function toggleCompleted(id) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return {
            ...tasks,
            id: task.id,
            completed: !task.completed,
            text: task.text,
          };
        } else {
          return task;
        }
      })
    );
  }

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <div className="newtask">
        <input
          type="text"
          placeholder="type new task here.."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") addTask(newTask);
          }}
        />
        <p className="newtask-button" onClick={() => addTask(newTask)}>
          <FaPlus />
        </p>
      </div>
      <div className="tasks">
        {tasks.map((item, index) => (
          <div className="task" key={index}>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => toggleCompleted(item.id)}
            />
            <div className="text">
              <p className={item.completed === true ? "done" : null}>
                {item.text}
              </p>
            </div>
            <button
              className="delete-button"
              onClick={() => deleteTask(item.id)}
            >
              delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todolist;
