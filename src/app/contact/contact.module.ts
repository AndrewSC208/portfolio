import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';

import { routing } from './contact.routing';
import { MessageService } from './message.service';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
  	ContactComponent
  ],
  providers: [MessageService]
})
export class ContactModule { }
