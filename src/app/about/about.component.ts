import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],

})
export class AboutComponent implements OnInit {
	title: string = "center text"

	//title: string = "Andrew Meiling | Front-End Developer"

  constructor() { }

  ngOnInit() {
  }

	cards = [
		{ title : "About Me", text: 
			[ "I’m currently working as a Web Developer and Online Project Manager for Luth Research, an independent market research firm that conducts online surveys for large corporations. At Luth, I primarily work in Python, JavaScript, HTML, and CSS to build solutions for online market research.",
			 "I have a particular interest in working in Angular 2 and all things JavaScript, building applications with attractive and practical user interfaces."
			]},
		{ title : 'Education', text: 
			["Evangel University, Bachelor of Science in Marketing, 2009",
		   "Evangel University, Bachelor of Science in Business Management",
			 "CONTINUED EDUCATION:",
			 "Java 1 (Rio Salado College), Codecademy.com (HTML, CSS, JavaScript, Angular.js), 'Learn Python The Hard Way' by Zed A. Shaw, 'JavaScript The Definitive Guild' by David Flanagan, MongoDB University, NodeSchool.io (“Learn You Node”), and avid Pluralsight user"
			]},
		{ title : 'Play', text: 
			["When I'm building the internet, I spend my free time surfing, gaming, listening to podcasts, cooking, and hiking with my wife Brittany and Labrador pup Indie."]},
	];

	// need to make a CARD interface
	selectedCard = this.cards[0];

	onSelect(card) {
		this.selectedCard = card;
	}

}
