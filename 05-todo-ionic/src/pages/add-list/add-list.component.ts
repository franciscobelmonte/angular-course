import { Component } from "@angular/core";
import { NavParams } from "ionic-angular";
import { TodoService } from "../../services/todo.service";
import { TodoItem, TodoList } from "../../models";

@Component({
    selector: 'page-add-list',
    templateUrl: 'add-list.component.html'
})
export class AddListPage {
    list: TodoList;
    itemToAdd = '';

    constructor(public todoService: TodoService, private navParams: NavParams) {
        this.list = new TodoList(this.navParams.get('title'));
        this.todoService.addList(this.list);
    }

    addItem() {
        if(this.itemToAdd.length === 0){
            return;
        }

        const item = new TodoItem(this.itemToAdd);
        this.list.items.push(item);
        
        this.itemToAdd = '';
    }

    checkOrUncheckItem(item: TodoItem) {
        item.completed = !item.completed;
    }

    deleteItem(index: number) {
        this.list.items.splice(index, 1);
    }
}
