import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css-chart',
  templateUrl: './css-chart.component.html',
  styleUrls: ['./css-chart.component.scss']
})
export class CssChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // Doughnut
  public doughnutChartData:number[] = [100, 50];
  public doughnutChartType:string = 'doughnut';
  public doughnutChartColors: any[] = [
    { backgroundColor: ["#00fff", "#000000"]}
  ];


  public chartHovered(e:any):void {
    console.log(e);
  }

}
