import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditOfficeComponent } from './add-edit-office.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
      path: '',
      component: AddEditOfficeComponent
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
export class AddEditOfficeRoutingModule { }
