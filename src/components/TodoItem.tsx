function TodoItem({ todo, removeTodo, toggleTodo }) {
  return (
    <li>
      <input
        type="checkbox"
        onChange={() => toggleTodo(todo.id)}
        checked={todo.checked}
      />
      {todo.id}. {todo.text}
      <button onClick={() => removeTodo(todo.id)}>X</button>
    </li>
  );
}

export default TodoItem;
