import { Component, Input } from "@angular/core";
import { NavController } from "ionic-angular";
import { TodoService } from "../services/todo.service";
import { TodoList } from '../models/todo-list.model';
import { AddListPage } from '../pages/add-list/add-list.component';

@Component({
    selector: 'app-lists',
    templateUrl: 'lists.component.html'
})
export class ListsComponent {
    
    @Input() completed = false;

    constructor(
        public todoService: TodoService,
        private navCtrl: NavController
    ) {

    }

    showList(list: TodoList) {
        this.navCtrl.push(AddListPage, {
            title: list.title,
            list: list
        });
    }

    deleteList(list: TodoList) {
        this.todoService.deleteList(list);
    }
}

