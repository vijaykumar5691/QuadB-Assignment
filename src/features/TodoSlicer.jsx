import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: JSON.parse(localStorage.getItem("todoItems") || "[]"),
};
const TodoSlicer = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action) {
      const date = new Date();
      const id = date.getTime();
      state.todos.push({ ...action.payload, id });
      localStorage.setItem("todoItems", JSON.stringify(state.todos));
    },
    deleteTodo(state, action) {
      const deleted = state.todos.filter((todo) => {
        return todo.id !== action.payload;
      });
      state.todos = deleted;
      localStorage.setItem("todoItems", JSON.stringify(state.todos));
    },
    deletAll(state) {
      state.todos = [];
      localStorage.setItem("todoItems", JSON.stringify(state.todos));
    },
    editTodo(state, action) {
      const todoIndex = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      if (todoIndex !== -1) {
        state.todos[todoIndex] = action.payload;
      }
      localStorage.setItem("todoItems", JSON.stringify(state.todos));
    },
  },
});
export const { addTodo, deletAll, editTodo, deleteTodo } = TodoSlicer.actions;
export default TodoSlicer.reducer;
