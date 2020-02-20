import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalUbsAddEditCentercontactComponent } from './cal-ubs-add-edit-centercontact.component';
import { CalUbsAddEditCentercontactRoutingModule } from './cal-ubs-add-edit-centercontact-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatInputModule, MatFormFieldModule, MatExpansionModule } from '@angular/material';
@NgModule({
  declarations: [CalUbsAddEditCentercontactComponent],
  imports: [
    CommonModule,
    CalUbsAddEditCentercontactRoutingModule,
    ReactiveFormsModule, FormsModule,NgxPaginationModule,MatExpansionModule,MatFormFieldModule,MatInputModule
    

  ]
})
export class CalUbsAddEditCentercontactModule { }
