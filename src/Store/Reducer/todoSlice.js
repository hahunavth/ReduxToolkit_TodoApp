import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import axios from "axios";

const local = "http://127.0.0.1:3001";
const heroku = "https://hahunavth-rails-api.herokuapp.com";
const hostname = heroku;

export const getTodo = createAsyncThunk("todos/todosFetched", async () => {
  // const res = await axios.get(
  //   "https://jsonplaceholder.typicode.com/todos?_limit=5"
  // );
  const res = await axios.get(hostname + "/todos");
  return res.data;
});

export const addTodo = createAsyncThunk("todos/todosAdded", async (title) => {
  const newTodo = {
    id: nanoid(),
    title: title,
    completed: false,
  };
  // await axios.get("https://jsonplaceholder.typicode.com/todos", newTodo);
  await axios.post(hostname + "/todos", newTodo).then((res) => {
    // console.log("add todo return : ");
    // console.log(res);
    newTodo.id = res.data.id;
  });
  return newTodo;
});

export const removeTodo = createAsyncThunk("todos/todosRemove", async (id) => {
  const deleteTodo = {
    id: id,
  };
  // await axios.get("https://jsonplaceholder.typicode.com/todos", newTodo);
  await axios.delete(hostname + "/todos/" + id, deleteTodo);

  return { id };
});

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    allTodos: [],
  },
  reducers: {
    addTodos: {
      reducer: (state, action) => {
        state.allTodos.unshift(action.payload);
      },
      prepare: (title) => {
        return {
          payload: { id: nanoid(), title: title, completed: false },
        };
      },
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
    },
  },
  extraReducers: {
    // Get all todos
    [getTodo.pending]: (state, action) => {
      console.log("Fetching todos from backend ....");
    },
    // [getTodo.rejected]: (state, action) => {
    //   console.log("Rejected");
    //   state.allTodos = [];
    //   // return new Promise(() => {});
    // },
    [getTodo.fulfilled]: (state, action) => {
      console.log("Done");
      state.allTodos = action.payload;
    },
    [addTodo.pending]: (state, action) => {
      console.log("try add todo");
    },
    [addTodo.fulfilled]: (state, action) => {
      const title = action.payload;
      const id = action.payload.id;
      state.allTodos.unshift(title);
    },
    [removeTodo.pending]: (state, action) => {
      console.log("try delete todo");
    },
    [removeTodo.fulfilled]: (state, action) => {
      const id = action.payload.id;
      state.allTodos = state.allTodos.filter((todo) => {
        return todo.id !== id;
      });
    },
  },
});

//Export selector
export const todosSelector = (state) => state.allTodos;
//Export action
export const { addTodos, removeTodos, markComplete } = todosSlice.actions;
//Export reducer
export default todosSlice.reducer;
