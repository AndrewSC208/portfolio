export class Message {
	
	constructor(
		public sender_name  : string,
		public email        : string,
		public subject      : string,
		public message_body : string,
		public fun_fact?    : string
	){ }

}