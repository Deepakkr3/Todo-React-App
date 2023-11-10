import { useEffect, useRef, useState } from "react";
import { VscAdd } from "react-icons/vsc";

function AddTodo({ handleNewTodo }) {
  const [text, setText] = useState();
  const [date, setDate] = useState();
  function onChangetext(event) {
    setText(event.target.value);
  }
  function onChangeDate(event) {
    setDate(event.target.value);
  }
  function updateToCaller() {
    handleNewTodo(text, date);
    setDate();
    setText();
  }
  useEffect(
    function () {
      let el = document.querySelector(".myinp");
      //el.focus();
      console.log(el);
    },
    [text]
  );

  return (
    <div className="container ">
      <div className="row row-my">
        <div className="col-6 myinp">
          <input
            type="text"
            placeholder="enter todo heare"
            onChange={onChangetext}
          ></input>
        </div>
        <div className="col-4">
          <input type="date" onChange={onChangeDate}></input>
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success ,button-my"
            onClick={updateToCaller}
          >
            <VscAdd />
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
