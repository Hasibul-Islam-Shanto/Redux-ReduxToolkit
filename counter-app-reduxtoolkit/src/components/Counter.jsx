import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementby2, reset,  } from "../features/counterSlice";
const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  return (
    <div>
      <h1>Welcome to counter app.</h1>
      <h3>Count : {count} </h3>
      <div>
        <button
          onClick={() => dispatch(increment())}
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
          onClick={() => dispatch(decrement())}
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
          onClick={() => dispatch(reset())}
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
        <button
          onClick={() => dispatch(incrementby2(2))}
          style={{
            padding: ".5rem",
            outline: "none",
            borderRadius: "10px",
            fontSize: "1.3rem",
            marginLeft: "1rem",
            cursor: "pointer",
          }}
        >
          Incrementby-2
        </button>
      </div>
    </div>
  );
};

export default Counter;
