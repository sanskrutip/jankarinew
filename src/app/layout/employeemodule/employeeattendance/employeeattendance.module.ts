import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeattendanceComponent } from './employeeattendance.component';
import { PageHeaderModule, StatModule } from 'src/app/shared';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { EmployeeattendanceRoutingModule } from './employeeattendance-routing.module';
import {  MatTooltipModule,MatButtonModule,
  MatIconModule } from '@angular/material';



@NgModule({
  declarations: [EmployeeattendanceComponent],
  imports: [
    CommonModule,
    EmployeeattendanceRoutingModule, 
    PageHeaderModule,
    StatModule,
    FlexLayoutModule.withConfig({addFlexToParent: false}),
    ReactiveFormsModule, FormsModule,NgxPaginationModule,
    MatTooltipModule,MatButtonModule,
    MatIconModule
  ]
})
export class EmployeeattendanceModule { }




