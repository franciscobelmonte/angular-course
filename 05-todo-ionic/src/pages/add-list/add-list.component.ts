import { Component } from "@angular/core";
import { NavParams } from "ionic-angular";
import { TodoService } from "../../services/todo.service";
import { TodoList } from '../../models/todo-list.model';

@Component({
    selector: 'page-add-list',
    templateUrl: 'add-list.component.html'
})
export class AddListPage {
    list: TodoList;

    constructor(public todoService: TodoService, private navParams: NavParams) {
        this.list = new TodoList(this.navParams.get('title'));
    }

}
