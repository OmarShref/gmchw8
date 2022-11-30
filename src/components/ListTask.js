import Task from "./Task";
import { useSelector } from "react-redux";
import { useState } from "react";
const ListTask = () => {
  const { todos } = useSelector((state) => state.todo);
  const [doneChecked, setDoneChecked] = useState(false);
  const [notDoneChecked, setNotDoneChecked] = useState(false);
  return (
    <div>
      <div>
        <h2>Filter By :</h2>
        <input
          id="done-checkbox"
          type="checkbox"
          onChange={(e) => {
            e.target.checked ? setDoneChecked(true) : setDoneChecked(false);
          }}
        />
        <label>Done Tasks</label>
        <br />
        <input
          id="not-done-checkbox"
          type="checkbox"
          onChange={(e) => {
            e.target.checked
              ? setNotDoneChecked(true)
              : setNotDoneChecked(false);
          }}
        />
        <label>Not Done Tasks</label>
      </div>
      {doneChecked === true && notDoneChecked === false
        ? todos
            .filter((todo) => todo.isDone === true)
            .map((todo) => <Task todo={todo} />)
        : doneChecked === false && notDoneChecked === true
        ? todos
            .filter((todo) => todo.isDone === false)
            .map((todo) => <Task todo={todo} />)
        : todos.map((todo) => <Task todo={todo} />)}
    </div>
  );
};
export default ListTask;
