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
    <>
      <form onSubmit={handleOnSubmit}>
        <input type="text" name="todo" />
        <button type="submit">등록</button>
      </form>
    </>
  );
}

export default TodoWriteForm;
