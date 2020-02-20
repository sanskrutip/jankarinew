import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CalUbsAddEditOtherinfoComponent } from './cal-ubs-add-edit-otherinfo.component';

const routes: Routes = [
  { 
      path: '',
      component: CalUbsAddEditOtherinfoComponent,
     
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CalUbsAddEditOtherinfoRoutingModule { }
