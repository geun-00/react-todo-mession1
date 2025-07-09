import TodoItem from "./TodoItem";
import {Todo} from "../types/todo";

interface TodoListProps {
  todos: Todo[];
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
  editTodo: (id: number, text: string) => void;
}

function TodoList({ todos, removeTodo, toggleTodo, editTodo }: TodoListProps) {
  return (
    <div className="max-w-xl mx-auto mt-6 bg-white rounded-lg shadow overflow-hidden">
      <table className="w-full text-center border border-gray-300 border-collapse">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 border border-gray-300">No.</th>
            <th className="py-2 border border-gray-300">내용</th>
            <th className="py-2 border border-gray-300">등록일</th>
            <th className="py-2 border border-gray-300">완료</th>
            <th className="py-2 border border-gray-300">삭제</th>
            <th className="py-2 border border-gray-300">수정</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
              editTodo={editTodo}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TodoList;
