import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {
	isClassVisible: false;
	isScrolled;

  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event']) 
    doSomething(event) {
    	if (document.body.scrollTop != 0) {
    		this.isScrolled = !this.isScrolled;
    	};

    	console.log(document.body.scrollTop);
  };
}
