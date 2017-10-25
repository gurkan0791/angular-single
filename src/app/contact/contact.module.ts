import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ContactComponent]
})
export class ContactModule { }
