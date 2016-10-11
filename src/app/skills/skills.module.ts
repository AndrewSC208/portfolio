import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills.component';

import { routing } from './skills.routing';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { HtmlChartComponent } from './html-chart/html-chart.component';
import { JsChartComponent } from './js-chart/js-chart.component';
import { CssChartComponent } from './css-chart/css-chart.component';

@NgModule({
  imports: [
    CommonModule,
    routing,
    ChartsModule
  ],
  declarations: [SkillsComponent, HtmlChartComponent, JsChartComponent, CssChartComponent]
})
export class SkillsModule { }
