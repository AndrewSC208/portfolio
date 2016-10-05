import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { ContactComponent } from './contact.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
  { path: 'contact', component: ContactComponent}
]);