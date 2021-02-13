import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import axios from "axios";

export const getTodo = createAsyncThunk("todos/todosFetched", async () => {
  const res = await axios.get(
    "https://jsonplaceholder.typicode.com/todos?_limit=5"
  );
  return res.data;
});

export const addTodo = createAsyncThunk("todos/todosAdded", async (title) => {
  const newTodo = {
    id: nanoid(),
    title: title,
    completed: false
  };
  await axios.get("https://jsonplaceholder.typicode.com/todos", newTodo);
  return newTodo;
});

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    allTodos: []
  },
  reducers: {
    addTodos: {
      reducer: (state, action) => {
        state.allTodos.unshift(action.payload);
      },
      prepare: (title) => {
        return {
          payload: { id: nanoid(), title: title, completed: false }
        };
      }
    },
    removeTodos: (state, action) => {
      const id = action.payload;
      state.allTodos = state.allTodos.filter((todo) => {
        return todo.id !== id;
      });
    },
    markComplete: (state, action) => {
      const id = action.payload;
      state.allTodos = state.allTodos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    }
  },
  extraReducers: {
    // Get all todos
    [getTodo.pending]: (state, action) => {
      console.log("Fetching todos from backend ....");
    },
    [getTodo.fulfilled]: (state, action) => {
      console.log("Done");
      state.allTodos = action.payload;
    },
    [addTodo.pending]: (state, action) => {
      console.log("try add todo");
    },
    [addTodo.fulfilled]: (state, action) => {
      const title = action.payload;
      console.log("added" + title);
      state.allTodos.unshift(title);
    }
  }
});

//Export selector
export const todosSelector = (state) => state.allTodos;
//Export action
export const { addTodos, removeTodos, markComplete } = todosSlice.actions;
//Export reducer
export default todosSlice.reducer;
