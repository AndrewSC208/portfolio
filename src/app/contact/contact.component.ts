import { Component, OnInit } from '@angular/core';
import { MessageService } from './message.service';
import { Message } from './message';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers: [MessageService],
})
export class ContactComponent implements OnInit {
  errorMessage: string;
  messages: Message[];
  mode = 'Observable';
  message: Message;
	
  constructor(private messageService: MessageService) {}

  ngOnInit() { 
    this.getMessages();
  }

  getMessages() {
    this.messageService.getMessages()
      .subscribe(
        messages => this.messages = messages,
        error => this.errorMessage = <any>error);
  }

  addMessage(message: Message): Observable<Message> {

    if(!message) { return; }

    this.messageService.postMessage(message)
      .subscribe(
        message => this.messages.push(message),
        error => this.errorMessage = <any>error);
  }

}
