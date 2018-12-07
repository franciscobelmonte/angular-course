export class TodoItem {
    description: string;
    completed: boolean;

    constructor (description) {
        this.description = description;
        this.completed = false;
    }
}