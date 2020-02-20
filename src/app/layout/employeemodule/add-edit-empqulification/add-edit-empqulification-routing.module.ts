import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddEditEmpqulificationComponent } from './add-edit-empqulification.component';
const routes: Routes = [
  {
      path: '',
      component: AddEditEmpqulificationComponent
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
export class AddEditEmpqulificationRoutingModule { }
