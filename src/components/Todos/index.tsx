import * as TODOS from "./TodosElements";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../../reducer/todoSlice";
import type { Todo } from "../../reducer/todoSlice";
import type { RootState } from "../../reducer/store";
import CreateTodo from "../CreateTodo";

const Todos = () => {
  const todos = useSelector((state: RootState) => state.todos.todoList);
  const dispatch = useDispatch();

  return (
    <TODOS.Container>
      <TODOS.Wrapper>
        <CreateTodo />
        <ul>
          {todos.map((item: Todo, index: number) => {
            return (
              <li key={item.id}>
                <div>
                  <input value={item.title} disabled />
                  <button onClick={() => dispatch(removeTodo(item.id))}>
                    Remove
                  </button>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  Deadline: {item.time} {item.date}
                </div>
              </li>
            );
          })}
        </ul>
      </TODOS.Wrapper>
    </TODOS.Container>
  );
};

export default Todos;
