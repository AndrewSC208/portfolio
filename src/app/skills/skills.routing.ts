import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { SkillsComponent } from './skills.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
  { path: 'skills', component: SkillsComponent}
]);