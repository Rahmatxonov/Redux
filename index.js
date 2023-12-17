const redux = require("redux");
const createStore = redux.createStore;

const CAKE_ORDERED = "CAKE_ORDERED";
const ICE_CREAM_ORDERED = "ICE_CREAM_ORDERED";
const CHEESE_CAKE_ORDERED = "CHEESE_CAKE_ORDERED";
const CHOCOLATE_CAKE_ORDERED = "CHOCOLATE_CAKE_ORDERED";

function orderCake() {
  return {
    type: CAKE_ORDERED,
    payload: 1,
  };
}

function orderIceCream() {
  return {
    type: ICE_CREAM_ORDERED,
    payload: 1,
  };
}

function orderCheeseCake() {
  return {
    type: CHEESE_CAKE_ORDERED,
    payload: 1,
  };
}

function orderChocolateCake() {
  return {
    type: CHOCOLATE_CAKE_ORDERED,
    payload: 1,
  };
}

const initialState = {
  numOfCakes: 10,
  numOfIceCream: 20,
  numOfCheeseCake: 30,
  numOfChocolateCake: 40,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };
    case ICE_CREAM_ORDERED:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream + action.payload,
      };
    case CHEESE_CAKE_ORDERED:
      return {
        ...state,
        numOfCheeseCake: state.numOfCheeseCake + action.payload,
      };
    case CHOCOLATE_CAKE_ORDERED:
      return {
        ...state,
        numOfChocolateCake: state.numOfChocolateCake + action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

console.log("initialState", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("Update state", store.getState());
});

store.dispatch(orderCake());
store.dispatch(orderIceCream());
store.dispatch(orderCheeseCake());
store.dispatch(orderChocolateCake());

unsubscribe();
