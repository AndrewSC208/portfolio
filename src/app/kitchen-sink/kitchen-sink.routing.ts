import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { KitchenSinkComponent } from './kitchen-sink.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
  { path: 'kitchen-sink', component: KitchenSinkComponent}
]);