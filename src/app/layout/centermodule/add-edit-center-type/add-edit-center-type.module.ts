import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditCenterTypeComponent } from './add-edit-center-type.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatInputModule, MatFormFieldModule, MatExpansionModule } from '@angular/material';
import { AddEditCenterTypeRoutingModule } from './add-edit-center-type-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AddEditCenterTypeComponent],
  imports: [
    CommonModule,
    AddEditCenterTypeRoutingModule,
    ReactiveFormsModule, FormsModule,NgxPaginationModule,MatExpansionModule,MatFormFieldModule,MatInputModule,NgbModule
  ]
})
export class AddEditCenterTypeModule { }

