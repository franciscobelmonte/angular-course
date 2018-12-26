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
        if(this.navParams.get('list')){
            this.list = this.navParams.get('list');
            return;
        }
        
        this.list = new TodoList(this.navParams.get('title'));
        this.todoService.addList(this.list);
    }

    addItem() {
        if(this.itemToAdd.length === 0){
            return;
        }

        const item = new TodoItem(this.itemToAdd);
        this.list.items.push(item);

        this.todoService.saveListsToStorage();
        
        this.itemToAdd = '';
    }

    checkOrUncheckItem(item: TodoItem) {
        item.completed = !item.completed;
    
        const pending = this.list.items.filter(item => {
            return !item.completed
        });

        if(pending.length === 0){
            this.list.completed = true;
            this.list.completedDate = new Date();
        }else{
            this.list.completed = false;
            this.list.completedDate = null;
        }

        this.todoService.saveListsToStorage();
    }

    deleteItem(index: number) {
        this.list.items.splice(index, 1);
        this.todoService.saveListsToStorage();
    } 
}
