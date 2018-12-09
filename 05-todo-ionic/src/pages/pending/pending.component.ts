import { Component } from "@angular/core";
import { TodoService } from "../../services/todo.service";
import { TodoList } from '../../models/todo-list.model';
import { NavController } from "ionic-angular";
import { AddListPage } from '../add-list/add-list.component';

@Component({
    selector: 'page-pending',
    templateUrl: 'pending.component.html'
})
export class PendingPage {
    
    constructor (public todoService: TodoService, private navCtrl: NavController ) {

    }

    showList (list: TodoList) {
        console.log(list);
    }

    routeToAddListPage () {
        this.navCtrl.push(AddListPage);
    }
}
