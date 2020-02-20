import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdiAddEditContactComponent } from './idi-add-edit-contact.component';
import { IdiAddEditContactRoutingModule } from './idi-add-edit-contact-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatExpansionModule, MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
  declarations: [IdiAddEditContactComponent],
  imports: [
    CommonModule,
    IdiAddEditContactRoutingModule,
    ReactiveFormsModule, FormsModule,NgxPaginationModule,MatExpansionModule,MatFormFieldModule,MatInputModule
  ]
})
export class IdiAddEditContactModule { }
