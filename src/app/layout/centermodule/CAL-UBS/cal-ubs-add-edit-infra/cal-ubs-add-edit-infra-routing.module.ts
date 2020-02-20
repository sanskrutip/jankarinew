import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CalUbsAddEditInfraComponent } from './cal-ubs-add-edit-infra.component';

const routes: Routes = [
  { 
      path: '',
      component: CalUbsAddEditInfraComponent,
     
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CalUbsAddEditInfraRoutingModule { }
