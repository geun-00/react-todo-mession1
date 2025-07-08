import { FormEvent } from "react";

function TodoWriteForm({ addTodo }) {
  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.todo as HTMLInputElement;

    if (input.value.trim() === "") {
      alert("할 일을 입력해주세요.");
      input.focus();
      return;
    }

    addTodo(input.value);
    form.reset(); // 입력값 초기화
  };

  return (
    <form
      onSubmit={handleOnSubmit}
      className="flex gap-2 max-w-xl mx-auto mt-10 mb-20"
    >
      <input
        type="text"
        name="todo"
        className="flex-1 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="할 일을 입력하세요"
        autoComplete="off"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        등록
      </button>
    </form>
  );
}

export default TodoWriteForm;
