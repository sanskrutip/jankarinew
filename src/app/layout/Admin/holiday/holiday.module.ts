import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HolidayComponent } from './holiday.component';
import { PageHeaderModule, StatModule } from 'src/app/shared';
import { HolidayRoutingModule } from './holiday-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [HolidayComponent],
  imports: [
    CommonModule,
    HolidayRoutingModule, 
    PageHeaderModule,
    StatModule,
    FlexLayoutModule,
    ReactiveFormsModule, FormsModule,
    NgxPaginationModule,NgbModule
  ]
})
export class HolidayModule { }



