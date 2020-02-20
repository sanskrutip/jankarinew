import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdiAddEditCenterInfoComponent } from './idi-add-edit-center-info.component';
import { IdiAddEditCenterInfoRoutingModule } from './idi-add-edit-center-info-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatExpansionModule, MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
  declarations: [IdiAddEditCenterInfoComponent],
  imports: [
    CommonModule,
    IdiAddEditCenterInfoRoutingModule,
    ReactiveFormsModule, FormsModule,NgxPaginationModule,MatExpansionModule,MatFormFieldModule,MatInputModule
  ]
})
export class IdiAddEditCenterInfoModule { }
