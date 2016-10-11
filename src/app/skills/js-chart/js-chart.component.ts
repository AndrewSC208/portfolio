import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-js-chart',
  templateUrl: './js-chart.component.html',
  styleUrls: ['./js-chart.component.scss']
})
export class JsChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // Doughnut
  public doughnutChartData:number[] = [100, 25];
  public doughnutChartType:string = 'doughnut';
  public doughnutChartColors: any[] = [
    { backgroundColor: ["#00fff", "#000000"]}
  ];


  public chartHovered(e:any):void {
    console.log(e);
  }

}