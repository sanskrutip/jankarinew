import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditCenteragreementComponent } from './add-edit-centeragreement.component';
import { AddEditCenteragreementRoutingModule } from './add-edit-centeragreement-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AddEditCenteragreementComponent],
  imports: [
    CommonModule,
    AddEditCenteragreementRoutingModule,
    ReactiveFormsModule, FormsModule ,NgbModule
  ]
})
export class AddEditCenteragreementModule { }
