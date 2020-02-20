import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalUbsCenterdetailComponent } from './cal-ubs-centerdetail.component';
import { CalUbsCenterdetailRoutingModule } from './cal-ubs-centerdetail-routing.module';
import {MatExpansionModule} from '@angular/material/expansion';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
@NgModule({
  declarations: [CalUbsCenterdetailComponent],
  imports: [
    CommonModule,
    CalUbsCenterdetailRoutingModule,
    MatExpansionModule,
    ReactiveFormsModule, FormsModule
  ]
})
export class CalUbsCenterdetailModule { }
