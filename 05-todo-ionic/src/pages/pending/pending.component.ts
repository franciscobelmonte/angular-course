import { Component } from "@angular/core";
import { TodoService } from "../../services/todo.service";
import { TodoList } from '../../models/todo-list.model';

@Component({
    selector: 'page-pending',
    templateUrl: 'pending.component.html'
})
export class PendingPage {
    
    constructor (public todoService: TodoService ) {

    }

    showList (list: TodoList) {
        console.log(list);
    }
}
