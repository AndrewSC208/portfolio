import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';

import { routing } from './portfolio.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [PortfolioComponent]
})
export class PortfolioModule { }
