import { FormEvent, useState, useRef, useEffect } from "react";

function TodoWriteForm({ addTodo }) {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value.trim() === "") {
      alert("할 일을 입력해주세요.");
      // 알림 창이 닫힌 후 포커스가 input으로 이동
      inputRef.current?.focus();
      return;
    }
    addTodo(value);
    setValue(""); // 입력값 초기화
    // 할 일 추가 후 다시 input으로 포커스
    inputRef.current?.focus();
  };

  // 컴포넌트가 마운트될 때 자동으로 input에 포커스
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <form
      onSubmit={handleOnSubmit}
      className="flex gap-2 max-w-xl mx-auto mt-10"
    >
      <input
        ref={inputRef}
        type="text"
        name="todo"
        className="flex-1 px-4 py-3 border rounded-full bg-white shadow focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400 text-lg"
        placeholder="할 일을 입력하세요"
        autoComplete="off"
        value={value}
        onChange={(e) => setValue(e.target.value)}
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