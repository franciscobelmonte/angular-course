import { Injectable } from "@angular/core";

import { TodoList } from "../models";

@Injectable()
export class TodoService {
    
    lists: TodoList[] = [];

    constructor () {
        this.loadListsFromStorage();
    }

    addList(list: TodoList) {
        this.lists.push(list);
        this.saveListsToStorage();
    }

    deleteList(listToDelete: TodoList){
        this.lists = this.lists.filter(list => {
            return list.id != listToDelete.id
        });
        this.saveListsToStorage();
    }

    saveListsToStorage() {
        localStorage.setItem('lists', JSON.stringify(this.lists));
    }

    loadListsFromStorage() {
        if(localStorage.getItem('lists')){
            this.lists = JSON.parse(localStorage.getItem('lists'));
        }
    }

}