import { useState } from "react";
import { format } from "date-fns";

function TodoItem({ todo, removeTodo, toggleTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
    setEditText(todo.text);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (editText.trim() !== "") {
      editTodo(todo.id, editText.trim());
      setIsEditing(false);
    }
  };

  return (
    <tr className={"border-b hover:bg-gray-50 transition"}>
      <td className="py-2 border border-gray-300">{todo.id}</td>
      <td className="py-2 text-left px-2 border border-gray-300">
        {isEditing ? (
          <form onSubmit={handleEditSubmit} className="flex gap-2 items-center">
            <input
              className="flex-1 px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={editText}
              onChange={e => setEditText(e.target.value)}
              autoFocus
              onBlur={e => {
                // onBlur에서 저장하지 않고, 단순히 편집모드만 종료
                setIsEditing(false);
              }}
              onKeyDown={e => { if (e.key === 'Escape') setIsEditing(false); }}
            />
            <button
              type="submit"
              className="text-blue-500 px-2"
              onMouseDown={e => e.preventDefault()}
            >
              저장
            </button>
          </form>
        ) : (
          <span
            className={
              "inline-block w-full" +
              (todo.checked ? " line-through text-gray-400" : " text-gray-800")
            }
          >
            {todo.text}
          </span>
        )}
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
      <td className="py-2 border border-gray-300">
        {isEditing ? null : (
          <button
            onClick={handleEdit}
            className="px-2 py-1 rounded text-blue-500 hover:bg-blue-100 transition"
          >
            수정
          </button>
        )}
      </td>
    </tr>
  );
}

export default TodoItem;
