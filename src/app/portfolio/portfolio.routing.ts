import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { PortfolioComponent } from './portfolio.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
  { path: 'portfolio', component: PortfolioComponent}
]);