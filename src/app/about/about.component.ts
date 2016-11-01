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
		{ title : 'About Me', text: 'About!!'},
		{ title : 'Work', text: 'this is some text, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus eos nobis inventore illo adipisci officiis debitis ut, molestiae minima dignissimos beatae veritatis non dolore nostrum. Laboriosam doloribus, fugiat fugit tempora!'},
		{ title : 'Education', text: 'sure another round of text, why not, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste natus cumque, recusandae cupiditate. Odio maiores voluptatibus labore nostrum, dolorum aliquid quisquam, quo aperiam, dicta hic quam iusto. Tenetur, atque, quidem.'},
		{ title : 'Play', text: 'And once again a different round of text, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore impedit, sapiente blanditiis vel, quaerat cumque! Vel odio corrupti autem quos. Nisi ex similique incidunt excepturi quam commodi culpa iure corporis.'},
	];

	// need to make a CARD interface
	selectedCard = this.cards[0];

	onSelect(card) {
		this.selectedCard = card;
	}

}
