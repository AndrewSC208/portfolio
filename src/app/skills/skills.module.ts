import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills.component';

import { routing } from './skills.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [SkillsComponent]
})
export class SkillsModule { }
