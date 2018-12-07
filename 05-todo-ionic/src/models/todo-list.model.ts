import { TodoItem } from './todo-item.model';

export class TodoList {
    id: number;
    title: string;
    createdDate: Date;
    completedDate: Date;
    completed: boolean;
    items: TodoItem[];

    constructor (title) {
        this.id = new Date().getTime();
        this.title = title;
        this.createdDate = new Date();
        this.completed = false;
        this.items = [];
    }
}