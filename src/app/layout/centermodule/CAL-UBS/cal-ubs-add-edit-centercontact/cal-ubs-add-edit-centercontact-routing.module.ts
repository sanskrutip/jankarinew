import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CalUbsAddEditCentercontactComponent } from './cal-ubs-add-edit-centercontact.component';

const routes: Routes = [
  { 
      path: '',
      component: CalUbsAddEditCentercontactComponent,
     
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CalUbsAddEditCentercontactRoutingModule { }
