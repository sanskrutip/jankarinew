import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CalUbsAddEditCenterinfoComponent } from './cal-ubs-add-edit-centerinfo.component';
const routes: Routes = [
  { 
      path: '',
      component: CalUbsAddEditCenterinfoComponent,
     
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CalUbsAddEditCenterinfoRoutingModule { }
