import { useState } from "react";
import TodoCounter from "./components/TodoCounter/TodoCounter";
import TodoSearch from "./components/TodoSearch/TodoSearch";
import TodoList from "./components/TodoList/TodoList";
import TodoItem from "./components/TodoItem/TodoItem";
import CreateTodoButton from "./components/CreateTodoButtom/CreateTodoButton";
import "./styles/global.scss";

const defaultTodos = [
  { text: "cortar cebolla", completed: true },
  { text: "mercar", completed: false },
  { text: "hacer ensalada", completed: true },
  { text: "terminar el taller", completed: false },
];

const App = () => {
  const [todos, setTodos] = useState(defaultTodos);
  const [searchValue, setSearchValue] = useState("");

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const
    return todo.text.toLowerCase().includes(searchValue.toLowerCase());
  });

  console.log("Los usuarios buscan todos de " + searchValue);

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
};

export default App;
