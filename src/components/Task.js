import "./Task.css";
import { useDispatch } from "react-redux";
import { doTodo, editTodo } from "../redux/todoSlice";
import { useState } from "react";

const Task = ({ todo }) => {
  const dispatch = useDispatch();
  const [editedTask, setEditedTask] = useState("");
  return (
    <div
      onClick={() => {
        document.getElementById(todo.id).style.display = "block";
      }}
      onDoubleClick={() => {
        dispatch(doTodo(todo));
      }}
    >
      {todo.isDone ? (
        <div className="done-todo-card">
          <p>{todo.discription}</p>
        </div>
      ) : (
        <div className="not-done-todo-card">
          <p>{todo.discription}</p>
          <div id={todo.id} style={{ display: "none" }}>
            <input
              type="text"
              placeholder="Edit Your Task"
              onChange={(e) => {
                setEditedTask(e.target.value);
              }}
            />
            <button
              onClick={() => {
                dispatch(editTodo([todo, editedTask]));
              }}
            >
              Edit Task
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Task;
