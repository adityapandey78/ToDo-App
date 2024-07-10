import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

export const TodoList = ({
  data,
  onHandleDeleteTodo,
  checked,
  onHandleCheckedTodo,
}) => {
  return (
    <li className="todo-item">
      <span className={checked ? "checkList" : "notCheckList"}>{data}</span>
      {/* //har list ka current task definekr rkha hai */}
      <button>
        <FaCheckCircle
          className="check-btn"
          onClick={() => onHandleCheckedTodo(data)}
        />
      </button>
      <button>
        <MdDeleteForever
          className="delete-btn"
          onClick={() => onHandleDeleteTodo(data)}
        />
      </button>
    </li>
  );
};
