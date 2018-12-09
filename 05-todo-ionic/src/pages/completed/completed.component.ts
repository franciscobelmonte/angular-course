import { Component } from "@angular/core";
import { TodoService } from '../../services/todo.service';
import { TodoList } from "../../models";

@Component({
    selector: 'page-completed',
    templateUrl: 'completed.component.html'
})
export class CompletedPage {
    
    constructor (public todoService: TodoService) {

    }

    showList (list: TodoList) {
        console.log(list);
    }
}

