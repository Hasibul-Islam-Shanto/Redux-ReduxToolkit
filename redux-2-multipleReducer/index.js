const { createStore, combineReducers } = require("redux");

//vaiable define..
const get_product = "get_product";
const add_product = "add_product";
const get_cart = "get_cart";
const add_cart = "add_cart";

// initialize the states...
const initialProductState = {
  product: ["pen", "paper"],
  numberProduct: 2,
};
const initialCartState = {
  cart: ["pen"],
  numberCart: 1,
};

// Actions.
const getProductAction = () => {
  return {
    type: get_product,
  };
};
const addProductAction = (product) => {
  return {
    type: add_product,
    payload: product,
  };
};
const getCartAction = () => {
  return {
    type: get_cart,
  };
};
const addCartAction = (cart) => {
  return {
    type: add_cart,
    payload: cart,
  };
};

// Reducers..
const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case get_product:
      return {
        ...state,
      };
    case add_product:
      return {
        product: [...state.product, action.payload],
        numberProduct : state.numberProduct + 1,
      };
    default:
      return state;
  }
};
const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case get_cart:
      return {
        ...state,
      };
    case add_cart:
      return {
        product: [...state.cart , action.payload],
        numberCart: state.numberCart + 1,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  productR: productReducer,
  cartR: cartReducer,
});

// store ...
const store = createStore(rootReducer);
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(getProductAction());
store.dispatch(addProductAction("calculator"));
store.dispatch(getCartAction());
store.dispatch(addCartAction("calculator"));
