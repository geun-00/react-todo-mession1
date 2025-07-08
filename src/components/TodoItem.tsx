import { format } from "date-fns";

function TodoItem({ todo, removeTodo, toggleTodo }) {
  return (
    <tr
      className={
        "border-b hover:bg-gray-50 transition" +
        (todo.checked ? " line-through text-gray-400" : " text-gray-800")
      }
    >
      <td className="py-2 border border-gray-300">{todo.id}</td>
      <td className="py-2 text-left px-2 border border-gray-300">
        {todo.text}
      </td>
      <td className="py-2 border border-gray-300">
        {format(todo.createdAt, "yyyy.MM.dd")}
      </td>
      <td className="py-2 border border-gray-300">
        <input
          type="checkbox"
          onChange={() => toggleTodo(todo.id)}
          checked={todo.checked}
          className="w-5 h-5 accent-blue-500 cursor-pointer"
        />
      </td>
      <td className="py-2 border border-gray-300">
        <button
          onClick={() => removeTodo(todo.id)}
          className="px-2 py-1 rounded text-red-500 hover:bg-red-100 transition"
          aria-label="삭제"
        >
          X
        </button>
      </td>
    </tr>
  );
}

export default TodoItem;
