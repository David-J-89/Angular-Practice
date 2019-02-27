import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service'; //the chat service will handle all communication with firebase db.

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.css']
})
export class ChatFormComponent implements OnInit {
  message: string; // defining message property.

  constructor(private chat: ChatService) { } // use dependency injection to put a reference of chatservice in our constructor.

  ngOnInit() {
  }

  send() {
    this.chat.sendMessage(this.message); // binding sendMessage to this.message.
  }

  handleSubmit(event){ //tied to the keydown event.
      if (event.keyCode === 13) {
        this.send();
      }
  }

}
