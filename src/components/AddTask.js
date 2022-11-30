import { useDispatch } from "react-redux";
import { useState } from "react";
import { addTodo } from "../redux/todoSlice";
const AddTask = () => {
  const [newTaskText, setNewTaskText] = useState("");
  const dispatch = useDispatch();
  const handleClick = () => {
    const newTask = {
      id: Date.now(),
      discription: newTaskText,
      isDone: false,
    };
    dispatch(addTodo(newTask));
  };
  return (
    <div>
      <input
        type="text"
        placeholder="New Task"
        onChange={(e) => {
          setNewTaskText(e.target.value);
        }}
      />
      <button onClick={handleClick}>Add Task</button>
    </div>
  );
};

export default AddTask;
