import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditCenterContactComponent } from './add-edit-center-contact.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatInputModule, MatFormFieldModule, MatExpansionModule } from '@angular/material';
import { AddEditCenterContactRoutingModule } from './add-edit-center-contact-routing.module';

@NgModule({
  declarations: [AddEditCenterContactComponent],
  imports: [
    CommonModule,
    AddEditCenterContactRoutingModule,
    ReactiveFormsModule, FormsModule,NgxPaginationModule,MatExpansionModule,MatFormFieldModule,MatInputModule
  ]
})
export class AddEditCenterContactModule { }

