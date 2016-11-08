import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {
	isClassVisible = false;
	isScrolled = false;
  scrollVal = 0;

  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event']) 
    doSomething(event) {
    	if (document.body.scrollTop && !this.isClassVisible) {
    		this.isScrolled = true;
        this.scrollVal = document.body.scrollTop;
    	};

      if (document.body.scrollTop === 0) {
        this.isScrolled = false;
        this.scrollVal = document.body.scrollTop;
      };
    	
  };

  changeMenu() {
    if (this.scrollVal == 0) {
      this.isScrolled=this.isScrolled;
    } else {
      this.isScrolled=!this.isScrolled;
    }
    
  }
}
