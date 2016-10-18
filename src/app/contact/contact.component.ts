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

  model = new Message('Andrew', 'meilingandrew@gmail.com', 'Subject', 'We want to hire you and pay you a TON of money', 'Fun fact');
	
  submitted = false;

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  onSubmit() { this.submitted = true; }

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
