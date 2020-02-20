import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnersalaryComponent } from './partnersalary.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { StatModule, PageHeaderModule } from 'src/app/shared';
import { PartnersalaryRoutingModule } from './partnersalary-routing.module';



@NgModule({
  declarations: [PartnersalaryComponent],
  imports: [
    CommonModule,
    PartnersalaryRoutingModule,
    ReactiveFormsModule, FormsModule,
    NgxPaginationModule, PageHeaderModule,
    StatModule,
  ]
})
export class PartnersalaryModule { }


