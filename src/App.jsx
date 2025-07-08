import { useTodos } from "./hooks/useTodos";
import TodoList from "./components/TodoList";
import TodoWriteForm from "./components/TodoWriteForm";
import Header from "./components/Header";

function App() {
  const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodos();

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <Header />
      <div className="max-w-xl mx-auto">
        <TodoWriteForm addTodo={addTodo} />
        <div className="h-12" />
        <TodoList
          todos={todos}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
          editTodo={editTodo}
        />
      </div>
    </div>
  );
}

export default App;
