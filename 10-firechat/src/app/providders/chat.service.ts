import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

import { Message } from '../model/message.interface';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private collection: AngularFirestoreCollection<Message>;

  chats: Message[] = [];

  constructor(private afs: AngularFirestore) {
  }

  loadMessages () {
    this.collection = this.afs.collection<Message>('chats', ref => ref.orderBy('date', 'desc').limit(5));
    return this.collection.valueChanges().pipe(
      map((messages: Message[]) => {
        this.chats = [];
        for (const message of messages) {
          this.chats.unshift(message);
        }
      })
    );
  }

  sendMessage (message: string) {
    const chat: Message = {
      name: 'Francisco',
      message: message,
      date: new Date().getTime()
    };

    return this.collection.add(chat);
  }

}
