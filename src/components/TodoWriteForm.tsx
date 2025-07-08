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
      className="flex gap-2 max-w-xl mx-auto mt-10"
    >
      <input
        type="text"
        name="todo"
        className="flex-1 px-4 py-3 border rounded-full bg-white shadow focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400 text-lg"
        placeholder="할 일을 입력하세요"
        autoComplete="off"
      />
      <button
        type="submit"
        className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition text-lg font-semibold shadow"
      >
        등록
      </button>
    </form>
  );
}

export default TodoWriteForm;
