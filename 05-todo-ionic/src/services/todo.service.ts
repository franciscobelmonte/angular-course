import { Injectable } from "@angular/core";

import { TodoList } from "../models";

@Injectable()
export class TodoService {
    
    lists: TodoList[] = [];

    constructor () {
        const list1 = new TodoList('Search for infinity gems');
        const list2 = new TodoList('Heroes to be defeated');

        this.lists.push(list1, list2);
    }

}