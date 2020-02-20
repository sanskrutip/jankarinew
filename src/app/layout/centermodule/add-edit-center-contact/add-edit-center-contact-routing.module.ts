import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { AddEditCenterContactComponent } from './add-edit-center-contact.component';



const routes: Routes = [
  { 
      path: '',
      component: AddEditCenterContactComponent,
     
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
export class AddEditCenterContactRoutingModule { }

