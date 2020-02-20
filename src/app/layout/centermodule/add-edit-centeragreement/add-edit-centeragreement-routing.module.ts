import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddEditCenteragreementComponent } from './add-edit-centeragreement.component';

const routes: Routes = [
  { 
      path: '',
      component: AddEditCenteragreementComponent,
     
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddEditCenteragreementRoutingModule { }
