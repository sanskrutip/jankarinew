import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditPartnerdetailComponent } from './add-edit-partnerdetail.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatExpansionModule} from '@angular/material/expansion';
import { AddEditPartnerdetailRoutingModule } from './add-edit-partnerdetail-routing.module';
@NgModule({
  declarations: [AddEditPartnerdetailComponent],
  imports: [
    CommonModule,
    AddEditPartnerdetailRoutingModule,
    ReactiveFormsModule, FormsModule ,NgbModule,MatExpansionModule
  ]
})
export class AddEditPartnerdetailModule { }
