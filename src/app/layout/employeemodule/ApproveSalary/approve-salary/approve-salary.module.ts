import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApproveSalaryComponent } from './approve-salary.component';
import { ApproveSalaryRoutingModule } from './approve-salary-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PageHeaderModule, StatModule } from 'src/app/shared';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [ApproveSalaryComponent],
  imports: [
    CommonModule,
    ApproveSalaryRoutingModule,
    ReactiveFormsModule, FormsModule,
    NgxPaginationModule, PageHeaderModule,
    StatModule,
  ]
})
export class ApproveSalaryModule { }
