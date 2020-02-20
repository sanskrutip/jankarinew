import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { AddDailyWorkComponent } from './add-daily-work.component';
import { AddDailyWorkRoutingModule } from './add-daily-work-routing.module';
import { PageHeaderModule, StatModule } from '../../shared';
import { NgxPaginationModule } from 'ngx-pagination';

import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AddDailyWorkComponent],
  imports: [
    CommonModule,
    AddDailyWorkRoutingModule,
    PageHeaderModule,
    StatModule,
    FlexLayoutModule.withConfig({addFlexToParent: false}),
    ReactiveFormsModule, FormsModule,NgxPaginationModule,NgbModule
  ],
  providers: [
    DatePipe
  ],
})
export class AddDailyWorkModule { }
