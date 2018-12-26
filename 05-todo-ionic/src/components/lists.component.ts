import { Component, Input } from "@angular/core";
import { NavController, AlertController, ItemSliding } from "ionic-angular";
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
        private navCtrl: NavController,
        private alertCtrl: AlertController
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

    editList(list: TodoList, slidingItem: ItemSliding) {
        slidingItem.close();
        const alert = this.alertCtrl.create({
            title: 'Edit name list',
            message: 'Edit name list',
            inputs: [{
                name: 'title',
                placeholder: 'List name...',
                value: list.title
            }],
            buttons: [{
                text: 'Cancel',
            }, {
                text: 'Save',
                handler: form => {
                    if (form.title.length === 0) {
                        return;
                    }
                    list.title = form.title;
                    this.todoService.saveListsToStorage();
                }
            }]
        });

        alert.present();
    }
}

