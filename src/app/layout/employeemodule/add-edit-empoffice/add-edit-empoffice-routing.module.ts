import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditEmpofficeComponent } from './add-edit-empoffice.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
      path: '',
      component: AddEditEmpofficeComponent
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
export class AddEditEmpofficeRoutingModule { }
