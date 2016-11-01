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
      "title"     : "Brandly",
      "subtitle"  : "This is a subtitle",
      "imgUrl"    : "http://res.cloudinary.com/drkmakxkk/image/upload/v1472444195/brandly_lln0xb.jpg",
      "url"       : "http://andrewmeilingbrand.s3-website-us-east-1.amazonaws.com",
      "text"      : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci iure maxime quis, nihil fuga ducimus blanditiis quos impedit consequuntur laudantium qui. Voluptates aliquid cum, repellat, facilis libero est cumque officia!",
      "sourceUrl" : "http://github.com/AndrewSC208/branded",
    },
    {
      "title"     : "Two Of A Kind",
      "subtitle"  : "This is the subtitle",
      "imgUrl"    : "https://res.cloudinary.com/drkmakxkk/image/upload/v1473345206/two_of_a_kind_nhiukm.png",
      "url"       : "http://andrewmeilingtwoofakind.s3-website-us-west-2.amazonaws.com/",
      "text"      : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto eveniet nesciunt veniam sit porro ipsam aliquid id maxime ab consequuntur, dicta soluta, iste modi. Vero dolore beatae minus ex ullam?",
      "sourceUrl" : "https://github.com/AndrewSC208/two-of-a-kind",
    },
    {
      "title"     : "Tiny One",
      "subtitle"  : "This is the subtitle",
      "imgUrl"    : "https://res.cloudinary.com/drkmakxkk/image/upload/v1473345035/tiny_one_e0x1it.png",
      "url"       : "http://andrewmeilingtinyonetheme.s3-website-us-west-2.amazonaws.com/",
      "text"      : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto eveniet nesciunt veniam sit porro ipsam aliquid id maxime ab consequuntur, dicta soluta, iste modi. Vero dolore beatae minus ex ullam?",
      "sourceUrl" : "https://github.com/AndrewSC208/TinyOne",
    },
    {
      "title"     : "Simple Biz",
      "subtitle"  : "This is the subtitle",
      "imgUrl"    : "https://res.cloudinary.com/drkmakxkk/image/upload/v1473344633/simple_biz_xurizl.png",
      "url"       : "http://andrewmeilingsimplebiz.s3-website-us-west-2.amazonaws.com/",
      "text"      : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto eveniet nesciunt veniam sit porro ipsam aliquid id maxime ab consequuntur, dicta soluta, iste modi. Vero dolore beatae minus ex ullam?",
      "sourceUrl" : "https://github.com/AndrewSC208/simple_biz",
    },
  ]

}


