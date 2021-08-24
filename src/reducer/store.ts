import { configureStore } from "@reduxjs/toolkit";
import todoSliceReducer from "./todoSlice";
import throttle from "lodash/throttle";
import { localStore } from "./todoSlice";

const saveState = (state: any) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (err) {
    console.log("save data failed");
  }
};
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) return undefined;

    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};
const persistedState = loadState();

export const store = configureStore({
  reducer: {
    todos: todoSliceReducer,
  },
});
if (persistedState) {
  store.dispatch(localStore(persistedState));
}
store.subscribe(
  throttle(() => {
    saveState({
      todoList: store.getState().todos.todoList,
    });
  }, 1000)
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
