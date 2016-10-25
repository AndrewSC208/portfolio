import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Message } from './message';
import { Observable } from 'rxjs/Observable';
import '../rxjs-operators';

@Injectable()
export class MessageService {
  
	private baseURl:  string = 'https://morning-journey-82445.herokuapp.com/api1/message';
  //private baseURl:  string = 'http://localhost:8080/api1/message';

	constructor(private http: Http) {}

	// getMessages(): Observable <Message> {
  //  		return this.http.get(this.baseURl)
  //  			.map(this.extractData)
  //  			.catch(this.handleError);
  //  }

  postMessage(message: Message): Observable <Message> {
  	
  	let body = JSON.stringify(message);
  	let headers = new Headers({ 'Content-Type': 'application/json' });
  	let options = new RequestOptions({ headers: headers, method: 'post' });

  	return this.http.post(this.baseURl, body, options)
      // RES FROM SERVER
			.map(this.extractData)
  		.catch(this.handleError);
  }

  private extractData(res) {
    let body = res.json();
    return body.data || { };
  }

  private handleError (error: any) {
  	// In a real world app, we might use a remote logging infrastructure
  	// We'd also dig deeper into the error to get a better message
  	let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
