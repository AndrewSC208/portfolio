import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamplesComponent } from './examples.component';

import { routing } from './examples.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [ExamplesComponent]
})
export class ExamplesModule { }
