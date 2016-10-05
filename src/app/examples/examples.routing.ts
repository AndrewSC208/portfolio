import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { ExamplesComponent } from './examples.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
  { path: 'examples', component: ExamplesComponent}
]);