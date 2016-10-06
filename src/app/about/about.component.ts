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

}
