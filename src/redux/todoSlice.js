import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    { id: 1, discription: "Home work", isDone: false },
    { id: 2, discription: "Course", isDone: true },
    { id: 3, discription: "GYM", isDone: false },
  ],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    doTodo: (state, action) => {
      state.todos.find((todo) => todo.id === action.payload.id).isDone = true;
    },
    editTodo: (state, action) => {
      state.todos.find((todo) => todo.id === action.payload[0].id).discription =
        action.payload[1];
    },
  },
});

export const { addTodo, doTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
