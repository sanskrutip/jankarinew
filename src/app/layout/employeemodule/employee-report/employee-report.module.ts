import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from 'src/app/shared';
import { EmployeeReportComponent } from './employee-report.component';
import { EmployeeReportRoutingModule } from './employee-report-routing.module';

import {  StatModule } from 'src/app/shared';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { MatSortModule } from '@angular/material';
@NgModule({
  declarations: [EmployeeReportComponent],
  imports: [
    CommonModule,
    EmployeeReportRoutingModule,
     PageHeaderModule,
     PageHeaderModule,
     StatModule,
     FlexLayoutModule.withConfig({addFlexToParent: false}),
     ReactiveFormsModule, FormsModule,
     NgxPaginationModule,MatSortModule
  ]
})
export class EmployeeReportModule { }
