import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalUbsAddEditPartnerComponent } from './cal-ubs-add-edit-partner.component';
import { CalUbsAddEditPartnerRoutingModule } from './cal-ubs-add-edit-partner-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatExpansionModule} from '@angular/material/expansion';
@NgModule({
  declarations: [CalUbsAddEditPartnerComponent],
  imports: [
    CommonModule,
    CalUbsAddEditPartnerRoutingModule,
    ReactiveFormsModule, FormsModule ,NgbModule,MatExpansionModule
  ]
})
export class CalUbsAddEditPartnerModule { }
