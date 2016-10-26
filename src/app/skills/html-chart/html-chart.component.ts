import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-html-chart',
  templateUrl: './html-chart.component.html',
  styleUrls: ['./html-chart.component.scss'],
})
export class HtmlChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // Doughnut
  public doughnutChartData:number[] = [100, 25];
  public doughnutChartType:string = 'doughnut';
  public doughnutChartColors: any[] = [
    { backgroundColor: ["rgba(255,255,255,.50)", "rgba(255,255,255,.10)"]}
  ];


  public chartHovered(e:any):void {
    console.log(e);
  }

}
