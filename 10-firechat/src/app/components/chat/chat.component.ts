import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../providders/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent implements OnInit {
  message = '';
  element: any;

  constructor(public _cs: ChatService) {
    this._cs.loadMessages().subscribe(() => {
      setTimeout(() => {
        this.element.scrollTop = this.element.scrollHeight;
      }, 20);
    });
  }

  sendMessage () {
    if (this.message === '') {
      return;
    }

    this._cs.sendMessage(this.message)
      .then(() => {
        this.message = '';

      })
      .catch((err) => {
        console.error('Error sending message...', err);
      });
  }

  ngOnInit () {
    this.element = document.getElementById('app-mensajes');
  }
}
