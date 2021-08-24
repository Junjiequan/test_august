import React, { useState } from "react";
import TimePicker from "react-time-picker";
import DatePicker from "react-date-picker";
import * as C_TODO from "./CreateTodoElements";
import "react-calendar/dist/Calendar.css";
import { useDispatch } from "react-redux";
import { empty } from "../../utilities/notifications";
import { addTodo } from "../../reducer/todoSlice";

const CreateTodo = () => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState<any>("23:00");
  const month =
    date === null ? "unset" : date.toLocaleString("default", { month: "long" });
  const day = date === null ? " " : date.getDate();
  const dispatch = useDispatch();
  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    const target = e.currentTarget.title as any;
    const title = target.value;
    e.preventDefault();
    if (title === "") {
      empty();
    } else {
      dispatch(
        addTodo({
          id: 1,
          title: title,
          date: `${month} ${day}`,
          time: time,
        })
      );
    }
  };
  return (
    <C_TODO.Form id="create-todos" onSubmit={handleSubmit}>
      <C_TODO.Input type="text" name="title" />
      <C_TODO.CalendarWrapper>
        <DatePicker onChange={setDate} value={date} />
        <TimePicker onChange={setTime} value={time} />
      </C_TODO.CalendarWrapper>
      <C_TODO.addBtn form="create-todos">create</C_TODO.addBtn>
    </C_TODO.Form>
  );
};

export default CreateTodo;
