import { useTodos } from "./hooks/useTodos";
import TodoList from "./components/TodoList";
import TodoWriteForm from "./components/TodoWriteForm";

function App() {
  const { todos, addTodo, removeTodo, toggleTodo } = useTodos();

  return (
    <>
      <TodoWriteForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        removeTodo={removeTodo}
        toggleTodo={toggleTodo}
      />
    </>
  );
}

export default App;
