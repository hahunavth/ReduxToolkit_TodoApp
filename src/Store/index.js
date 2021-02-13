import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import todosReducer from "./Reducer/todoSlice";

const store = configureStore({ reducer: todosReducer });

export default store;
