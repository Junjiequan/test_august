import React, { useState } from "react";
import TimePicker from "react-time-picker";
import DatePicker from "react-date-picker";
import * as C_TODO from "./CreateTodoElements";
import { useDispatch, useSelector } from "react-redux";
import { empty, success, exist } from "../../utilities/notifications";
import { addTodo } from "../../reducer/todoSlice";
import type { RootState } from "../../reducer/store";

const CreateTodo = () => {
  const todos = useSelector((state: RootState) => state.todos.todoList);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState<any>("23:00");
  const dispatch = useDispatch();

  const month =
    date === null
      ? "unset"
      : date.toLocaleString("default", { month: "short" });
  const day = date === null ? " " : date.getDate();

  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    const target = e.currentTarget.title as any;
    const title = target.value.trim();
    const todoExist = todos.find((item) => item.title === title);
    if (title === "") {
      empty();
    } else if (todoExist) {
      exist();
    } else {
      dispatch(
        addTodo({
          id: 1,
          title: title,
          date: `${month} ${day}`,
          time: time,
        })
      );
      success();
      target.value = "";
    }
  };
  return (
    <C_TODO.Form id="create-todos" onSubmit={handleSubmit}>
      <C_TODO.InputWrapper>
        <C_TODO.Input
          type="text"
          name="title"
          placeholder="type here"
          aria-label="create todo"
          aria-labelledby="submit-button"
        />
        <C_TODO.CalendarWrapper>
          <DatePicker
            onChange={setDate}
            value={date}
            minDate={new Date()}
            aria-label="select date"
          />
          <TimePicker
            onChange={setTime}
            value={time}
            aria-label="select time"
          />
        </C_TODO.CalendarWrapper>
      </C_TODO.InputWrapper>
      <C_TODO.AddBtn
        form="create-todos"
        aria-controls="create-todos"
        id="submit-button"
      >
        <C_TODO.Icon />
      </C_TODO.AddBtn>
    </C_TODO.Form>
  );
};

export default CreateTodo;
