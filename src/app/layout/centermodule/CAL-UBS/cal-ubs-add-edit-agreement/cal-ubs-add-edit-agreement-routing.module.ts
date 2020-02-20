import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalUbsAddEditAgreementComponent } from './cal-ubs-add-edit-agreement.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { 
      path: '',
      component: CalUbsAddEditAgreementComponent,
     
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CalUbsAddEditAgreementRoutingModule { }
