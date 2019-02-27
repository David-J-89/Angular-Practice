import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import * as firebase from 'firebase/app';

import { ChatMessage } from '../models.chat-message.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() { }
}
