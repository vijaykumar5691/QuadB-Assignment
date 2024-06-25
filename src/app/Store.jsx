import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "../features/TodoSlicer";

const Store = configureStore({
  reducer: {
    todolists: TodoReducer,
  },
});

export default Store;
