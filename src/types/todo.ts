import {getCurrentISOString} from "../util/DateManager";

export interface Todo {
    id: number;
    text: string;
    checked: boolean;
    createdAt: string;
}

export const defaultTodos: Todo[] = [
    {id: 1, text: "운동", checked: false, createdAt: getCurrentISOString()},
    {id: 2, text: "코딩", checked: false, createdAt: getCurrentISOString()},
    {id: 3, text: "공부", checked: true, createdAt: getCurrentISOString()},
];