import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalUbsAddEditAgreementComponent } from './cal-ubs-add-edit-agreement.component';
import { CalUbsAddEditAgreementRoutingModule } from './cal-ubs-add-edit-agreement-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [CalUbsAddEditAgreementComponent],
  imports: [
    CommonModule,
    CalUbsAddEditAgreementRoutingModule,
    ReactiveFormsModule, FormsModule ,NgbModule
  ]
})
export class CalUbsAddEditAgreementModule { }
