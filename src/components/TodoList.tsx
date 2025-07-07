import { Todo } from "../hooks/useTodos";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

function TodoList({ todos, removeTodo, toggleTodo }: TodoListProps) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
