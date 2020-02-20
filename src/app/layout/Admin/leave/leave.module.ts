import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaveComponent } from './leave.component';
import { PageHeaderModule, StatModule } from 'src/app/shared';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { LeaveRoutingModule } from './leave-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [LeaveComponent],
  imports: [
    CommonModule,
    LeaveRoutingModule, 
    PageHeaderModule,
    StatModule,
    FlexLayoutModule,
    ReactiveFormsModule, FormsModule,
    NgxPaginationModule,NgbModule
  ]
})
export class LeaveModule { }





