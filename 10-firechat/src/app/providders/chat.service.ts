import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';


import { Message } from '../model/message.interface';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private collection: AngularFirestoreCollection<Message>;

  chats: Message[] = [];
  user: any = {};

  constructor(private afs: AngularFirestore, public afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
      if (!user) {
        return;
      }

      this.user.name = user.displayName;
      this.user.uid = user.uid;
    });
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

  login(provider: string) {
    if (provider === 'google') {
      this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    } else if (provider === 'twitter') {
      this.afAuth.auth.signInWithPopup(new auth.TwitterAuthProvider());
    }
  }

  logout() {
    this.user = {};
    this.afAuth.auth.signOut();
  }

}
