import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CalUbsAddEditPartnerComponent } from './cal-ubs-add-edit-partner.component';


const routes: Routes = [
  { 
      path: '',
      component: CalUbsAddEditPartnerComponent,
     
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CalUbsAddEditPartnerRoutingModule { }
