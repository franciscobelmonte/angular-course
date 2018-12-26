import { Component } from "@angular/core";
import { TodoService } from "../../services/todo.service";
import { TodoList } from '../../models/todo-list.model';
import { NavController, AlertController } from "ionic-angular";
import { AddListPage } from '../add-list/add-list.component';

@Component({
    selector: 'page-pending',
    templateUrl: 'pending.component.html'
})
export class PendingPage {
    
    constructor (
        public todoService: TodoService, 
        private navCtrl: NavController,
        private alertCtrl: AlertController
    ) {

    }

    showList (list: TodoList) {
        this.navCtrl.push(AddListPage, {
            title: list.title,
            list: list
        });
    }

    routeToAddListPage () {
        const alert = this.alertCtrl.create({
            title: 'New list',
            message: 'List name',
            inputs: [{
                name: 'title',
                placeholder: 'List name...'
            }],
            buttons: [{
                text: 'Cancel',
            }, {
                text: 'Add',
                handler: form => {
                    if (form.title.length === 0) {
                        return;
                    }
                    this.navCtrl.push(AddListPage, {
                        title: form.title
                    });
                }
            }]
        });

        alert.present();
    }
}
