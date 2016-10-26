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
    { backgroundColor: ["rgba(255,255,255,.50)", "rgba(255,255,255,.10)"]}
  ];


  public chartHovered(e:any):void {
    console.log(e);
  }

}
