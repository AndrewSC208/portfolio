import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-html-chart',
  templateUrl: './html-chart.component.html',
  styleUrls: ['./html-chart.component.scss'],
})
export class HtmlChartComponent implements OnInit {

  val = 95;
  remainder = 100 - this.val;

  constructor() { }
  ngOnInit() { }

  // Doughnut
  public doughnutChartLabels:string[] = ['HTML', 'Remaining HTML'];
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
