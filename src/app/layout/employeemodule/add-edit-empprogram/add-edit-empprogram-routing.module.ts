import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddEditEmpprogramComponent } from './add-edit-empprogram.component';
const routes: Routes = [
  {
      path: '',
      component: AddEditEmpprogramComponent
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
export class AddEditEmpprogramRoutingModule { }
