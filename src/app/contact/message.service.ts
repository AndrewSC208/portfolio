import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Message } from './message';

@Injectable()
export class MessageService {
	/* ++ CLASS VARIABLES ++ */
	private baseURl:  string = 'https://morning-journey-82445.herokuapp.com';
	private tableUrl: string = '/messages';
	message: Message;

	constructor(private http: Http) {}

	/* ++ EXTERNAL CLASS METHODS ++ */
	getMessages() {
  		return this.http.get(this.baseURl + this.tableUrl).map(res => res.json());
  }

  postMessage(message: Message) {
  	
  	let body = JSON.stringify({message});
  	let headers = new Headers({ 'Content-Type': 'application/json' });
  	let options = new RequestOptions({ headers: headers, method: 'post' });

  	return this.http.post(this.baseURl + this.tableUrl, body, options)
      // THIS IS THE RESPONSE FROM THE SERVER
	 		.map(res => res.json())
  		.catch(this.handleError);
  	}

	  /* ++ PRIVATE CLASS METHODS ++ */
  	private handleError (error: Response) {
  		console.error(error);
  		return Observable.throw(error.json().error || 'error');
  	}
}