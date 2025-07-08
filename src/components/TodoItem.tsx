import { format } from "date-fns";

function TodoItem({ todo, removeTodo, toggleTodo }) {
  return (
    <li>
      <input
        type="checkbox"
        onChange={() => toggleTodo(todo.id)}
        checked={todo.checked}
      />
      {todo.id}. {todo.text} / {format(todo.createdAt, "yyyy.MM.dd")}{" "}
      <button onClick={() => removeTodo(todo.id)}>X</button>
    </li>
  );
}

export default TodoItem;
