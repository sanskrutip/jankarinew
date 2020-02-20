import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CalUbsAddEditSancharakdetailComponent } from './cal-ubs-add-edit-sancharakdetail.component';

const routes: Routes = [
  { 
      path: '',
      component:  CalUbsAddEditSancharakdetailComponent,
     
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CalUbsAddEditSancharakdetailRoutingModule { }
