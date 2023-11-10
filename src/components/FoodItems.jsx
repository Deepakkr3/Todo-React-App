import React from "react";
import "./../App.css";
import { MdDeleteForever } from "react-icons/md";
function FoodItems({ food, itemToDelete }) {
  return (
    <>
      <div className="item-container">
        <div className="container">
          {food.map((it) => (
            <>
              <div className="row row-my">
                <div className="col-6">{it.name}</div>
                <div className="col-4">{it.date}</div>
                <div className="col-2">
                  <button
                    type="button"
                    className="btn btn-danger ,button-my"
                    onClick={() => itemToDelete(it.name)}
                  >
                    <MdDeleteForever></MdDeleteForever>
                  </button>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default FoodItems;
