import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalarylistComponent } from './salarylist.component';
import { SalarylistRoutingModule } from './salarylist-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { PageHeaderModule, StatModule } from 'src/app/shared';

@NgModule({
  declarations: [SalarylistComponent],
  imports: [
    CommonModule,
    SalarylistRoutingModule,
    ReactiveFormsModule, FormsModule,NgxPaginationModule,
    PageHeaderModule,StatModule
  ]
})
export class SalarylistModule { }
