import { Component, OnInit } from '@angular/core';

let template = require('./css-chart.component.html');


@Component({
  selector: 'app-css-chart',
  templateUrl: template,
  styleUrls: ['./css-chart.component.scss']
})
export class CssChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // Doughnut
  public doughnutChartData:number[] = [85, 15];
  public doughnutChartType:string = 'doughnut';
  public doughnutChartColors: any[] = [
    { backgroundColor: ["rgba(255,255,255,.50)", "rgba(255,255,255,.10)"]}
  ];
  public doughnutChartLabels:string[] = ['CSS Skills'];
  public options = {
    "cutoutPercentage" : "65"
  };
}
