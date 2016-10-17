import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { MessageService } from './message.service';
import { Message } from './message';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers: [MessageService],
})
export class ContactComponent implements OnInit {

	messages;
	message: Message;
	postMessageRes: string;
  title:string = "Send a Message";
  photo:string = "https://res.cloudinary.com/drkmakxkk/image/upload/v1473479255/space2-bg_lztkmp.jpg";

  constructor(private _httpMessageService: MessageService) {
  	// I think these is a better way to build another message object
    this.message = { 
      sender_name : "", 
      email: "", 
      subject: "", 
      message_body: "", 
      fun_fact: ""
    };
  }

  ngOnInit() {
  
  }

  postMessage() {
  	// this._httpMessageService.postMessage( this.message )
  	// .subscribe(
  	//   // set the reg value for res:
   //    res   => this.postMessageRes = res,
  	//   error => console.log("and error occured"),
  	//   ()    =>  this.message = { 
   //                sender_name : "", 
   //                email: "", 
   //                subject: "", 
   //                message_body: "", 
   //                fun_fact: ""
   //              }
   //   )
  }

}
