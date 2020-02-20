import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { AddEditCenterTypeComponent } from './add-edit-center-type.component';

const routes: Routes = [
  { 
      path: '',
      component: AddEditCenterTypeComponent,
     
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AddEditCenterTypeRoutingModule { }

