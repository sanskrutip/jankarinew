import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalUbsAddEditCenterinfoComponent } from './cal-ubs-add-edit-centerinfo.component';
import { CalUbsAddEditCenterinfoRoutingModule } from './cal-ubs-add-edit-centerinfo-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatInputModule, MatFormFieldModule, MatExpansionModule } from '@angular/material';
@NgModule({
  declarations: [CalUbsAddEditCenterinfoComponent],
  imports: [
    CommonModule,
    CalUbsAddEditCenterinfoRoutingModule,
    ReactiveFormsModule, FormsModule,NgxPaginationModule,MatExpansionModule,MatFormFieldModule,MatInputModule

  ]
})
export class CalUbsAddEditCenterinfoModule { }
