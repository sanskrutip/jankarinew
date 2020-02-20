import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApproveSalaryListComponent } from './approve-salary-list.component';
import { ApproveSalaryListRoutingModule } from './approve-salary-list-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PageHeaderModule, StatModule } from 'src/app/shared';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [ApproveSalaryListComponent],
  imports: [
    CommonModule,
    ApproveSalaryListRoutingModule,
    ReactiveFormsModule, FormsModule,
    NgxPaginationModule, PageHeaderModule,
    StatModule,
  ]
})
export class ApproveSalaryListModule { }
