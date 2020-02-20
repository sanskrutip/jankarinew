import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalUbsAddEditOtherinfoComponent } from './cal-ubs-add-edit-otherinfo.component';
import { CalUbsAddEditOtherinfoRoutingModule } from './cal-ubs-add-edit-otherinfo-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatInputModule, MatFormFieldModule, MatExpansionModule } from '@angular/material';
@NgModule({
  declarations: [CalUbsAddEditOtherinfoComponent],
  imports: [
    CommonModule,
    CalUbsAddEditOtherinfoRoutingModule,
    ReactiveFormsModule, FormsModule,NgxPaginationModule,MatExpansionModule,MatFormFieldModule,MatInputModule

  ]
})
export class CalUbsAddEditOtherinfoModule { }
