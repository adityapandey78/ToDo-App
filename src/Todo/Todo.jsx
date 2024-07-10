import { useState, useEffect } from "react";
import "../Todo/Todo.css";
import TodoForm from "./TodoForm";
import { TodoList } from "./TodoList";
import DataAndTime from "./DataAndTime";
import {
  getLocalStorageTodoData,
  setLocalStorageTodoData,
} from "./TodoLocalStorage";

export const Todo = () => {
  const [inputVal, setInputVal] = useState();
  const [task, setTask] = useState(() => getLocalStorageTodoData()); // Initialize tasks from local storage

  // Handle form submission to add a new task
  const handleFormSubmit = (inputVal) => {
    const { id, content, checked } = inputVal; // Destructure the input value object

    if (!content) return; // Do not add empty tasks

    // Check if the task content already exists
    const ifTodoContentMatched = task.find(
      (currTask) => currTask.content === content
    );
    if (ifTodoContentMatched) return;

    // Add new task to the list
    setTask((prevTask) => [
      ...prevTask,
      { id, content, checked }, // Use shorthand property names
    ]);
    setInputVal(""); // Clear input after adding the task
  };

  // Handle delete button click
  const handleDeleteBtn = (content) => {
    const updatedTask = task.filter((currTask) => currTask.content !== content);
    setTask(updatedTask); // Update task list after deletion
  };

  // Handle checkbox toggle
  const handleCheckedBtn = (content) => {
    const updatedTask = task.map((currTask) => {
      if (currTask.content === content) {
        return { ...currTask, checked: !currTask.checked }; // Toggle checked status
      } else {
        return currTask;
      }
    });
    setTask(updatedTask); // Update task list after toggle
  };

  // Handle clear all button click
  const handleClearAll = () => {
    setTask([]); // Clear all tasks
  };

  // Store tasks in local storage whenever the task list changes
  useEffect(() => {
    setLocalStorageTodoData(task);
  }, [task]);

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <DataAndTime />
      </header>

      <TodoForm onAddTodo={handleFormSubmit} /> {/* Pass handleFormSubmit to TodoForm as a prop */}

      <section className="myUnOrdList">
        <ul>
          {task.map((currTask) => (
            <TodoList
              key={currTask.id}
              data={currTask.content}
              checked={currTask.checked}
              onHandleDeleteTodo={handleDeleteBtn}
              onHandleCheckedTodo={handleCheckedBtn}
            />
          ))}
        </ul>
      </section>

      <section className="clear-btn" onClick={handleClearAll}>
        Clear All
      </section>
    </section>
  );
};
