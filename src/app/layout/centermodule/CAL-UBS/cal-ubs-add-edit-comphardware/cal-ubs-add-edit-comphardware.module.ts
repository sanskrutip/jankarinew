import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalUbsAddEditComphardwareComponent } from './cal-ubs-add-edit-comphardware.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatInputModule, MatFormFieldModule, MatExpansionModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CalUbsAddEditComphardwareRoutingModule } from './cal-ubs-add-edit-comphardware-routing.module';
@NgModule({
  declarations: [CalUbsAddEditComphardwareComponent],
  imports: [
    CommonModule,
    CalUbsAddEditComphardwareRoutingModule,
    ReactiveFormsModule, FormsModule,NgxPaginationModule,MatExpansionModule,MatFormFieldModule,MatInputModule,
    NgbModule
  ]
})
export class CalUbsAddEditComphardwareModule { }
