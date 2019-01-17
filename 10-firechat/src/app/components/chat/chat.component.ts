import { Component } from '@angular/core';
import { ChatService } from '../../providders/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent {
  message = '';

  constructor(public _cs: ChatService) {
    this._cs.loadMessages().subscribe((messages: any[]) => {
      console.log(messages);
    });
  }

  sendMessage () {
    console.log(this.message);
  }
}
