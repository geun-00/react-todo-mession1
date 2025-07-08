import { useEffect, useRef, useState } from "react";
import { getItem, setItem } from "../util/storage";

export interface Todo {
  id: number;
  text: string;
  checked: boolean;
  createdAt: Date;
}

type storedTodo = Omit<Todo, "createdAt"> & { createdAt: string };

export function useTodos() {
  const lastId = useRef<number>(4);

  const [todos, setTodos] = useState<Todo[]>(() => {
    // 앱 최초 로딩 시 localStorage 불러오기
    const defaultTodos: Todo[] = [
      { id: 1, text: "운동", checked: false, createdAt: new Date() },
      { id: 2, text: "코딩", checked: false, createdAt: new Date() },
      { id: 3, text: "공부", checked: true, createdAt: new Date() },
    ];

    const storedTodos = getItem<storedTodo[]>("todos", [] as storedTodo[]);

    // 가져온 값이 있으면 Date 타입 복원
    if (storedTodos.length > 0) {
      return storedTodos.map((todo) => ({
        ...todo,
        createdAt: new Date(todo.createdAt),
      }));
    }

    return defaultTodos;
  });

  // todos 변경 시 localStorage 자동 저장
  useEffect(() => {
    setItem("todos", todos);
  }, [todos]);

  //할일 추가
  const addTodo = (text: string) => {
    const todo = {
      id: lastId.current,
      text,
      checked: false,
      createdAt: new Date(),
    };

    setTodos([...todos, todo]);
    lastId.current++;
  };

  //할일 삭제
  const removeTodo = (selectedId: number) => {
    const filterTodos = todos.filter((todo) => todo.id !== selectedId);
    setTodos(filterTodos);

    // 남은 todos 중 가장 큰 id + 1로 lastId 갱신
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

  return { todos, addTodo, removeTodo, toggleTodo };
}
