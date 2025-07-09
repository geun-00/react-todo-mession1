export interface Todo {
    id: number;
    text: string;
    checked: boolean;
    createdAt: Date;
}

export type StoredTodo = Omit<Todo, "createdAt"> & { createdAt: string };

export const defaultTodos: Todo[] = [
    {id: 1, text: "운동", checked: false, createdAt: new Date()},
    {id: 2, text: "코딩", checked: false, createdAt: new Date()},
    {id: 3, text: "공부", checked: true, createdAt: new Date()},
];