import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailyWorkSummaryComponent } from './daily-work-summary.component';
import { DailyWorkSummaryRoutingModule } from './daily-work-summary-routing.module';
import { PageHeaderModule, StatModule } from '../../shared';
import { NgxPaginationModule } from 'ngx-pagination';

import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
@NgModule({
  declarations: [DailyWorkSummaryComponent],
  imports: [
    CommonModule,
    DailyWorkSummaryRoutingModule,
    PageHeaderModule,
    StatModule,
    FlexLayoutModule.withConfig({addFlexToParent: false}),
    ReactiveFormsModule, FormsModule,NgxPaginationModule
  ]
})
export class DailyWorkSummaryModule { }
