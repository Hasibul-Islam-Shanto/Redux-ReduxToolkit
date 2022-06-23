import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrementCount,
  incrementCount,
  resetCount,
} from "../react-redux/Actions";
const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  console.log(count);
  const increment = () => {
    dispatch(incrementCount());
  };
  const decrement = () => {
    dispatch(decrementCount());
  };
  const reset = () => {
    dispatch(resetCount());
  };
  return (
    <>
      <div>
        <h1>Welcome to counter app.</h1>
        <h3>Count : {count} </h3>
        <div>
          <button
            onClick={increment}
            style={{
              padding: ".5rem",
              outline: "none",
              borderRadius: "10px",
              fontSize: "1.3rem",
              marginRight: "1rem",
              cursor: "pointer",
            }}
          >
            Increment
          </button>
          <button
            onClick={decrement}
            style={{
              padding: ".5rem",
              outline: "none",
              borderRadius: "10px",
              fontSize: "1.3rem",
              marginLeft: "1rem",
              cursor: "pointer",
            }}
          >
            Decrement
          </button>
          <button
            onClick={reset}
            style={{
              padding: ".5rem",
              outline: "none",
              borderRadius: "10px",
              fontSize: "1.3rem",
              marginLeft: "1rem",
              cursor: "pointer",
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
