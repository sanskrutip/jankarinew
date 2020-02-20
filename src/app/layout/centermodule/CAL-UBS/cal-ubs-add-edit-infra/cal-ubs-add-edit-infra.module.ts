import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalUbsAddEditInfraComponent } from './cal-ubs-add-edit-infra.component';
import { CalUbsAddEditInfraRoutingModule } from './cal-ubs-add-edit-infra-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatInputModule, MatFormFieldModule, MatExpansionModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [CalUbsAddEditInfraComponent],
  imports: [
    CommonModule,
    CalUbsAddEditInfraRoutingModule,
    ReactiveFormsModule, FormsModule,NgxPaginationModule,MatExpansionModule,MatFormFieldModule,MatInputModule,NgbModule

  ]
})
export class CalUbsAddEditInfraModule { }
