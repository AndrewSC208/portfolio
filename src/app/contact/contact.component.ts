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
  message: Message;
  model = new Message("", "", "", "", "");
  active = true;
  submitted = false;
  mode = 'Observable';

  constructor(private messageService: MessageService) {}

  private newMessage() {
    this.addMessage(this.model);
    this.model = new Message("", "", "", "", "");
    this.active = false;
    setTimeout(() => this.active = true, 0)
  }
	
  private getMessages() {
    this.messageService.getMessages()
      .subscribe(
        messages => this.messages = messages,
        error => this.errorMessage = <any>error);
  }

  private addMessage(message: Message): Observable<Message> {

    if(!message) { return; }

    this.messageService.postMessage(message)
      .subscribe(
        message => this.messages.push(message),
        error => this.errorMessage = <any>error);
  }

  onSubmit() {
    this.submitted = true; 
  }

  ngOnInit() { 
    console.log(this.getMessages());
  }

}
