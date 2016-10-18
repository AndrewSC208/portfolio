import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';

import { routing } from './contact.routing';
import { MessageService } from './message.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    routing
  ],
  declarations: [
  	ContactComponent
  ],
  providers: [MessageService]
})
export class ContactModule { }
