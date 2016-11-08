import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  portfolioItems = [
  {
      "title"     : "Portfolio",
      "subtitle"  : "Angular 2 portfolio",
      "imgUrl"    : "http://res.cloudinary.com/drkmakxkk/image/upload/v1472444195/brandly_lln0xb.jpg",
      "url"       : "http://andrewmeilingbrand.s3-website-us-east-1.amazonaws.com",
      "tech_used" : "Angular 2, TypeScript, Node.js, SASS, Bootstrap 4",
      "text"      : "My new portfolio built on Angular 2.",
      "sourceUrl" : "http://github.com/AndrewSC208/portfolio",
    },
    {
      "title"     : "Brandly",
      "subtitle"  : "A simple retail layout",
      "imgUrl"    : "http://res.cloudinary.com/drkmakxkk/image/upload/v1472444195/brandly_lln0xb.jpg",
      "url"       : "http://andrewmeilingbrand.s3-website-us-east-1.amazonaws.com",
      "tech_used" : "HTML, CSS (SASS), Bootstrap 3, JQuery, Gulp",
      "text"      : "A retail theme for any brick and mortor to go digital.",
      "sourceUrl" : "http://github.com/AndrewSC208/branded",
    },
    {
      "title"     : "Two Of A Kind",
      "subtitle"  : "A JavaScript Card Game",
      "imgUrl"    : "https://res.cloudinary.com/drkmakxkk/image/upload/v1473345206/two_of_a_kind_nhiukm.png",
      "url"       : "http://andrewmeilingtwoofakind.s3-website-us-west-2.amazonaws.com/",
      "tech_used" : "HTML, CSS, JavaScript, JQuery, Ajax",
      "text"      : "Find the winner with the best pair.",
      "sourceUrl" : "https://github.com/AndrewSC208/two-of-a-kind",
    },
    {
      "title"     : "Tiny One",
      "subtitle"  : "Minimalism at its finest",
      "imgUrl"    : "https://res.cloudinary.com/drkmakxkk/image/upload/v1473345035/tiny_one_e0x1it.png",
      "url"       : "http://andrewmeilingtinyonetheme.s3-website-us-west-2.amazonaws.com/",
      "tech_used" : "HTML, CSS (SASS), Bootstrap 3, JQuery, Gulp",
      "text"      : "Build an inspiring web presents with this clean marketing layout.",
      "sourceUrl" : "https://github.com/AndrewSC208/TinyOne",
    },
    {
      "title"     : "Simple Biz",
      "subtitle"  : "A clean business layout",
      "imgUrl"    : "https://res.cloudinary.com/drkmakxkk/image/upload/v1473344633/simple_biz_xurizl.png",
      "url"       : "http://andrewmeilingsimplebiz.s3-website-us-west-2.amazonaws.com/",
      "tech_used" : "HTML, CSS (SASS), Bootstrap 3, JQuery, Gulp",
      "text"      : "Responsive layout to get any business started.",
      "sourceUrl" : "https://github.com/AndrewSC208/simple_biz",
    },
  ]

}


