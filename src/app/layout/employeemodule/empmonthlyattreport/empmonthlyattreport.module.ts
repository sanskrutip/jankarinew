import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpmonthlyattreportComponent } from './empmonthlyattreport.component';
import { EmpmonthlyattreportRoutingModule } from './empmonthlyattreport-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  declarations: [EmpmonthlyattreportComponent],
  imports: [
    CommonModule,
    EmpmonthlyattreportRoutingModule,
    FlexLayoutModule.withConfig({addFlexToParent: false}),
    ReactiveFormsModule, FormsModule,NgxPaginationModule
  ]
})
export class EmpmonthlyattreportModule { }
