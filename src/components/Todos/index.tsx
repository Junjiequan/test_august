import * as TODOS from "./TodosElements";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, toggleTodo } from "../../reducer/todoSlice";
import type { Todo } from "../../reducer/todoSlice";
import type { RootState } from "../../reducer/store";
import CreateTodo from "../CreateTodo";

// enum -. type 9/28
// stringliteral -> type

const Todos = () => {
  const [filter, setFilter] = useState("todo");
  const filteredTodos: Todo[] = useSelector((state: RootState) => {
    switch (filter) {
      case "todo":
        return state.todos.todoList;
      case "doing":
        return state.todos.todoList.filter((todo) => todo.completed === false);
      case "completed":
        return state.todos.todoList.filter((todo) => todo.completed === true);
      default:
        return state.todos.todoList;
    }
  });
  const dispatch = useDispatch();

  const handleCheck = (todoId: number) => {
    dispatch(toggleTodo(todoId));
  };
  const handleRemove = (todoId: number) => {
    dispatch(removeTodo(todoId));
  };
  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.currentTarget.value);
  };
  const filters = ["Todo", "Doing", "Completed"];
  const renderOption = (item: string, index: number) => {
    return (
      <TODOS.Option key={index} value={item.toLowerCase()}>
        {item}
      </TODOS.Option>
    );
  };
  const renderTodo = (item: Todo, index: number) => {
    return (
      <TODOS.Li key={index} data-filter={filter} data-complete={item.completed}>
        <TODOS.Check
          type="checkbox"
          checked={item.completed}
          onChange={() => handleCheck(item.id)}
        />
        <TODOS.TodoInfo>
          <TODOS.TodoInput value={item.title} disabled />
          <TODOS.TodoDeadline>
            <TODOS.Span>Deadline: </TODOS.Span>
            {item.date} &nbsp; {item.time}
          </TODOS.TodoDeadline>
        </TODOS.TodoInfo>
        <TODOS.RemoveBtn
          type="button"
          onClick={() => handleRemove(item.id)}
          aria-label="remove todo"
        >
          <TODOS.Icon />
        </TODOS.RemoveBtn>
      </TODOS.Li>
    );
  };
  return (
    <TODOS.Container>
      <TODOS.Wrapper>
        <TODOS.Title>
          <TODOS.H1>TODO</TODOS.H1>
          <TODOS.Filter
            name="filter"
            id="filter"
            aria-label="todo filter"
            onChange={handleFilter}
          >
            {filters.map(renderOption)}
          </TODOS.Filter>
        </TODOS.Title>
        <CreateTodo />
        <TODOS.Ul>{filteredTodos.map(renderTodo)}</TODOS.Ul>
      </TODOS.Wrapper>
    </TODOS.Container>
  );
};

export default Todos;
