import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailyWorkListComponent } from './daily-work-list.component';
import { DailyWorkListRoutingModule } from './daily-work-list-routing.module';
import { PageHeaderModule, StatModule } from '../../shared';
import { NgxPaginationModule } from 'ngx-pagination';

import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
@NgModule({
  declarations: [DailyWorkListComponent],
  imports: [
    CommonModule,
    DailyWorkListRoutingModule,
    PageHeaderModule,
    StatModule,
    FlexLayoutModule.withConfig({addFlexToParent: false}),
    ReactiveFormsModule, FormsModule,NgxPaginationModule
  ]
})
export class DailyWorkListModule { }
