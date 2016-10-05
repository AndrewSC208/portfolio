import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KitchenSinkComponent } from './kitchen-sink.component';

import { routing } from './kitchen-sink.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [KitchenSinkComponent]
})
export class KitchenSinkModule { }
