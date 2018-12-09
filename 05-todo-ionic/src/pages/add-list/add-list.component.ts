import { Component } from "@angular/core";
import { TodoService } from "../../services/todo.service";
import { TodoList } from '../../models/todo-list.model';

@Component({
    selector: 'page-add-list',
    templateUrl: 'add-list.component.html'
})
export class AddListPage {

    constructor(public todoService: TodoService) {

    }

}
