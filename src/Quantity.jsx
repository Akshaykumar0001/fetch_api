import React from "react";
import { useDispatch } from "react-redux";
function Quantity() {
  const dispatch = useDispatch();

  return (
    <div>
      Quantity
      <div className="quantity">
        <a
          onClick={() =>
            dispatch({
              type: "INCREMENT",
            })
          }
        >
          <span>+</span>
        </a>
        <input type="text" value={0} />
        <a>
          <span
            onClick={() =>
              dispatch({
                type: "DECREMENT",
              })
            }
          >
            -
          </span>
        </a>
      </div>
    </div>
  );
}

export default Quantity;
