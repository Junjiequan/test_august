import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Todo = {
  id: number;
  title: string;
  date: string;
  time: string;
  completed: boolean;
  pending: boolean;
};

export type TodosSliceState = {
  todoList: Todo[];
};

export type Payload = {
  id: number;
  title: string;
  date: string;
  time: string;
};

const initialState: TodosSliceState = {
  todoList: [
    {
      id: 1,
      title: "Finish todo test",
      date: "25 Aug",
      time: "",
      completed: true,
      pending: false,
    },
    {
      id: 2,
      title: "todo2",
      date: "7 September",
      time: "12:00",
      completed: false,
      pending: true,
    },
    {
      id: 3,
      title: "todo3",
      date: "unset",
      time: "",
      completed: false,
      pending: true,
    },
  ],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    localStore: (_, action) => {
      return action.payload;
    },
    addTodo: (state, action: PayloadAction<Payload>) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        date: action.payload.date,
        time: action.payload.time,
        completed: false,
        pending: true,
      };
      state.todoList = [...state.todoList, newTodo];
    },
    removeTodo: (state, action: PayloadAction<Number>) => {
      const items: Todo[] = state.todoList.filter(
        (todo: Todo) => todo.id !== action.payload
      );
      state.todoList = items;
    },
    toggleTodo: (state: TodosSliceState, action: PayloadAction<Number>) => {
      const completedTodo = state.todoList.map((todo: Todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed, pending: !todo.pending }
          : { ...todo }
      );

      state.todoList = completedTodo;
    },
  },
});

export const { localStore, addTodo, removeTodo, toggleTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
