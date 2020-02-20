import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditPartnerdetailComponent } from './add-edit-partnerdetail.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { 
      path: '',
      component: AddEditPartnerdetailComponent,
     
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddEditPartnerdetailRoutingModule { }
