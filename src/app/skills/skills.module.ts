import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills.component';

import { routing } from './skills.routing';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { HtmlChartComponent } from './html-chart/html-chart.component';

@NgModule({
  imports: [
    CommonModule,
    routing,
    ChartsModule
  ],
  declarations: [SkillsComponent, HtmlChartComponent]
})
export class SkillsModule { }
