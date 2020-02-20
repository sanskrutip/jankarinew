import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditCenterComponent } from './add-edit-center.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddEditCenterRoutingModule } from './add-edit-center-routing.module';
import { MatInputModule, MatFormFieldModule, MatExpansionModule } from '@angular/material';

@NgModule({
  declarations: [AddEditCenterComponent],
  imports: [
    CommonModule,
    AddEditCenterRoutingModule,
    ReactiveFormsModule, FormsModule,NgxPaginationModule,MatExpansionModule,MatFormFieldModule,MatInputModule
  ]
})
export class AddEditCenterModule { }

