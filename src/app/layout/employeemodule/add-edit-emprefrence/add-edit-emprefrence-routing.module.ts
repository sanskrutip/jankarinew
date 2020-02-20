import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddEditEmprefrenceComponent } from './add-edit-emprefrence.component';
const routes: Routes = [
  {
      path: '',
      component: AddEditEmprefrenceComponent
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
export class AddEditEmprefrenceRoutingModule { }
