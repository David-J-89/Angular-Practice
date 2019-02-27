import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import * as firebase from 'firebase/app';

import { ChatMessage } from '../models/chat-message.model';


@Injectable({
  providedIn: 'root'
})
export class ChatService {
  user: any;
   // setting up the chatMessages object.
  chatMessages: FirebaseListObservable<ChatMessage[]>;
  chatMessage: ChatMessage;
  userName: Observable<string>;

  constructor(
    // inject the services so that we can use them.
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth
  ) {
    // subscribe to the authstate observable.
    this.afAuth.authState.subscribe(auth => {
      if(auth !== undefined && auth !== null){
        this.user = auth;
      }
    });
   }

  // structure of the sendMessage method.
  sendMessage(msg: string) { 
    const timestamp = this.getTimeStamp();
    const email = this.user.email;
    this.chatMessages = this.getMessages();
    this.chatMessages.push({
      message: msg,
      timeSent: timestamp,
      userName: this.userName,
      email: email });
  }
}
