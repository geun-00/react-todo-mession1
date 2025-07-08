import { useTodos } from "./hooks/useTodos";
import TodoList from "./components/TodoList";
import TodoWriteForm from "./components/TodoWriteForm";
import Header from "./components/Header";

function App() {
  const { todos, addTodo, removeTodo, toggleTodo } = useTodos();

  return (
    <>
      <Header />
      <div className="mb-12">
        <TodoWriteForm addTodo={addTodo} />
      </div>
      <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
    </>
  );
}

export default App;
