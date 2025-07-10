import { useEffect, useRef, useState } from "react";
import { getItem, setItem } from "../util/storage";
import {defaultTodos, Todo} from "../types/todo";
import {getCurrentISOString} from "../util/DateManager";

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>(() => {

    const storedTodos = getItem<Todo[]>("todos", [] as Todo[]);

      // localStorage에 저장된 데이터가 있으면 그대로 사용
      if (storedTodos.length > 0) {
          return storedTodos;
      }

      // 없으면 기본값 사용
      return defaultTodos;

  });

  // todos 변경 시 localStorage 자동 저장
  useEffect(() => {
    setItem("todos", todos);
  }, [todos]);

  const lastId = useRef<number>(todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1);

    //할일 추가
  const addTodo = (text: string) => {
    const todo = {
      id: lastId.current,
      text,
      checked: false,
      createdAt: getCurrentISOString(),
    };

    setTodos([...todos, todo]);
    lastId.current++;
  };

  //할일 삭제
  const removeTodo = (selectedId: number) => {
    // 1. 해당 id를 가진 할 일 삭제
    let filterTodos = todos.filter((todo) => todo.id !== selectedId);

    // 2. 삭제된 id보다 큰 id를 가진 할 일들의 id를 1씩 감소
    filterTodos = filterTodos.map((todo) =>
      todo.id > selectedId ? { ...todo, id: todo.id - 1 } : todo
    );

    setTodos(filterTodos);

    // lastId도 갱신
    const maxId =
      filterTodos.length > 0
        ? Math.max(...filterTodos.map((t) => t.id))
        : 0;
    lastId.current = maxId + 1;
  };

  //할일 체크 토글
  const toggleTodo = (selectedId: number) => {
    const updateTodos = todos.map((todo) =>
      todo.id == selectedId ? { ...todo, checked: !todo.checked } : todo
    );
    setTodos(updateTodos);
  };

  //할일 텍스트 수정
  const editTodo = (selectedId: number, newText: string) => {
    const updateTodos = todos.map((todo) =>
      todo.id === selectedId ? { ...todo, text: newText } : todo
    );
    setTodos(updateTodos);
  };

  return { todos, addTodo, removeTodo, toggleTodo, editTodo };
}
