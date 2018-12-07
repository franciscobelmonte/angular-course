import { Component } from "@angular/core";
import { TodoService } from "../../services/todo.service";

@Component({
    selector: 'page-pending',
    templateUrl: 'pending.component.html'
})
export class PendingPage {
    
    constructor (private todoService: TodoService ) {

    }
}
