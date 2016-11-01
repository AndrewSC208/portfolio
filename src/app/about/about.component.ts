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
		{ title : "About Me", text: "Front-End Developer with a background in marketing and management. </br> I’m currently working as a Web Developer and Online Project Manager for Luth Research, an independent market research firm that conducts online surveys for large corporations. At Luth, I primarily work in Python, JavaScript, HTML, and CSS to code online surveys. These surveys are delivered to millions of people through the company’s proprietary mobile app SavvyConnect, and the data is used to fuel business intelligence. </br> In addition to my work at Luth, I also do part-time Front-End work for a local software startup in San Diego called Urban Translations. </br> I have a particular interest in working in Angular 2 and all things JavaScript, building applications with attractive and practical user interfaces."},
		{ title : 'Education', text: "Evangel University, Bachelor of Science in Marketing, 2009 </br> Evangel University, Bachelor of Science in Business Management </br> CONTINUED EDUCATION </br> Current course:​ MongoDB University, NodeSchool.io (“Learn You Node”) – to gain a better understanding of asynchronous JavaScript, and JavaScript server technologies Completed course:​ Java 1 (Rio Salado College), Codecademy.com (HTML, CSS, JavaScript, Angular.js)"},
		{ title : 'Play', text: "When I'm not working, I spend my free time surfing, gaming, listening to podcasts, cooking, and hiking with my wife Brittany and Labrador pup Indie."},
	];

	// need to make a CARD interface
	selectedCard = this.cards[0];

	onSelect(card) {
		this.selectedCard = card;
	}

}
