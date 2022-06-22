// Incremetn decrement using Redux.......

const { createStore } = require("redux");
// defining constant....
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// initialize state...
const initialState = {
  count: 0,
};

// Action object type,paylod...
const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};
const decrementCounter = () => {
  return {
    type: DECREMENT,
  };
};

// creating reducer for counter........
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      break;
  }
};

// create store...
// store's functions - getState(), dispatch(), subscribe()

// createStore will store our actions ...
const store = createStore(counterReducer)
store.subscribe(()=>{
    console.log(store.getState())
})

// dispatch actions...
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(decrementCounter());
