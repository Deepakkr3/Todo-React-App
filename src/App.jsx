import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import FoodItems from "./components/FoodItems";
import { useState } from "react";

function App() {
  const initialTodo = [
    // { name: "Dale", date: "4/10/23" },
    // {
    //   name: "Rice",
    //   date: "22/10/23",
    // },
    // {
    //   name: "vag",
    //   date: "11/11/23",
    // },
  ];
  let [todo, setTodo] = useState(initialTodo);
  let newTodo = [];
  function handleNewTodo(item, dueDate) {
    newTodo = [...todo, { name: item, date: dueDate }];
    setTodo(newTodo);
  }
  function itemToDelete(namee) {
    const afteDelete = todo.filter((it) => it.name != namee);
    setTodo(afteDelete);
  }

  return (
    <center className="todo-container">
      <AppName />

      <AddTodo handleNewTodo={handleNewTodo} />
      {todo.length == 0 ? (
        <center>add your day 😃</center>
      ) : (
        <FoodItems food={todo} itemToDelete={itemToDelete} />
      )}
      {/* <div className="item-container">
        <div className="container">
          <div className="row row-my">
            <div className="col-6">by minlk</div>
            <div className="col-4">4/10/2023</div>
            <div className="col-2">
              <button type="button" className="btn btn-danger ,button-my">
                Delete
              </button>
            </div>
          </div>
          <div className="row row-my">
            <div className="col-6">Go to college</div>
            <div className="col-4">8/8/2023</div>
            <div className="col-2">
              <button type="button" className="btn btn-danger , button-my">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      */}
    </center>
  );
}
export default App;
