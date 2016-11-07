import { Component, OnInit } from '@angular/core';

let template = require('./css-chart.component.html');


@Component({
  selector: 'app-css-chart',
  templateUrl: template,
  styleUrls: ['./css-chart.component.scss']
})
export class CssChartComponent implements OnInit {
  val = 85;
  remainder = 100 - this.val;

  constructor() { }

  ngOnInit() {
  }

  // Doughnut
  public doughnutChartLabels:string[] = ['CSS', 'Remaining CSS'];
  public doughnutChartData:number[] = [this.val, this.remainder];
  public doughnutChartType:string = 'doughnut';
  public doughnutChartColors: any[] = [
    { 
      backgroundColor: ["rgba(255,255,255,.50)", "rgba(255,255,255,.10)"],
      borderWidth : 0,
    }
  ];
 
  // I need to dive a little deeper into the chart settings, I would like to remove the border!
  public options = {
    cutoutPercentage : "75",
    legend: {
      display: false
    },
    animation: {
      duration: 1500,
      animateRotate: true,
      animateScale: false,
    },
    tooltip: {
        enabled: false,
      }
  };

}
