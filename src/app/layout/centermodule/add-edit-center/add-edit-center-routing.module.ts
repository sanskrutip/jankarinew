import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddEditCenterComponent } from './add-edit-center.component';

const routes: Routes = [
  { 
      path: '',
      component: AddEditCenterComponent,
     
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
export class AddEditCenterRoutingModule { }
