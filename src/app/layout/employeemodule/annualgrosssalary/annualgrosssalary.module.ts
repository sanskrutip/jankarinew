import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnualgrosssalaryComponent } from './annualgrosssalary.component';
import { AnnualgrosssalaryRoutingModule } from './annualgrosssalary-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { PageHeaderModule, StatModule } from 'src/app/shared';
@NgModule({
  declarations: [AnnualgrosssalaryComponent],
  imports: [
    CommonModule,
    AnnualgrosssalaryRoutingModule,
    PageHeaderModule,
    StatModule,
    FlexLayoutModule.withConfig({addFlexToParent: false}),
    ReactiveFormsModule, FormsModule,NgxPaginationModule
  ]
})
export class AnnualgrosssalaryModule { }
