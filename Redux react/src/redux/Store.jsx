import { createStore } from "redux";
import BookReducer from "./BookRducer";

const store=createStore(BookReducer)

export default store;