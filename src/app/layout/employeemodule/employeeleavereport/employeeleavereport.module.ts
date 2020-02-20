import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeleavereportComponent } from './employeeleavereport.component';
import { EmployeeleavereportRoutingModule } from './employeeleavereport-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  declarations: [EmployeeleavereportComponent],
  imports: [
    CommonModule,
    EmployeeleavereportRoutingModule,
    FlexLayoutModule.withConfig({addFlexToParent: false}),
    ReactiveFormsModule, FormsModule,NgxPaginationModule
  ]
})
export class EmployeeleavereportModule { }
