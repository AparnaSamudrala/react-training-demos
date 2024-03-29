import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import employeeReducer from "./reducers";

const store = createStore(employeeReducer, applyMiddleware(thunk));

export default store;