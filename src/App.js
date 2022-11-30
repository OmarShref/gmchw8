import "./App.css";
import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";

function App() {
  const hintText = `Hint : 1)Click to edit 
                           2)Doubleclick to finish the task`;
  return (
    <div className="main-app">
      <h1>Todo App</h1>
      <p>{hintText}</p>
      <AddTask />
      <ListTask />
    </div>
  );
}

export default App;
